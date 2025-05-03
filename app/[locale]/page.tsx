import { getServerTranslation } from '@/lib/server-translation';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Advantages } from '../components/Advantages';
import { Facilities } from '../components/Facilities';
import { Partners } from '../components/Partners';

import { Footer } from '../components/Footer';
import { locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Gallery from '../components/gallery';
import FAQ from '@/components/FAQ';
import { getDirection } from '@/lib/i18n';
import { Contact } from '@/app/components/Contact';



export default function Home({ params: { locale } }: { params: { locale: string } }) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const { t } = getServerTranslation(locale as any);
  const direction = getDirection(locale as any);

  return (
    <div className={`flex min-h-screen flex-col bg-white ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
      <main className="flex-1">
        <Header />

 <Hero />

        <About />
        <Advantages />
        <Facilities />
        {/* <Gallery /> */}
        
        <Partners />
        <Contact />
        {/* <FAQ /> */}
      </main>
      <Footer />
    </div>
  );
} 