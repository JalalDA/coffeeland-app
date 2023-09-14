// components/ScrollAnimation.tsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    console.log({container});

    if (container) {
      gsap.from(container, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default ScrollAnimation;
