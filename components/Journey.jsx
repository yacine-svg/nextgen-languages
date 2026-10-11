'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { journey } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

// Pinned section: vertical scroll moves the five steps sideways (desktop)
export default function Journey() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const track = scope.current.querySelector('.journey-track');
        const distance = () => track.scrollWidth - track.clientWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: scope.current.querySelector('.journey-pin'),
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 0.6,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope }
  );

  return (
    <section className="journey" id="journey" ref={scope}>
      <div className="journey-pin wrap">
        <div className="grid">
          <div className="sec-head">
            <h2 className="sec-title">Five steps, one guide</h2>
            <p className="sec-intro">From the first call to your Test Report Form, one team follows your file.</p>
          </div>
        </div>
        <ol className="journey-track" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {journey.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
