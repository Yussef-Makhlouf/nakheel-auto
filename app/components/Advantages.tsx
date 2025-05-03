'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin, Shield, FileText } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from '@/hooks/useTranslation'

// Decorative SVG components
interface DecorationProps {
  className?: string;
}

const CircleDecoration: React.FC<DecorationProps> = ({ className }) => (
  <svg className={`absolute w-32 h-32 text-[#0A2F5D]/5 ${className}`} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
)

const WaveDecoration: React.FC<DecorationProps> = ({ className }) => (
  <svg className={`absolute w-full h-20 text-[#0A2F5D]/5 ${className}`} viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" fill="currentColor" />
  </svg>
)

const DotsDecoration: React.FC<DecorationProps> = ({ className }) => (
  <svg className={`absolute w-24 h-24 text-[#EAB308]/20 ${className}`} viewBox="0 0 100 100">
    <circle cx="20" cy="20" r="2" fill="currentColor" />
    <circle cx="50" cy="20" r="2" fill="currentColor" />
    <circle cx="80" cy="20" r="2" fill="currentColor" />
    <circle cx="20" cy="50" r="2" fill="currentColor" />
    <circle cx="50" cy="50" r="2" fill="currentColor" />
    <circle cx="80" cy="50" r="2" fill="currentColor" />
    <circle cx="20" cy="80" r="2" fill="currentColor" />
    <circle cx="50" cy="80" r="2" fill="currentColor" />
    <circle cx="80" cy="80" r="2" fill="currentColor" />
  </svg>
)

export function Advantages() {
  const { t } = useTranslation();
  const advantages = [
    {
      id: "01",
      title: t('advantages.location.title'),
      description: t('advantages.location.description'),
      icon: MapPin,
      image: "/map.png"
    },
    {
      id: "02",
      title: t('advantages.licenses.title'),
      description: t('advantages.licenses.description'),
      icon: FileText,
      image: "/det5.png"
    },
    {
      id: "03",
      title: t('advantages.facilities.title'),
      description: t('advantages.facilities.description'),
      icon: Building,
      image: "/det6.png"
    },
    {
      id: "04",
      title: t('advantages.security.title'),
      description: t('advantages.security.description'),
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
          className="mb-16 text-center text-2xl lg:text-4xl font-bold text-[#0A2F5D]"
        >
          {t('advantages.title')}
        </motion.h2>

        <div className="space-y-8">
          {advantages.map((advantage, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-lg overflow-hidden"
            >
                     <div className="w-full sm:w-1/3">
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className="object-cover rounded-l-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3 rtl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#0A2F5D] font-bold text-xl">
                    {advantage.id}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0A2F5D]">{advantage.title}</h3>
                    <p className="text-gray-700 ">{advantage.description}</p>
                  </div>
                </div>
              </div>
              
       
            </motion.div>
          ))}
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