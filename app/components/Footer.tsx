'use client'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock, ArrowRight, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTranslation } from '@/hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0a2f5d] text-white overflow-hidden">
      {/* Top wave decoration */}
      {/* <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 w-full h-full transform rotate-180"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white opacity-5"
          ></path>
        </svg>
      </div> */}

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="شعار مجمع النخيل"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">
                  {t('header.title')}
                </span>
                <span className="text-sm text-accent-400">
                  Al Nakheel Auto Complex
                </span>
              </div>
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex items-center gap-3">
              <Link 
                href="https://www.linkedin.com/in/%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84-%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-b0b95b362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://x.com/nakheelautopark" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
     
            </div>
            
            {/* Company Partners */}
            <div className="mt-6">
              {/* <h4 className="text-sm text-white/80 mb-3">{t('common.partners')}</h4> */}
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3 h-16 w-36">
                  <div className="relative h-full w-full">
                    <Image
                      src="/qumra.png"
                      alt="Qumra Company"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 h-16 w-36">
                  <div className="relative h-full w-full">
                    <Image
                      src="/mzon.png"
                      alt="Mzon Company"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-r-4 border-accent-500 pr-3">{t('common.menu')}</h3>
            <nav className="grid grid-cols-1 gap-3">
              {[t('common.home'), t('common.about'), t('common.advantages'), t('common.facilities'), t('common.location'), t('common.contact')].map((item, i) => (
                <Link
                  key={i}
                  href={`#${['hero', 'about', 'advantages', 'facilities', 'location', 'contact'][i]}`}
                  className="flex items-center gap-2 text-white/70 hover:text-accent-400 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                  <span>{item}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-r-4 border-accent-500 pr-3">{t('common.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-white">{t('contact.info.addressValue')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-400" />
                <p className="text-white">0505740134</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-400" />
                <p className="text-white">alqumrah@alqumrah.com</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-400" />
                <p className="text-white">24/7</p>
              </div>
            </div>
          </div>

          {/* License QR Code */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-r-4 border-accent-500 pr-3">{t('common.license')}</h3>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#EAB308]/20 to-[#0A2F5D]/20 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/10 p-4 rounded-xl border border-white/20 hover:border-accent-500 transition-colors duration-300">
                <div className="aspect-square w-full relative overflow-hidden rounded-lg">
                  <Image
                    src="/license.png"
                    alt="رخصة مجمع النخيل"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-white/70 text-sm text-center mt-4">
                  {t('common.scan_qr')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <span className="hover:text-accent-400 transition-colors">{t('footer.links.privacy')}</span>
            <span className="hover:text-accent-400 transition-colors">{t('footer.links.terms')}</span>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -left-40 top-40 h-80 w-80 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -right-20 bottom-20 h-60 w-60 bg-secondary-500/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  )
}