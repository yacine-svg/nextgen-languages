'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { photos } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

const shots = [
  { key: 'lecture', cls: 'shot-a', speed: -8, label: 'Listen' },
  { key: 'writing', cls: 'shot-b', speed: 10, label: 'Write' },
  { key: 'talking', cls: 'shot-c', speed: -4, label: 'Speak' },
];

// Three photos that drift at different speeds while you scroll
export default function PhotoStrip() {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      gsap.utils.toArray('.shot').forEach((el) => {
        const speed = Number(el.dataset.speed);
        gsap.fromTo(el, { yPercent: -speed }, {
          yPercent: speed, ease: 'none',
          scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
        gsap.fromTo(el.querySelector('img'), { scale: 1.18 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
    },
    { scope }
  );

  return (
    <section className="photos wrap" ref={scope} aria-label="Photos from class">
      <div className="photos-grid">
        {shots.map(({ key, cls, speed, label }) => (
          <figure className={`shot ${cls}`} data-speed={speed} key={key}>
            <Image src={photos[key].src} alt={photos[key].alt} fill sizes="(max-width: 860px) 100vw, 40vw" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
        <p className="photos-note">Our courses work on all four skills: listening, reading, writing and speaking, the same four the IELTS test measures.</p>
      </div>
    </section>
  );
}
