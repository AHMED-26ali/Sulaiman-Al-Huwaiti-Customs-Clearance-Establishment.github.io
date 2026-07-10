import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  enabled: boolean;
  className?: string;
}

export default function ThreeBackground({ enabled, className = "" }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    stars?: THREE.Points;
    animationId?: number;
  }>({});
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!enabled || !mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    
    // تحسينات الأداء: تعطيل antialias وتحديد pixel ratio
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, // تعطيل antialias لتوفير GPU
      powerPreference: 'low-power' // استخدام GPU أقل استهلاكاً
    });
    
    // تحديد pixel ratio لتوفير الأداء على الشاشات عالية الدقة
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(pixelRatio);
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // تقليل عدد النجوم من 2000 إلى 800
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 1.5, // تقليل الحجم
      transparent: true,
      opacity: 0.6, // تقليل الشفافية
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true // تحسين الأداء
    });

    const starsVertices = [];
    const starCount = 800; // تقليل العدد
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 1500; // تقليل المدى
      const y = (Math.random() - 0.5) * 1500;
      const z = (Math.random() - 0.5) * 1500;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // تقليل الأشكال الهندسية من 3 إلى 2
    const shapes: THREE.Mesh[] = [];
    
    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(40, 0); // تقليل الحجم
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.25 // تقليل الشفافية
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(-100, 50, -200);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Dodecahedron
    const dodecaGeometry = new THREE.DodecahedronGeometry(35, 0); // تقليل الحجم
    const dodecaMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.2 // تقليل الشفافية
    });
    const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    dodecahedron.position.set(150, -80, -300);
    scene.add(dodecahedron);
    shapes.push(dodecahedron);

    camera.position.z = 100;

    // Store references
    sceneRef.current = { scene, camera, renderer, stars };

    // تحسين الـ animation loop
    let lastTime = 0;
    const targetFPS = 30; // تقليل FPS من 60 إلى 30
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (!isVisible) {
        sceneRef.current.animationId = requestAnimationFrame(animate);
        return;
      }

      // Throttle الـ animation لتقليل استهلاك CPU
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) {
        sceneRef.current.animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // تقليل سرعة الدوران
      if (stars) {
        stars.rotation.x += 0.0003; // تقليل السرعة
        stars.rotation.y += 0.0005;
      }

      // تقليل سرعة دوران الأشكال
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003 + index * 0.0008; // تقليل السرعة
        shape.rotation.y += 0.005 + index * 0.001;
        shape.rotation.z += 0.002 + index * 0.001;
      });

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    sceneRef.current.animationId = requestAnimationFrame(animate);

    // تحسين الـ resize handler مع throttle
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!mountRef.current) return;
        
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }, 200); // Throttle لمدة 200ms
    };

    window.addEventListener('resize', handleResize);

    // Cleanup محسّن
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      starsGeometry.dispose();
      starsMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      dodecaGeometry.dispose();
      dodecaMaterial.dispose();
      renderer.dispose();
      
      // مسح الـ scene
      scene.clear();
    };
  }, [enabled, isVisible]);

  if (!enabled) return null;

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
