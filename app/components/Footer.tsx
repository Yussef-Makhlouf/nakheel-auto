'use client'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
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
                href="https://facebook.com" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
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
                <p className="text-white">info@nakheelauto.sa</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent-400" />
                <p className="text-white">24/7</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-r-4 border-accent-500 pr-3">النشرة البريدية</h3>
            <p className="text-white/70 text-sm">
              اشترك في نشرتنا البريدية للحصول على آخر الأخبار والعروض الحصرية.
            </p>
            
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="bg-white/10 border-white/20 rounded-lg text-white focus:border-accent-500"
                />
              </div>
              <Button className="bg-accent-500 hover:bg-accent-600 text-white w-full">
                اشترك الآن
              </Button>
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent-400 transition-colors">{t('footer.links.privacy')}</Link>
            <Link href="#" className="hover:text-accent-400 transition-colors">{t('footer.links.terms')}</Link>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute -left-40 top-40 h-80 w-80 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -right-20 bottom-20 h-60 w-60 bg-secondary-500/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  )
} 