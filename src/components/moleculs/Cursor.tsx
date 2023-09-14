// components/Cursor.tsx

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      const followCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: 'power2.easeOut',
        });
      };

      window.addEventListener('mousemove', followCursor);
    }

    // return () => {
    //   window.removeEventListener('mousemove', followCursor);
    // };
  }, []);

  return <div ref={cursorRef} className="w-6 h-6 bg-red-500 rounded-full pointer-events-none"></div>;
};

export default Cursor;
