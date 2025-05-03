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
        <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center space-y-12 sm:space-y-16 py-20">
          {/* Main Title */}
          <motion.div 
            className="max-w-4xl space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block mb-4">{t('hero.title')}</span>
            </h1>
            
            {/* <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#EAB308] leading-relaxed">
              {t('hero.description')}
            </p> */}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-12 flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link 
              href="https://wa.me/966505740134" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t('contact.form.submit')}
              </Button>
            </Link>
            <div className="flex flex-row gap-4">
              <a href="tel:0505740134" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-[#0A2F5D] text-white hover:bg-white hover:text-[#0A2F5D] rounded-full px-8 sm:px-10 py-6 text-lg sm:text-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  {t('common.contact')}
                </Button>
              </a>
              <Link 
                href="https://maps.app.goo.gl/xjpM9yGxeVPfzzkY8?g_st=iw" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-[#0A2F5D] text-white hover:bg-white hover:text-[#0A2F5D] rounded-full px-8 sm:px-10 py-6 text-lg sm:text-xl transition-all duration-300 transform hover:scale-105"
                >
                  <MapPin className="h-6 w-6 mr-3" />
                  {t('common.location')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2F5D] to-transparent" />
      </div>
    </section>
  )
}