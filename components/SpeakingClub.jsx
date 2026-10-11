'use client';

import { useState } from 'react';
import { club } from '@/lib/data';
import Magnetic from './Magnetic';

const ready = Object.values(club.entries).every(Boolean);

function Choice({ name, options, required }) {
  return (
    <div className="chips" role="radiogroup">
      {options.map((o, i) => (
        <label className="chip" key={o}>
          <input type="radio" name={name} value={o} required={required && i === 0} />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}

function SignupForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    body.append('emailAddress', f.get('email'));
    for (const [key, entry] of Object.entries(club.entries)) {
      const v = f.get(key);
      if (v) body.append(entry, v);
    }
    setStatus('sending');
    try {
      // Google Forms accepts the post but blocks reading the reply, so a network error is the only failure we can see
      await fetch(club.formAction, { method: 'POST', mode: 'no-cors', body });
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="club-form club-done" role="status">
        <h3>You are on the list</h3>
        <p>Your sign-up has been sent to the NextGen team. They will contact you with the date of the next session.</p>
        <button type="button" className="btn" onClick={() => setStatus('idle')}>Sign up someone else</button>
      </div>
    );
  }

  return (
    <form className="club-form" onSubmit={submit}>
      <div className="field-row">
        <label className="field"><span>First name</span><input id="club-first" name="firstName" required autoComplete="given-name" /></label>
        <label className="field"><span>Last name</span><input id="club-last" name="lastName" required autoComplete="family-name" /></label>
      </div>
      <div className="field-row">
        <label className="field"><span>Email</span><input id="club-email" name="email" type="email" required autoComplete="email" /></label>
        <label className="field"><span>Phone number</span><input id="club-phone" name="phone" type="tel" required autoComplete="tel" placeholder="0791 23 45 67" /></label>
      </div>
      <label className="field"><span>Address <em>optional</em></span><input id="club-address" name="address" autoComplete="street-address" /></label>
      <fieldset className="field">
        <legend>Your level of English</legend>
        <Choice name="level" options={club.levels} required />
      </fieldset>
      <fieldset className="field">
        <legend>Profession <em>optional</em></legend>
        <Choice name="profession" options={club.professions} />
      </fieldset>
      <button className="btn btn-saffron club-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Save my seat'}
      </button>
      {status === 'error' && <p className="club-error" role="alert">Your sign-up did not go through. Check your connection and try again, or <a href={club.formUrl} target="_blank" rel="noreferrer">use the Google Form</a>.</p>}
    </form>
  );
}

export default function SpeakingClub() {
  return (
    <section className="club wrap" id="club">
      <div className="club-grid">
        <div className="club-info">
          <p className="club-kicker">NextGen speaking club</p>
          <h2 className="club-title">Spill<br />the tea</h2>
          <p className="club-lede">A friendly space to practise English out loud, gain confidence and meet new people. Conversations, interactive activities and games, for beginners and fluent speakers alike.</p>
          <dl className="club-facts">
            <div><dt>Per session</dt><dd>{club.fee}</dd></div>
            <div><dt>Levels</dt><dd>All welcome</dd></div>
          </dl>
          <Magnetic><a className="btn btn-ghost" href={club.map} target="_blank" rel="noreferrer">Find the club on Maps</a></Magnetic>
        </div>
        {ready ? (
          <SignupForm />
        ) : (
          <div className="club-form club-done">
            <h3>Save your seat for the next session</h3>
            <p>Sign-up takes a minute: your name, email, phone and English level.</p>
            <a className="btn btn-saffron" href={club.formUrl} target="_blank" rel="noreferrer">Open the sign-up form</a>
          </div>
        )}
      </div>
    </section>
  );
}
