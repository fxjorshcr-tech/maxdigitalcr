"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      // Lower FPS on mobile for better battery life
      fpsLimit: isMobile ? 30 : 60,
      interactivity: {
        events: {
          // Disable hover effects on mobile for better performance
          onHover: {
            enable: !isMobile,
            mode: "grab",
          },
          onClick: {
            enable: !isMobile,
            mode: "push",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: "#3ECF8E",
        },
        links: {
          color: "#3ECF8E",
          distance: isMobile ? 120 : 150,
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
          // Slower movement on mobile
          speed: isMobile ? 0.5 : 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          // Fewer particles on mobile for better performance
          value: isMobile ? 30 : 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: isMobile ? 2 : 3 },
        },
      },
      detectRetina: true,
      // Reduce canvas updates on mobile
      smooth: !isMobile,
    }),
    [isMobile]
  );

  // Don't render particles on very small screens or if not initialized
  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={options}
      aria-hidden="true"
    />
  );
}
