import { Archivo, Instrument_Sans } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';

const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display', display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  title: 'Next Gen Languages | IELTS preparation in Constantine',
  description:
    'Language school and IELTS center in Constantine, Algeria. IELTS, TOEFL and DHA preparation, Medical, Business and General English, on-site or live online.',
  openGraph: {
    title: 'Next Gen Languages & IELTS preparation',
    description: 'From registration to results, we guide you every step. Constantine and online.',
    type: 'website',
  },
};

export const viewport = { themeColor: '#2b3cff' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
