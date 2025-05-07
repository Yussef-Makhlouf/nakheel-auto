'use client'

import { Shield } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface SecurityAdvantageProps {
  id: string
  title: string
  description: string
  description2: string
  description3: string
  image?: string
}

export function SecurityAdvantage({ id, title, description, description2, description3, image }: SecurityAdvantageProps) {
  // Predefined security images from public directory
  const securityImages = [
    "/det7.png",
    "/sec3.png",
    "/sec4.png",
    "/sec1.png",
    "/sec2.png"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A2F5D] to-[#EAB308]" />
      <div className="p-8 rtl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#0A2F5D]/10 p-3 rounded-full">
              <Shield className="text-[#0A2F5D]" size={24} />
            </div>
            {/* <span className="text-sm font-semibold text-[#EAB308]">{id}</span> */}
          </div>
          <h3 className="text-2xl font-bold text-[#0A2F5D] mb-4">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          
          <p className="text-gray-600 mb-3">{description2}</p>
          
          <p className="text-gray-600">{description3}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
          {securityImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative ${
                index === securityImages.length - 1 
                  ? "col-span-2 sm:col-span-1 h-[200px] sm:h-[200px]" 
                  : "h-[150px] sm:h-[200px]"
              } rounded-lg overflow-hidden`}
            >
              <Image
                src={img}
                alt={`${title} - security image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>

   
      </div>
    </motion.div>
  )
}