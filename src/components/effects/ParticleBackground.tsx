import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadExternalAttractInteraction } from "@tsparticles/interaction-external-attract";
import { loadExternalBubbleInteraction } from "@tsparticles/interaction-external-bubble";
import { loadExternalGrabInteraction } from "@tsparticles/interaction-external-grab";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse";
import type { Engine } from "@tsparticles/engine";

interface ParticleBackgroundProps {
  particleColor?: string;
  linkColor?: string;
  particleCount?: number;
  className?: string;
}

export default function ParticleBackground({
  particleColor = "#60a5fa",
  linkColor = "#60a5fa",
  particleCount,
  className = ""
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
    await loadParticlesLinksInteraction(engine);
    await loadExternalAttractInteraction(engine);
    await loadExternalBubbleInteraction(engine);
    await loadExternalGrabInteraction(engine);
    await loadExternalPushInteraction(engine);
    await loadExternalRepulseInteraction(engine);
  }, []);

  // Dynamic particle count based on screen size
  const getParticleCount = () => {
    if (particleCount) return particleCount;
    
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 768) return 30; // Mobile
      if (width < 1024) return 60; // Tablet
      return 120; // Desktop
    }
    return 60; // Default
  };

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "bubble",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 8,
          speed: 3,
        },
        grab: {
          distance: 150,
          links: {
            opacity: 0.8,
          },
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 3,
          maxSpeed: 50,
          speed: 1,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: linkColor,
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: getParticleCount(),
      },
      opacity: {
        value: 0.5,
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        random: {
          enable: true,
          minimumValue: 1,
        },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  }), [particleColor, linkColor]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 0 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}