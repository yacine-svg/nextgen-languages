'use client';

import { useState } from 'react';
import { useLenis } from 'lenis/react';
import Magnetic from './Magnetic';

const links = [
  ['#courses', 'Courses'],
  ['#journey', 'How it works'],
  ['#ielts', 'The IELTS test'],
  ['#club', 'Speaking club'],
  ['#contact', 'Contact'],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const lenis = useLenis(({ scroll }) => setSolid(scroll > window.innerHeight * 0.7));

  const go = (e, href) => {
    e.preventDefault();
    lenis?.scrollTo(href, { offset: -70, duration: 1.4 });
  };

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <a className="brand" href="#top" onClick={(e) => go(e, '#top')}>
        <span className="brand-mark" aria-hidden="true" />
        Next Gen Languages
      </a>
      <nav aria-label="Main">
        <ul className="nav-links">
          {links.map(([href, label]) => (
            <li key={href}><a href={href} onClick={(e) => go(e, href)}>{label}</a></li>
          ))}
        </ul>
      </nav>
      <Magnetic>
        <a className="btn" href="#contact" onClick={(e) => go(e, '#contact')}>Book a placement test</a>
      </Magnetic>
    </header>
  );
}
