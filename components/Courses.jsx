'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { courses, photos, coursePhoto } from '@/lib/data';

// Course list with a floating card that follows the pointer (desktop only)
export default function Courses() {
  const card = useRef(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const el = card.current;
    if (!el || !window.matchMedia('(hover: hover)').matches) return;
    const x = gsap.quickTo(el, 'x', { duration: 0.55, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.55, ease: 'power3' });
    const r = gsap.quickTo(el, 'rotation', { duration: 0.8, ease: 'power3' });
    let last = 0;
    const move = (e) => {
      x(e.clientX + 140);
      y(e.clientY);
      r(gsap.utils.clamp(-14, 14, (e.clientX - last) * 0.6));
      last = e.clientX;
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useEffect(() => {
    if (!card.current) return;
    gsap.to(card.current, { scale: hover === null ? 0.6 : 1, duration: 0.5, ease: 'power3.out' });
  }, [hover]);

  const c = hover !== null ? courses[hover] : courses[0];

  return (
    <section className="section wrap courses-wrap" id="courses">
      <div className="grid">
        <div className="sec-head">
          <h2 className="sec-title">Nine ways to learn with us</h2>
          <p className="sec-intro">Exam preparation, English for your profession, everyday English and other languages. Every course starts with a placement test.</p>
        </div>
        <ul className="courses-list" onMouseLeave={() => setHover(null)}>
          {courses.map((course, i) => (
            <li key={course.name} className="course" onMouseEnter={() => setHover(i)} data-cursor="Ask us">
              <span className="course-track">{course.track}</span>
              <h3 className="course-name">{course.name}</h3>
              <p className="course-text">{course.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div ref={card} className={`preview${hover !== null ? ' is-on' : ''}`} aria-hidden="true">
        {Object.entries(photos).map(([key, p]) => (
          <Image key={key} src={p.src} alt="" fill sizes="260px" className={coursePhoto[c.tag] === key ? 'is-shown' : ''} />
        ))}
        <div className={`preview-tag tone-${c.tone}`}>
          <small>{c.track}</small>
          <b>{c.tag}</b>
        </div>
      </div>
    </section>
  );
}
