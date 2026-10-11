import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Courses from '@/components/Courses';
import Journey from '@/components/Journey';
import Modules from '@/components/Modules';
import Formats from '@/components/Formats';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Courses />
        <Journey />
        <Modules />
        <Formats />
        <Contact />
      </main>
    </>
  );
}
