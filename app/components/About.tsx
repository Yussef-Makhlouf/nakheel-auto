'use client'
import { motion } from "framer-motion"
import { Building2, Info, Phone, Link } from "lucide-react"
import Image from "next/image"
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from "@/components/ui/button"

export function About() {
  const { t } = useTranslation();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-[#0A2F5D] mb-4">
            {t('about.title')}
          </h2> */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src={`/about/square${index}.png`}
                  alt={`About Image ${index}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col h-full justify-between">
            {/* Company Info */}
            <div className="bg-gray-50 rounded-lg p-6 flex-grow">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Info className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('about.companyInfo.title')}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.companyInfo.description')}
              </p>
            </div>

            {/* Company Images */}
            <div className="grid grid-cols-2 gap-4 my-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden border border-gray-100 p-4 flex items-center justify-center bg-white h-24"
              >
                <Image
                  src="/qumra.png"
                  alt="Qumra Company"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden border border-gray-100 p-4 flex items-center justify-center bg-white h-24"
              >
                <Image
                  src="/mzon.png"
                  alt="Mzon Company"
                  width={180}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </div>

            {/* Contact Button */}
            <a 
              href="tel:0505740134" 
              className="w-full py-3 px-6 rounded-lg bg-[#0A2F5D] text-white flex items-center justify-center gap-2 hover:bg-[#0A2F5D]/90 transition-colors"
            >
              <span className="font-semibold">{t('about.contact.button')}</span>
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}