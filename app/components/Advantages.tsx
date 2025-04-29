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
      image: "/images/location.jpg",
      color: "from-blue-600 to-blue-800",
      size: "large"
    },
    {
      title: "الأنشطة والتراخيص القانونية",
      subtitle: "Sectors and Legal Licenses",
      description: "وجود المشروع في منطقة نظامية، مع وجود كافة التراخيص التنظيمية من أمانة محافظة جده لكل أنواع صيانة السيارات، بما فيها أعمال الميكانيك والكهرباء والسمكرة والدهان.",
      descriptionEn: "The project is located in a regular area, with all regulatory licenses from Amana as a portfolio for all types of car maintenance, including mechanical, electrical, plumbing and painting works.",
      icon: Shield,
      image: "/images/licenses.jpg",
      color: "from-green-600 to-green-800",
      size: "medium"
    },
    {
      title: "المرافق والمكاتب ومواقف السيارات",
      subtitle: "Facilities, Offices and Parking",
      description: "توفر وحدات مكتبية خاصة بكل وحدة ومزودة بكافة المرافق الخاصة اللازمة للحصول على بيئة عمل متكاملة ومثالية واقتصادية. توفر كافة الاحتياجات اللوجستية من مساحات حركة واسعة، وسهولة الدخول والخروج ومواقف السيارات والشاحنات الكبيرة والصغيرة، مع تخصيص مساحات كافية لكل وحدة مخصصة كمواقف سيارات.",
      descriptionEn: "It provides office units for each unit and is equipped with all the special facilities necessary to obtain an integrated, ideal and economical work environment. It provides all logistical needs from large movement spaces, ease of entry and exit, parking lots, cars, large and small trucks, with sufficient spaces allocated for each unit designated as parking lots.",
      icon: Building,
      image: "/images/facilities.jpg",
      color: "from-purple-600 to-purple-800",
      size: "small"
    },
    {
      title: "الأنظمة الأمنية ومكافحة الحريق",
      subtitle: "Security and Firefighting Systems",
      description: "توفير الحراسات والأنظمة الأمنية على مدار الساعة وتعزيزها بكاميرات مراقبة متطورة لمراقبة وتأمين المجمع من جميع الجهات لضمان توفير بيئة عمل آمنة ومريحة. تركيب كافة تجهيزات وأنظمة مكافحة الحريق بأعلى المواصفات الهندسية. توفر كافة الخدمات والبنية التحتية (كهرباء وماء وصرف صحي وصرف صناعي).",
      descriptionEn: "Providing guards and security systems around 24 hours with advanced surveillance cameras to monitor and secure the complex from all sides to ensure a safe and comfortable work environment. Installation of all firefighting equipment and systems with the highest engineering specifications. Availability of all services and infrastructure (electricity, water, sewage and industrial sewage).",
      icon: Shield,
      image: "/images/security.jpg",
      color: "from-red-600 to-red-800",
      size: "medium"
    }
  ]

  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <CircleDecoration className="absolute -top-16 -left-16" />
      <DotsDecoration className="absolute top-1/4 right-0" />
      {/* <WaveDecoration className="absolute top-0 left-0" /> */}
      <CircleDecoration className="absolute -bottom-16 -right-16 rotate-180" />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center relative"
        >
          <DotsDecoration className="absolute -top-8 left-1/4" />
          <h2 className="mb-4 text-4xl font-bold text-[#0A2F5D]">أهم مزايا مجمع النخيل الشامل لصيانة السيارات</h2>
          <p className="text-xl text-[#0A2F5D]/80">The most important advantages of Al Nakheel Autopark Complex</p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-[#EAB308] to-[#F59E0B]"></div>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative">
          <DotsDecoration className="absolute -left-8 top-1/3" />
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${
                advantage.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                advantage.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
                    <CircleDecoration className="absolute -bottom-16 -right-16 rotate-180" />
            </motion.div>
          ))}
        </div>
        <CircleDecoration className="absolute -bottom-16 -right-16 rotate-180" />
        {/* Content Sections with Images */}
        <div className="mt-20 space-y-20 relative">
          <CircleDecoration className="absolute -right-16 top-1/4" />
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center relative`}
            >
              {index % 2 === 1 && <DotsDecoration className="absolute -left-8 top-1/2" />}
              <div className="w-full md:w-1/2">
                <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${advantage.color} opacity-20`} />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#0A2F5D]/10 p-3">
                    <advantage.icon className="h-8 w-8 text-[#0A2F5D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0A2F5D]">{advantage.title}</h3>
                    <p className="text-[#0A2F5D]/80">{advantage.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">{advantage.description}</p>
                  <p className="text-gray-600">{advantage.descriptionEn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 