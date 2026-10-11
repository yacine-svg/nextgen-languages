'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';
import BandPicker from './BandPicker';
import Magnetic from './Magnetic';

// WebGL only runs in the browser; the CSS gradient behind it shows until it loads
const HeroGradient = dynamic(() => import('./HeroGradient'), { ssr: false });

const lines = ['From registration', 'to results.'];

export default function Hero() {
  const scope = useRef(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.from('.hero-title .line > span', { yPercent: 110, duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.15 });
      gsap.from('.hero-foot > *', { y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.6 });
    },
    { scope }
  );

  const go = (e, href) => {
    e.preventDefault();
    lenis?.scrollTo(href, { offset: -70, duration: 1.4 });
  };

  return (
    <section className="hero wrap" id="top" ref={scope}>
      <div className="hero-bg" aria-hidden="true">
        <HeroGradient />
      </div>
      <div className="grid">
        <h1 className="hero-title">
          {lines.map((l) => (
            <span className="line" key={l}><span>{l}</span></span>
          ))}
        </h1>
        <div className="hero-foot">
          <div className="hero-lede">
            <p>IELTS, TOEFL and DHA preparation, plus Medical, Business and General English. We guide you every step, in Constantine or live online.</p>
            <small>Official IELTS center. Flexible schedules for students and working professionals.</small>
            <div className="hero-cta">
              <Magnetic><a className="btn btn-saffron" href="#contact" onClick={(e) => go(e, '#contact')}>Book a placement test</a></Magnetic>
              <a className="btn btn-ghost" href="#courses" onClick={(e) => go(e, '#courses')}>See the courses</a>
            </div>
          </div>
          <BandPicker />
        </div>
      </div>
    </section>
  );
}
