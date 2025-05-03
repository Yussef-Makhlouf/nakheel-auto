'use client'

import React from "react"
import {  MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface LocationAdvantageProps {
  id: string
  title: string
  description: string
  image: string
}

export function LocationAdvantage({ id, title, description, image }: LocationAdvantageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex flex-col md:flex-row-reverse items-stretch">
        <div className="w-full md:w-1/2">
          <div className="relative h-[300px]">
        <Link href="https://maps.app.goo.gl/jAYqM9fYConySW9h8" target="_blank">
        <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center rtl">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#0A2F5D] text-white rounded-full p-3">
              <MapPin size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2F5D]">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          
        </div>
      </div>
    </motion.div>
  )
}