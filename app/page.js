import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import PhotoStrip from '@/components/PhotoStrip';
import Courses from '@/components/Courses';
import Journey from '@/components/Journey';
import Modules from '@/components/Modules';
import Formats from '@/components/Formats';
import SpeakingClub from '@/components/SpeakingClub';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <PhotoStrip />
        <Courses />
        <Journey />
        <Modules />
        <Formats />
        <SpeakingClub />
        <Contact />
      </main>
    </>
  );
}
