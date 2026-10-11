'use client';

import { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Keeps GSAP ScrollTrigger in sync with Lenis' virtual scroll position
function ScrollTriggerSync() {
  useLenis(ScrollTrigger.update);
  return null;
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Drive Lenis from GSAP's ticker so both share one animation frame
    const update = (time) => lenisRef.current?.lenis?.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ autoRaf: false, lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
