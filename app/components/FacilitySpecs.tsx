'use client'
import { motion } from "framer-motion"
import { Building, AreaChart, Car, Factory, Maximize2 } from "lucide-react"

export function FacilitySpecs() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  // Specs data with icons
  const specs = [
    { 
      id: 1, 
      value: "20,500", 
      unit: "m²", 
      label: "المساحة الإجمالية",
      labelEn: "Total Area",
      icon: <AreaChart className="h-5 w-5" /> 
    },
    { 
      id: 2, 
      value: "✓", 
      label: "مكاتب إدارية",
      labelEn: "Admin Offices",
      icon: <Building className="h-5 w-5" /> 
    },
    { 
      id: 3, 
      value: "✓", 
      label: "مواقف سيارات",
      labelEn: "Parking Spaces",
      icon: <Car className="h-5 w-5" /> 
    },
    { 
      id: 4, 
      value: "✓", 
      label: "مرافق متكاملة",
      labelEn: "Integrated Facilities",
      icon: <Factory className="h-5 w-5" /> 
    },
    { 
      id: 5, 
      value: "✓", 
      label: "قابل للتوسع",
      labelEn: "Expandable Design",
      icon: <Maximize2 className="h-5 w-5" /> 
    },
  ]

  return (
    <section id="specs" className="py-24 bg-[#0a2f5d] from-primary-800 to-primary-900 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-bg opacity-5" />
      
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 w-full h-full transform rotate-180"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white opacity-5"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="mb-3 text-3xl sm:text-4xl font-bold text-white">
            مواصفات المجمع
          </h2>
          <p className="text-lg sm:text-xl text-white/80">Facility Specifications</p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full"></div>
        </motion.div>

        {/* Specs cards grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {specs.map((spec) => (
            <motion.div
              key={spec.id}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 card-hover border border-white/10"
            >
              <div className="bg-white/10 rounded-full p-3 inline-flex mb-4 mx-auto backdrop-blur-md">
                <div className="text-accent-400">
                  {spec.icon}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white mb-1">{spec.value}</span>
                {spec.unit && <span className="text-sm text-white/70">{spec.unit}</span>}
                <div className="mt-3 space-y-1">
                  <div className="text-sm font-medium text-white">{spec.label}</div>
                  <div className="text-xs text-white/60">{spec.labelEn}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed text-white text-right">
              تم تنفيذ مجمع النخيل الشامل لصيانة السيارات بمستوى هندسي و إنشائي راقٍ ومتكامل على مساحة 20500 متر
              مربع تشتمل على منطقة تشغيل ومكاتب إدارية ومواقف سيارات ومساحات حركة مرورية فسيحة للسيارات والشاحنات
              الكبيرة وفق بيئة عمل متكاملة ومثالية وآمنه ويسهل الوصول منها وإليها من كافة اتجاهات مدينة جده.
            </p>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <p className="text-base leading-relaxed text-white/70">
              Al-Nakheel Comprehensive Car Maintenance Complex has been implemented at a high and integrated
              engineering and construction level on an area of 20,500 square meters that includes an operating
              area, administrative offices, parking and traffic spaces for cars and large trucks according to an
              integrated, ideal, safe and easily accessible work environment from all directions of the city of Jeddah.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white opacity-5"
          ></path>
        </svg>
      </div>
    </section>
  )
} 