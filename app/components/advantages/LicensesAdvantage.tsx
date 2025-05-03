'use client'

import { FileText } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { t } from "@/lib/i18n"

interface LicensesAdvantageProps {
  id: string
  title: string
  description: string
  image: string
  locale: string
}

export function LicensesAdvantage({ id, title, description, image, locale }: LicensesAdvantageProps) {
  const services = [
    { title: t("advantages.licenses.services.mechanics", locale as any), image: "/circ1.png" },
    { title: t("advantages.licenses.services.electrical", locale as any), image: "/circ4.png" },
    { title: t("advantages.licenses.services.tires", locale as any), image: "/circ2.png" },
    { title: t("advantages.licenses.services.bodywork", locale as any), image: "/circ3.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-50 to-white rounded-lg overflow-hidden p-8"
    >
      <div className="flex flex-col items-center rtl mb-8">
        <span className="inline-block bg-[#0A2F5D] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
          {id}
        </span>
        <h3 className="text-2xl font-bold text-[#0A2F5D] mb-3 text-center">{title}</h3>
        <p className="text-gray-600 text-center max-w-2xl">{description}</p>
        <div className="flex items-center gap-3 text-[#0A2F5D] mt-4">
          <FileText size={24} />
          <span className="font-semibold">{t("common.license", locale as any)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 120px, 150px"
              />
            </div>
            <h4 className="text-[#0A2F5D] font-semibold text-center">{service.title}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}