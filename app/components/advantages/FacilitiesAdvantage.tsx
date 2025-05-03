'use client'

import { Building } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FacilitiesAdvantageProps {
  id: string
  title: string
  description: string
  image: string
}

export function FacilitiesAdvantage({ id, title, description, image }: FacilitiesAdvantageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden border border-gray-100"
    >
      <div className="flex flex-col md:flex-row items-start rtl gap-8 p-8">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <div className="flex flex-col items-start gap-4 w-full">
            <Building className="text-[#0A2F5D]" size={36} />
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2F5D] w-full">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed w-full">
            {description}
          </p>
     
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4 h-auto md:h-[280px]">
          <div className="relative w-full md:w-1/2 h-[200px] md:h-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <Image
              src="/det6.png"
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="relative w-full md:w-1/2 h-[200px] md:h-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}