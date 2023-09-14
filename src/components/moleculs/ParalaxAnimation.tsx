// components/ParallaxAnimation.tsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ParallaxAnimationProps {
  children: React.ReactNode;
}

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
        },
      });

      tl.from(container, { y: 100, opacity: 0 })
        .to(container, { y: -100, opacity: 1 });

      // Tambahkan animasi atau perubahan lain sesuai kebutuhan Anda
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ParallaxAnimation;
