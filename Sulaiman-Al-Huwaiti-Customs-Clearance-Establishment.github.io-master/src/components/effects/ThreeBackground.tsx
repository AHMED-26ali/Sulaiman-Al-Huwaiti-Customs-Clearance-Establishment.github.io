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
    geometry?: THREE.BufferGeometry;
    material?: THREE.PointsMaterial;
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
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create starfield
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 2,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const starsVertices = [];
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create low-poly geometric shapes
    const shapes: THREE.Mesh[] = [];
    
    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(50, 0);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(-100, 50, -200);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Dodecahedron
    const dodecaGeometry = new THREE.DodecahedronGeometry(40, 0);
    const dodecaMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const dodecahedron = new THREE.Mesh(dodecaGeometry, dodecaMaterial);
    dodecahedron.position.set(150, -80, -300);
    scene.add(dodecahedron);
    shapes.push(dodecahedron);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(35, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, 100, -250);
    scene.add(octahedron);
    shapes.push(octahedron);

    camera.position.z = 100;

    // Store references
    sceneRef.current = { scene, camera, renderer, stars, geometry: starsGeometry, material: starsMaterial };

    // Animation loop
    const animate = () => {
      if (!isVisible) {
        sceneRef.current.animationId = requestAnimationFrame(animate);
        return;
      }

      // Rotate stars
      if (stars) {
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0008;
      }

      // Rotate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.001;
        shape.rotation.y += 0.008 + index * 0.002;
        shape.rotation.z += 0.003 + index * 0.0015;
      });

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      starsGeometry.dispose();
      starsMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      dodecaGeometry.dispose();
      dodecaMaterial.dispose();
      octaGeometry.dispose();
      octaMaterial.dispose();
      renderer.dispose();
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