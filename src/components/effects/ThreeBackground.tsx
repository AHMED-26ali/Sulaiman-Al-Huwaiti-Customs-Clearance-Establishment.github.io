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

    let disposed = false;
    let starsGeometry: THREE.BufferGeometry;
    let starsMaterial: THREE.PointsMaterial;
    let icoGeometry: THREE.IcosahedronGeometry;
    let icoMaterial: THREE.MeshBasicMaterial;
    let dodecaGeometry: THREE.DodecahedronGeometry;
    let dodecaMaterial: THREE.MeshBasicMaterial;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let stars: THREE.Points;
    const shapes: THREE.Mesh[] = [];
    let resizeTimeout: NodeJS.Timeout;

    const rafId = requestAnimationFrame(() => {
      if (disposed || !mountRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      
      // تحسينات الأداء: تعطيل antialias وتحديد pixel ratio
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: false,
        powerPreference: 'low-power'
      });
      
      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);

      starsGeometry = new THREE.BufferGeometry();
      starsMaterial = new THREE.PointsMaterial({
        color: 0x60a5fa,
        size: 1.5,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });

      const starsVertices = [];
      const starCount = 600;
      for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 1500;
        const y = (Math.random() - 0.5) * 1500;
        const z = (Math.random() - 0.5) * 1500;
        starsVertices.push(x, y, z);
      }

      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
      stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      icoGeometry = new THREE.IcosahedronGeometry(40, 0);
      icoMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.25
      });
      const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
      icosahedron.position.set(-100, 50, -200);
      scene.add(icosahedron);
      shapes.push(icosahedron);

      dodecaGeometry = new THREE.DodecahedronGeometry(35, 0);
      dodecaMaterial = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
      dodecahedron.position.set(150, -80, -300);
      scene.add(dodecahedron);
      shapes.push(dodecahedron);

      camera.position.z = 100;
      sceneRef.current = { scene, camera, renderer, stars };

      let lastTime = 0;
      const targetFPS = 30;
      const frameInterval = 1000 / targetFPS;

      const animate = (currentTime: number) => {
        if (disposed) return;
        if (!isVisible) {
          sceneRef.current.animationId = requestAnimationFrame(animate);
          return;
        }

        const deltaTime = currentTime - lastTime;
        if (deltaTime < frameInterval) {
          sceneRef.current.animationId = requestAnimationFrame(animate);
          return;
        }
        lastTime = currentTime;

        if (stars) {
          stars.rotation.x += 0.0003;
          stars.rotation.y += 0.0005;
        }

        shapes.forEach((shape, index) => {
          shape.rotation.x += 0.003 + index * 0.0008;
          shape.rotation.y += 0.005 + index * 0.001;
          shape.rotation.z += 0.002 + index * 0.001;
        });

        renderer.render(scene, camera);
        sceneRef.current.animationId = requestAnimationFrame(animate);
      };

      sceneRef.current.animationId = requestAnimationFrame(animate);
    });

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!mountRef.current || !renderer || !camera) return;
        
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      
      if (mountRef.current && renderer && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      starsGeometry?.dispose();
      starsMaterial?.dispose();
      icoGeometry?.dispose();
      icoMaterial?.dispose();
      dodecaGeometry?.dispose();
      dodecaMaterial?.dispose();
      renderer?.dispose();
      scene?.clear();
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
