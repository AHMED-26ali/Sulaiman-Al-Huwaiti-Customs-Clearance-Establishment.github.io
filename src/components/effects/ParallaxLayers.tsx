import { useEffect, useState, useRef } from 'react';

interface ParallaxLayersProps {
  className?: string;
}

export default function ParallaxLayers({ className = "" }: ParallaxLayersProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  const layers = [
    {
      id: 'layer1',
      speed: 0.1,
      opacity: 0.1,
      size: 'w-96 h-96',
      color: 'bg-gradient-to-br from-blue-400/20 to-purple-400/20',
      position: 'top-10 left-10',
      blur: 'blur-3xl'
    },
    {
      id: 'layer2',
      speed: 0.2,
      opacity: 0.15,
      size: 'w-80 h-80',
      color: 'bg-gradient-to-br from-purple-400/25 to-pink-400/25',
      position: 'top-1/3 right-10',
      blur: 'blur-2xl'
    },
    {
      id: 'layer3',
      speed: 0.15,
      opacity: 0.12,
      size: 'w-72 h-72',
      color: 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20',
      position: 'bottom-20 left-1/4',
      blur: 'blur-3xl'
    },
    {
      id: 'layer4',
      speed: 0.25,
      opacity: 0.08,
      size: 'w-64 h-64',
      color: 'bg-gradient-to-br from-green-400/15 to-teal-400/15',
      position: 'bottom-10 right-1/3',
      blur: 'blur-2xl'
    }
  ];

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ zIndex: 0 }}>
      {layers.map((layer) => (
        <div
          key={layer.id}
          className={`absolute ${layer.size} ${layer.color} ${layer.position} ${layer.blur} rounded-full transition-transform duration-1000 ease-out`}
          style={{
            transform: `translate(${mousePosition.x * layer.speed * 50}px, ${mousePosition.y * layer.speed * 50}px)`,
            opacity: isVisible ? layer.opacity : 0,
          }}
        />
      ))}
      
      {/* Additional floating geometric shapes */}
      <div
        className="absolute top-1/4 left-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 transform rotate-45 blur-lg transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.3 * 30}px, ${mousePosition.y * 0.3 * 30}px) rotate(45deg)`,
          opacity: isVisible ? 0.1 : 0,
        }}
      />
      
      <div
        className="absolute bottom-1/3 right-1/4 w-12 h-24 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 blur-xl transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.18 * 40}px, ${mousePosition.y * 0.18 * 40}px)`,
          opacity: isVisible ? 0.12 : 0,
        }}
      />
    </div>
  );
}