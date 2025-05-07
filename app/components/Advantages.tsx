'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin, Shield, FileText } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from '@/hooks/useTranslation'
import { LocationAdvantage } from './advantages/LocationAdvantage'
import { LicensesAdvantage } from './advantages/LicensesAdvantage'
import { FacilitiesAdvantage } from './advantages/FacilitiesAdvantage'
import { SecurityAdvantage } from './advantages/SecurityAdvantage'

export function Advantages() {
  const { t, locale } = useTranslation();
  const advantages = [
    {
      id: "01",
      title: t('advantages.location.title'),
      description: t('advantages.location.description'),
      description2: "",
      description3: "",
      icon: MapPin,
      image: "/map.png"
    },
    {
      id: "02",
      title: t('advantages.licenses.title'),
      description: t('advantages.licenses.description'),
      description2: "",
      description3: "",
      icon: FileText,
      image: "/det6.png"
    },
    {
      id: "03",
      title: t('advantages.facilities.title'),
      description: t('advantages.facilities.description'),
      description2: t('advantages.facilities.description2'),
      description3: "",
      icon: Building,
      image: "/det5.png"
    },
    {
      id: "04",
      title: t('advantages.security.title'),
      description: t('advantages.security.description'),
      description2: t('advantages.security.description2'),
      description3: t('advantages.security.description3'),
      icon: Shield,
      image: "/det7.png"
    }
  ]

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-xl lg:text-3xl font-bold text-[#0A2F5D]"
        >
            {locale === 'ar' ? t('advantages.title') : (
              <>
                {t('advantages.title1')}
                <br />
                {t('advantages.title2')}
                <br />
                {t('advantages.title3')}
              </>
            )}
        </motion.h2>

        <div className="space-y-12">
          <LocationAdvantage {...advantages[0]} />
          <LicensesAdvantage {...advantages[1]} locale={locale} />
          <FacilitiesAdvantage {...advantages[2]} />
          <SecurityAdvantage {...advantages[3]} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gray-100 rounded-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8 ">
              <h2 className="text-3xl font-bold text-[#0A2F5D] mb-4">{t('facilities.title')}</h2>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/struc.png"
                  alt="مخطط المجمع"
                  width={1200}
                  height={600}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500 bg-white"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}