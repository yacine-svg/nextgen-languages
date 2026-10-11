'use client';

import { useState } from 'react';
import Image from 'next/image';
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
        <Image className="brand-logo" src="/logo.png" alt="" width={44} height={44} priority />
        <span>Next Gen Languages</span>
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
