'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { bands } from '@/lib/data';

// Interactive IELTS band scale: pick a target band and read what it means
export default function BandPicker() {
  const [active, setActive] = useState(7);
  const numRef = useRef(null);
  const b = bands[active - 1];

  const pick = (n) => {
    if (n === active) return;
    setActive(n);
    if (numRef.current) gsap.fromTo(numRef.current, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
  };

  return (
    <div className="band" role="group" aria-labelledby="band-label">
      <div className="band-head">
        <span id="band-label">What band are you aiming for?</span>
        <span>IELTS scale 1–9</span>
      </div>
      <div className="band-scale">
        {bands.map(({ band, name }) => (
          <button
            key={band}
            type="button"
            aria-pressed={band === active}
            aria-label={`Band ${band}, ${name}`}
            onClick={() => pick(band)}
            onMouseEnter={() => pick(band)}
            style={{ '--h': `${(band / 9) * 100}%` }}
          >
            <span>{band}</span>
          </button>
        ))}
      </div>
      <div className="band-read" aria-live="polite">
        <div className="band-num" ref={numRef}>{active}</div>
        <div className="band-name">{b.name}</div>
        <p className="band-text">{b.text}</p>
      </div>
    </div>
  );
}
