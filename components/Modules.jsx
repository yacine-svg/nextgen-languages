import { modules } from '@/lib/data';

const total = modules.reduce((n, m) => n + m.minutes, 0);

// The four IELTS modules, with a bar drawn to scale by duration
export default function Modules() {
  return (
    <section className="section wrap" id="ielts">
      <div className="grid">
        <div className="sec-head">
          <h2 className="sec-title">Know the test before test day</h2>
          <p className="sec-intro">IELTS has four parts and takes about 2 hours 45 minutes. We train each one with timed practice and examiner-style feedback.</p>
        </div>
        <div className="timeline" role="img" aria-label="Relative length of the four IELTS modules">
          {modules.map((m) => <span key={m.name} style={{ '--m': m.minutes }} />)}
        </div>
        <div className="timeline-cap"><span>0 min</span><span>about {total} min of testing</span></div>
        <div className="modules">
          {modules.map((m) => (
            <article className="module" key={m.name}>
              <div className="module-min">{m.minutes}<small>min</small></div>
              <h3>{m.name}</h3>
              <p><strong>{m.detail}.</strong> {m.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
