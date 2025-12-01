'use client';

import { useState, useEffect } from 'react';

export default function Cursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const velocity = {
        x: e.clientX - prevPos.x,
        y: e.clientY - prevPos.y
      };
      setMouseVelocity(velocity);
      setCursorPos({ x: e.clientX, y: e.clientY });
      setPrevPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.classList.contains('cursor-pointer') ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [prevPos]);

}