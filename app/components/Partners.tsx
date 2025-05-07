'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface Partner {
  name: string;
  logo: string;
}

interface PartnersProps {
  locale?: string;
}

export function Partners({ locale = 'en' }: PartnersProps) {
  const [animationSpeed, setAnimationSpeed] = useState(20);
  const [duplicates, setDuplicates] = useState(4);
  
  const translations = {
    en: {
      title: 'Success Partners',
      partners: {
        zamil: 'Zamil Steel',
        promedia: 'Promedia',
        systems: 'Construction Systems',
        alnakheel: 'Al Nakheel Auto Maintenance Complex'
      }
    },
    ar: {
      title: 'شركاء النجاح',
      partners: {
        zamil: 'زامل ستيل',
        promedia: 'بروميديا',
        systems: 'نظم الإنشاء',
        alnakheel: 'مجمع النخيل الشامل لصيانة السيارات'
      }
    }
  };

  const t = translations[locale as keyof typeof translations];
  
  const partners: Partner[] = [
    { name: t.partners.zamil, logo: '/zamel1.png' },
    { name: t.partners.promedia, logo: '/nozom.png' },
    { name: t.partners.systems, logo: '/mzon1.png' },
    { name: t.partners.alnakheel, logo: '/qumra.png' },
    { name: t.partners.zamil, logo: '/instr.png' },
    { name: t.partners.promedia, logo: '/nozom.png' },
    { name: t.partners.systems, logo: '/mzon1.png' },
    { name: t.partners.alnakheel, logo: '/qumra.png' },
    { name: t.partners.alnakheel, logo: '/bromed.png' }
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateSettings = () => {
      if (!containerRef.current) return;
      
      const containerWidth = window.innerWidth;
      const logosWidth = containerRef.current.scrollWidth / partners.length;
      
      // Calculate how many duplicates needed to ensure smooth infinite scrolling
      const requiredDuplicates = Math.ceil((containerWidth * 4) / (logosWidth * partners.length));
      setDuplicates(Math.max(4, requiredDuplicates));
      
      // Adjust animation speed based on screen width
      const baseSpeed = 30; // Slower base speed for smoother movement
      const speedFactor = Math.min(1.2, Math.max(0.8, containerWidth / 1200));
      setAnimationSpeed(baseSpeed * speedFactor);
    };
    
    // Initial calculation with slight delay to ensure DOM is ready
    const timer = setTimeout(calculateSettings, 100);
    
    // Recalculate on resize
    window.addEventListener('resize', calculateSettings);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateSettings);
    };
  }, [partners.length]);

  const renderPartnerLogo = (partner: Partner, index: number, copyIndex: number) => (
    <div 
      key={`partner-${copyIndex}-${index}`} 
      className="partner-item"
      title={partner.name}
      role="img"
      aria-label={partner.name}
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        width={150}
        height={80}
        className="partner-logo"
        priority={copyIndex === 0 && index < 5}
        loading={copyIndex === 0 && index < 5 ? "eager" : "lazy"}
      />
    </div>
  );

  return (
    <section className="py-16 bg-white overflow-hidden" aria-label={t.title}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-10 flex flex-col items-center justify-center">
              <div className="w-1 h-5 bg-[#0A2F5D]"></div>
              <div className="w-1 h-5 bg-[#0A2F5D]"></div>
            </div>
            <h2 className="text-3xl font-bold text-[#0A2F5D]">{t.title}</h2>
          </div>
        </div>

        <div className="partners-carousel-container">
          <div 
            className="partners-carousel"
            style={{ '--speed': `${animationSpeed}s` } as React.CSSProperties}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div ref={containerRef} className="carousel-track">
              {Array.from({ length: duplicates }).map((_, copyIndex) => (
                <div key={`copy-${copyIndex}`} className="partners-group">
                  {partners.map((partner, partnerIndex) => 
                    renderPartnerLogo(partner, partnerIndex, copyIndex)
                  )}
                </div>
              ))}
            </div>
            <div className="carousel-track" aria-hidden="true">
              {Array.from({ length: duplicates }).map((_, copyIndex) => (
                <div key={`copy-shadow-${copyIndex}`} className="partners-group">
                  {partners.map((partner, partnerIndex) => 
                    renderPartnerLogo(partner, partnerIndex, copyIndex + duplicates)
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .partners-carousel-container {
            width: 100%;
            overflow: hidden;
            position: relative;
            margin: 0 auto;
          }

          .partners-carousel {
            display: flex;
            width: 100%;
            animation: scrollPartners var(--speed, 30s) linear infinite;
            will-change: transform;
          }

          .partners-carousel.paused {
            animation-play-state: running;
          }

          .carousel-track {
            display: flex;
            flex-shrink: 0;
            gap: 40px;
          }

          .partners-group {
            display: flex;
            gap: 40px;
          }

          .partner-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            filter: grayscale(30%);
            opacity: 0.85;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(4px);
            min-width: 180px;
            height: 120px;
          }

          .partner-item:hover {
            filter: grayscale(0%);
            transform: scale(1.1);
            opacity: 1;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            background-color: rgba(255, 255, 255, 0.9);
            z-index: 10;
          }

          .partner-logo {
            display: block;
            object-fit: contain;
            transition: transform 0.3s ease;
            max-width: 100%;
            height: auto;
            width: 150px;
            height: 80px;
          }

          @keyframes scrollPartners {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          [dir="rtl"] .partners-carousel {
            animation-direction: reverse;
          }

          @media (prefers-reduced-motion: reduce) {
            .partners-carousel {
              animation: scrollPartners var(--speed, 30s) linear infinite;
            }
          }

          @media (max-width: 768px) {
            .partner-item {
              padding: 16px;
              min-width: 160px;
              height: 100px;
            }
            
            .partner-logo {
              width: 130px;
              height: 70px;
            }
            
            .partners-group {
              gap: 30px;
            }

            .carousel-track {
              gap: 30px;
            }
          }
        `}</style>
      </div>
    </section>
  )
} 