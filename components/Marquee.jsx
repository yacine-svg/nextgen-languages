'use client';

import { Fragment, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { marquee } from '@/lib/data';

// Endless marquee whose speed and direction follow the Lenis scroll velocity
export default function Marquee() {
  const track = useRef(null);
  const state = useRef({ x: 0, boost: 0, dir: 1 });

  useLenis(({ velocity }) => {
    state.current.boost = Math.min(Math.abs(velocity) * 0.6, 18);
    if (Math.abs(velocity) > 0.2) state.current.dir = velocity > 0 ? 1 : -1;
  });

  useEffect(() => {
    const el = track.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tick = () => {
      const s = state.current;
      const half = el.scrollWidth / 2;
      s.x -= (0.6 + s.boost) * s.dir;
      s.boost *= 0.92;
      if (s.x <= -half) s.x += half;
      if (s.x > 0) s.x -= half;
      el.style.transform = `translate3d(${s.x}px,0,0)`;
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  const group = (hidden) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {marquee.map((m, i) => (
        <Fragment key={m}>
          <span className={`marquee-item${i % 3 === 0 ? ' is-accent' : ''}`}>{m}</span>
          <span className="marquee-dot" />
        </Fragment>
      ))}
    </div>
  );

  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track" ref={track}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
