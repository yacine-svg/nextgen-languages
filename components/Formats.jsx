import Image from 'next/image';
import { photos } from '@/lib/data';

export default function Formats() {
  return (
    <section className="section wrap" id="formats" style={{ paddingTop: 0 }}>
      <div className="grid">
        <div className="formats">
          <article className="format format-onsite">
            <div className="format-photo"><Image src={photos.chalkboard.src} alt={photos.chalkboard.alt} fill sizes="(max-width: 860px) 100vw, 55vw" /></div>
            <h3>In class, in Constantine</h3>
            <div>
              <p>Classes at our center, with mock tests in real exam conditions.</p>
              <ul><li>Placement test</li><li>Mock exams</li><li>Speaking practice</li></ul>
            </div>
          </article>
          <article className="format format-online">
            <div className="format-photo"><Image src={photos.online.src} alt={photos.online.alt} fill sizes="(max-width: 860px) 100vw, 40vw" /></div>
            <h3>Live online</h3>
            <div>
              <p>The same teachers and programme from anywhere in Algeria, on a schedule that fits your work or studies.</p>
              <ul><li>Live classes</li><li>Flexible times</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
