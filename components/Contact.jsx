'use client';

import { useState } from 'react';
import Image from 'next/image';
import { contact, tel, photos } from '@/lib/data';
import Magnetic from './Magnetic';

function Phone({ number }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number.replace(/\s/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard refused: the number stays selectable */
    }
  };
  return (
    <div className="phone">
      <a href={tel(number)} data-cursor="Call">{number}</a>
      <button className="copy" type="button" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="section wrap contact" id="contact">
      <div className="grid">
        <div className="contact-grid">
          <h2 className="contact-title">Tell us your target. We will plan the route.</h2>
          <div className="contact-side">
            <div>
              <p className="contact-label">Call or message</p>
              {contact.phones.map((p) => <Phone key={p} number={p} />)}
            </div>
            <div>
              <p className="contact-label">Visit</p>
              <p>{contact.city}</p>
              <p style={{ marginTop: 10 }}>
                <Magnetic><a className="btn" href={contact.map} target="_blank" rel="noreferrer">Open in Google Maps</a></Magnetic>
              </p>
            </div>
            <div>
              <p className="contact-label">Follow</p>
              <div className="socials">
                <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={contact.facebook} target="_blank" rel="noreferrer">Facebook</a>
                <a href={contact.tiktok} target="_blank" rel="noreferrer">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wordmark" aria-hidden="true">NEXT<span>GEN</span></div>
      <footer className="foot">
        <span className="foot-brand">
          <Image src="/logo.png" alt="Next Gen Languages logo" width={36} height={36} />
          © {new Date().getFullYear()} Next Gen Languages &amp; IELTS preparation, Constantine
        </span>
        <span>Photos: {Object.values(photos).map((p) => p.by).join(', ')} on Unsplash</span>
      </footer>
    </section>
  );
}
