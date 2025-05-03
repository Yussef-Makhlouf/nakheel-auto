'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { useTranslation } from '@/hooks/useTranslation'

export function Facilities() {
  const { t, locale } = useTranslation();
  const [activeTab, setActiveTab] = useState("spaces")
  const isRTL = locale === 'ar';

  const tabs = [
    { id: "spaces", label: t('facilities.sections.spaces.title') },
    { id: "infrastructure", label: t('facilities.sections.infrastructure.title') },
    { id: "security", label: t('facilities.sections.security.title') }
  ]

  return (
    <section id="facilities" className="relative py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#0A2F5D]/5 to-transparent"></div>
      
      <div className="container relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-2.5 bg-[#0A2F5D]/5 rounded-full text-[#0A2F5D] font-medium mb-6 text-lg">
            {t('facilities.title')}
          </span>
          <h2 className="text-5xl font-bold text-[#0A2F5D] mb-6">{t('facilities.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#EAB308] to-[#0A2F5D] mx-auto rounded-full"></div>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-20">
          <div className="inline-flex p-1 sm:p-1.5 bg-white rounded-full shadow-lg border border-[#0A2F5D]/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-8 py-2 sm:py-3.5 rounded-full text-sm sm:text-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0A2F5D] text-white shadow-md"
                    : "text-[#0A2F5D] hover:bg-[#0A2F5D]/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          {/* Spaces Section */}
          {activeTab === "spaces" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
            >
              <div className={`relative group ${isRTL ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#EAB308]/20 to-[#0A2F5D]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/det5.png"
                    alt={t('facilities.sections.spaces.title')}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`space-y-8 ${isRTL ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                <div className="inline-block px-6 py-2.5 bg-[#0A2F5D]/5 rounded-full text-[#0A2F5D] font-medium text-lg">
                  {t('facilities.sections.spaces.title')}
                </div>
                <h3 className="text-4xl font-bold text-[#0A2F5D]">
                  {t('facilities.sections.spaces.heading')}
                  <span className="block text-xl font-medium text-[#0A2F5D]/70 mt-3">
                    {t('facilities.sections.spaces.subheading')}
                  </span>
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.spaces.features.office.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.spaces.features.office.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.spaces.features.operational.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.spaces.features.operational.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.spaces.features.parking.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.spaces.features.parking.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Infrastructure Section */}
          {activeTab === "infrastructure" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
            >
              <div className={`space-y-8 ${isRTL ? 'order-2 md:order-2' : 'order-1 md:order-1'}`}>
                <div className="inline-block px-6 py-2.5 bg-[#0A2F5D]/5 rounded-full text-[#0A2F5D] font-medium text-lg">
                  {t('facilities.sections.infrastructure.title')}
                </div>
                <h3 className="text-4xl font-bold text-[#0A2F5D]">
                  {t('facilities.sections.infrastructure.heading')}
                  <span className="block text-xl font-medium text-[#0A2F5D]/70 mt-3">
                    {t('facilities.sections.infrastructure.subheading')}
                  </span>
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.infrastructure.features.electricity.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.infrastructure.features.electricity.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.infrastructure.features.water.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.infrastructure.features.water.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.infrastructure.features.industrial.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.infrastructure.features.industrial.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`relative group ${isRTL ? 'order-1 md:order-1' : 'order-2 md:order-2'}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#EAB308]/20 to-[#0A2F5D]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/det.png"
                    alt={t('facilities.sections.infrastructure.title')}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Security Section */}
          {activeTab === "security" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
            >
              <div className={`relative group ${isRTL ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#EAB308]/20 to-[#0A2F5D]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/det7.png"
                    alt={t('facilities.sections.security.title')}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className={`space-y-8 ${isRTL ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                <div className="inline-block px-6 py-2.5 bg-[#0A2F5D]/5 rounded-full text-[#0A2F5D] font-medium text-lg">
                  {t('facilities.sections.security.title')}
                </div>
                <h3 className="text-4xl font-bold text-[#0A2F5D]">
                  {t('facilities.sections.security.heading')}
                  <span className="block text-xl font-medium text-[#0A2F5D]/70 mt-3">
                    {t('facilities.sections.security.subheading')}
                  </span>
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.security.features.guards.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.security.features.guards.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.security.features.cameras.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.security.features.cameras.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#0A2F5D]/5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#EAB308] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#0A2F5D] text-lg font-medium">
                          {t('facilities.sections.security.features.fire.title')}
                        </p>
                        <p className="text-[#0A2F5D]/70 text-lg mt-2">
                          {t('facilities.sections.security.features.fire.subtitle')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
} 