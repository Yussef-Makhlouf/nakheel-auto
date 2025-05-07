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
    <section id="hero" className="relative min-h-screen ">
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
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col items-center justify-center"/>
        {/* Main Content */}
        <div className="container relative z-10 mx-auto h-full flex flex-col justify-between px-4 py-12 md:py-12">
      

          {/* Main Title - Centered */}
          <motion.div 
            className="flex flex-col items-center justify-center flex-grow text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/logo2.png"
                alt="Logo"
                width={450}
                height={120}
                className="object-contain mt-5"
                priority
              />
            </motion.div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-4xl font-bold text-white text-center  [text-shadow:_2px_2px_0px_#000000]">
                {t('hero.title')}
              </h2>
              <h4 className="text-4xl sm:text-xl md:text-4xl font-bold text-white [text-shadow:_2px_2px_0px_#000000] text-center">
                {t('hero.title2')}
              </h4>
              <h1 className="text-5xl sm:text-3xl md:text-5xl font-bold text-lime-400 text-center [text-shadow:_2px_2px_0px_#000000]">
                {t('hero.subtitle')}
              </h1>
            </div>
          </motion.div>

          {/* CTA Buttons - Bottom */}
          <motion.div 
            className="flex-grow-0 mt-auto pt-8 sm:pt-12 md:pt-16 row-start-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              <Link 
                href="https://wa.me/966505740134" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-4 sm:py-5 text-base sm:text-lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {t('contact.form.submit')}
                </Button>
              </Link>
              <div className="flex flex-row gap-4">
                <a href="tel:0505740134" className="w-full">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full bg-[#0A2F5D] text-white hover:bg-white hover:text-[#0A2F5D] rounded-full px-6 py-4 sm:py-5 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {t('common.contact')}
                  </Button>
                </a>
                <Link 
                  href="https://maps.app.goo.gl/xjpM9yGxeVPfzzkY8?g_st=iw" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full bg-[#0A2F5D] text-white hover:bg-white hover:text-[#0A2F5D] rounded-full px-6 py-4 sm:py-5 text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <MapPin className="h-5 w-5 mr-2" />
                    {t('common.location')}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2F5D] to-transparent" />
      </div>
    </section>
  )
}