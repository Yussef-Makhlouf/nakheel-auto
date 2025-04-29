'use client'
import Image from "next/image"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#F1F5F9] to-white py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-2 text-3xl sm:text-4xl font-bold text-[#0A2F5D]">نبذة عن المشروع</h2>
          <p className="text-lg sm:text-xl text-[#0A2F5D]/80">About the Project</p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-[#EAB308] to-[#16A34A]"></div>
        </motion.div>

        {/* Responsive grid for images and text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side: images grid */}
          <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full">
            <div className="row-span-2">
              <Image
                src="/square3.png"
                alt="مجمع النخيل الشامل"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/square.png"
                alt="مجمع النخيل الشامل"
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/square2.png"
                alt="مجمع النخيل الشامل"
                width={400}
                height={250}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="row-span-2">
              <Image
                src="/square4.png"
                alt="مجمع النخيل الشامل"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="row-span-2">
              <Image
                src="/det4.png"
                alt="مجمع النخيل الشامل"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right side: text content */}
          <div className="flex flex-col justify-center gap-8">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
              <p className="mb-4 text-base sm:text-lg leading-relaxed text-gray-700">
                مجمع النخيل الشامل لصيانة السيارات هو باكورة مشروعات شركة مـزون المتقدمة العقارية، وتم الإشراف العام
                عليه ابتداء من أعمال التصميم الهندسي والاشراف على الأعمال الانشائية وصولا لاكتمال بناؤه والبدء
                بالتأجير وإدارته من قبل شركة دارة القمرة للاستشارات وتطوير الأعمال.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                Al-Nakheel Auto Maintenance Complex is the first project of Mozoon Al Motaqadimah Real Estate
                Company, and it was generally supervised, starting from engineering designs works and supervising
                construction works until the completion of its construction to the start of leasing and its
                management by Darat Al-Qamra Consulting and Business Development Company.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg">
              <p className="mb-4 text-base sm:text-lg leading-relaxed text-gray-700">
                تم تنفيذ مجمع النخيل الشامل لصيانة السيارات بمستوى هندسي و إنشائي راقٍ ومتكامل على مساحة 20500 متر
                مربع تشتمل على منطقة تشغيل ومكاتب إدارية ومواقف سيارات ومساحات حركة مرورية فسيحة للسيارات والشاحنات
                الكبيرة وفق بيئة عمل متكاملة ومثالية وآمنه ويسهل الوصول منها وإليها من كافة اتجاهات مدينة جده، مما
                يختصر الكثير من الوقت والجهد والتكاليف. كما صممت وحداته بنظام معماري وانشائي ذكي ومرن قابل للزيادة
                والتوسع حسب حاجة العميل إضافة إلى توفير كافة عناصر البنية التحتية من كهرباء ومياه ومرافق عامة.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                Al-Nakheel Comprehensive Car Maintenance Complex has been implemented at a high and integrated
                engineering and construction level on an area of 20,500 square meters that includes an operating
                area, administrative offices, parking and traffic spaces for cars and large trucks according to an
                integrated, ideal, safe and easily accessible work environment from all directions of the city of
                Jeddah, which shortens a lot of time, effort and costs. Its units are also designed with a smart and
                flexible architectural and construction systems that can be increased and expanded according to the
                customer's need, in addition to providing all elements of infrastructure such as electricity, water
                and public utilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 