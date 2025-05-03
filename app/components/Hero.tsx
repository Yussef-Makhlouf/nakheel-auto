'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown, MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { useTranslation } from '@/hooks/useTranslation'

export function Hero() {
  const { t } = useTranslation();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section id="hero" className="relative min-h-screen">
      {/* Background Layers */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cover.png"
            alt="صورة الخلفية"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F5D]/80 via-[#0A2F5D]/70 to-[#0A2F5D]/90" />


        {/* Main Content */}
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          {/* Logo Animation */}
    

          {/* Main Title */}
          <motion.div 
            className="max-w-5xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="block mb-2 sm:mb-4">{t('hero.title')}</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#EAB308]">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div 
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div className="rounded-full bg-[#EAB308] p-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm sm:text-base font-semibold text-white">{t('common.location')}</p>
                <p className="text-xs sm:text-sm text-gray-200">{t('contact.info.address')}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div className="rounded-full bg-[#EAB308] p-3">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm sm:text-base font-semibold text-white">{t('common.contact')}</p>
                <p className="text-xs sm:text-sm text-gray-200">0505740134</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div className="rounded-full bg-[#EAB308] p-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <p className="text-sm sm:text-base font-semibold text-white">{t('contact.info.workingHours')}</p>
                <p className="text-xs sm:text-sm text-gray-200">24/7</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-12 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link 
              href="https://wa.me/966505740134" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t('contact.form.submit')}
              </Button>
            </Link>
            <a href="tel:0505740134">
              <Button size="lg" variant="outline" className="bg-[#0A2F5D] text-white hover:bg-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                <Phone className="h-5 w-5 mr-2" />
                {t('common.contact')}
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 text-white opacity-80" />
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2F5D] to-transparent" />
      </div>
    </section>
  )
} 