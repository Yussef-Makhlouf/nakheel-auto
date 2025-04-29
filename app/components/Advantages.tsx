'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin, Shield, Truck } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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
  const advantages = [
    {
      title: "الموقع",
      subtitle: "Location",
      description: "وجود الموقع في وسط جدة، وسهولة الوصول منه واليه من كافة الاتجاهات شمالا وجنوبا وغربا وشرقا، إضافة لقرب الموقع من أهم التجمعات السكنية ومراكز الأعمال وأسواق قطع الغيار بجـده.",
      descriptionEn: "The location of the site in the center of Jeddah, and easy access to and from all directions north, south, west and east, in addition to the proximity of the site to the residential districts, business centers and spare parts markets in Jeddah.",
      icon: MapPin,
      image: "/des1.png",
      color: "from-blue-600 to-blue-800",
      size: "large"
    },
    {
      title: "الأنشطة والتراخيص القانونية",
      subtitle: "Sectors and Legal Licenses",
      description: "وجود المشروع في منطقة نظامية، مع وجود كافة التراخيص التنظيمية من أمانة محافظة جده لكل أنواع صيانة السيارات، بما فيها أعمال الميكانيك والكهرباء والسمكرة والدهان.",
      descriptionEn: "The project is located in a regular area, with all regulatory licenses from Amana as a portfolio for all types of car maintenance, including mechanical, electrical, plumbing and painting works.",
      icon: Shield,
      image: "/des2.png",
      color: "from-green-600 to-green-800",
      size: "medium"
    },
    {
      title: "المرافق والمكاتب ومواقف السيارات",
      subtitle: "Facilities, Offices and Parking",
      description: "توفر وحدات مكتبية خاصة بكل وحدة ومزودة بكافة المرافق الخاصة اللازمة للحصول على بيئة عمل متكاملة ومثالية واقتصادية. توفر كافة الاحتياجات اللوجستية من مساحات حركة واسعة، وسهولة الدخول والخروج ومواقف السيارات والشاحنات الكبيرة والصغيرة، مع تخصيص مساحات كافية لكل وحدة مخصصة كمواقف سيارات.",
      descriptionEn: "It provides office units for each unit and is equipped with all the special facilities necessary to obtain an integrated, ideal and economical work environment. It provides all logistical needs from large movement spaces, ease of entry and exit, parking lots, cars, large and small trucks, with sufficient spaces allocated for each unit designated as parking lots.",
      icon: Building,
      image: "/des3.png",
      color: "from-purple-600 to-purple-800",
      size: "small"
    },
    {
      title: "الأنظمة الأمنية ومكافحة الحريق",
      subtitle: "Security and Firefighting Systems",
      description: "توفير الحراسات والأنظمة الأمنية على مدار الساعة وتعزيزها بكاميرات مراقبة متطورة لمراقبة وتأمين المجمع من جميع الجهات لضمان توفير بيئة عمل آمنة ومريحة. تركيب كافة تجهيزات وأنظمة مكافحة الحريق بأعلى المواصفات الهندسية. توفر كافة الخدمات والبنية التحتية (كهرباء وماء وصرف صحي وصرف صناعي).",
      descriptionEn: "Providing guards and security systems around 24 hours with advanced surveillance cameras to monitor and secure the complex from all sides to ensure a safe and comfortable work environment. Installation of all firefighting equipment and systems with the highest engineering specifications. Availability of all services and infrastructure (electricity, water, sewage and industrial sewage).",
      icon: Shield,
      image: "/des4.png",
      color: "from-red-600 to-red-800",
      size: "medium"
    }
  ]

  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <CircleDecoration className="absolute -top-16 -left-16" />
      <DotsDecoration className="absolute top-1/4 right-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center relative"
        >
          <DotsDecoration className="absolute -top-8 left-1/4" />
          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2F5D]">أهم مزايا مجمع النخيل الشامل لصيانة السيارات</h2>
          <p className="text-lg sm:text-xl text-[#0A2F5D]/80">The most important advantages of Al Nakheel Autopark Complex</p>
        </motion.div>

        <div className="space-y-24 relative">
          <CircleDecoration className="absolute -right-16 top-1/4" />
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center relative`}
            >
              {index % 2 === 1 && <DotsDecoration className="absolute -left-8 top-1/2" />}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="rounded-full bg-[#0A2F5D]/10 p-4">
                    <advantage.icon className="h-10 w-10 text-[#0A2F5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2F5D]">{advantage.title}</h3>
                    <p className="text-lg text-[#0A2F5D]/80">{advantage.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">{advantage.description}</p>
                  <p className="text-base text-gray-600 leading-relaxed">{advantage.descriptionEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 