'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Saffron dot that follows the pointer and grows into a label over any [data-cursor] element
export default function Cursor() {
  const ref = useRef(null);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const x = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });
    const move = (e) => {
      x(e.clientX);
      y(e.clientY);
      const target = e.target.closest?.('[data-cursor]');
      setLabel(target ? target.getAttribute('data-cursor') : '');
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <div ref={ref} className={`cursor${label ? ' is-label' : ''}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
