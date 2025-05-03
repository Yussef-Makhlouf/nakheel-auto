// 'use client'

// import { useEffect, useState, useRef } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Building, ChevronLeft, ChevronRight, Star, Trophy, Users } from "lucide-react"

// // Decorative SVG components
// interface DecorationProps {
//   className?: string;
// }

// const CircleDecoration: React.FC<DecorationProps> = ({ className }) => (
//   <svg className={`absolute w-32 h-32 text-[#0A2F5D]/5 ${className}`} viewBox="0 0 100 100">
//     <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
//     <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
//   </svg>
// )

// const DotsDecoration: React.FC<DecorationProps> = ({ className }) => (
//   <svg className={`absolute w-24 h-24 text-[#EAB308]/20 ${className}`} viewBox="0 0 100 100">
//     <circle cx="20" cy="20" r="2" fill="currentColor" />
//     <circle cx="50" cy="20" r="2" fill="currentColor" />
//     <circle cx="80" cy="20" r="2" fill="currentColor" />
//     <circle cx="20" cy="50" r="2" fill="currentColor" />
//     <circle cx="50" cy="50" r="2" fill="currentColor" />
//     <circle cx="80" cy="50" r="2" fill="currentColor" />
//     <circle cx="20" cy="80" r="2" fill="currentColor" />
//     <circle cx="50" cy="80" r="2" fill="currentColor" />
//     <circle cx="80" cy="80" r="2" fill="currentColor" />
//   </svg>
// )

// interface PartnerData {
//   id: string;
//   name: string;
//   logo: string;
//   description: string;
//   testimonial?: {
//     quote: string;
//     author: string;
//     position: string;
//   };
//   stats?: {
//     revenue: string;
//     growthRate: string;
//     satisfaction: string;
//   };
// }

// export function PartnerSuccess() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const carouselRef = useRef<HTMLDivElement>(null);
  
//   const partners: PartnerData[] = [
//     {
//       id: "01",
//       name: "شركة السيارات الحديثة",
//       logo: "/partner1.png", // Update with actual path
//       description: "تعاونت شركة السيارات الحديثة مع مجمع النخيل منذ البداية وحققت نجاحاً استثنائياً في مجال صيانة السيارات الفاخرة. يوفر المجمع بيئة عمل مثالية سمحت لنا بتطوير خدماتنا وزيادة قاعدة عملائنا.",
//       testimonial: {
//         quote: "مجمع النخيل هو الخيار الأمثل لأصحاب الورش والمراكز الفنية الطموحين، البنية التحتية والمرافق المتكاملة ساهمت في تسريع نمو أعمالنا بشكل كبير.",
//         author: "أحمد محمد",
//         position: "المدير التنفيذي"
//       },
//       stats: {
//         revenue: "+45%",
//         growthRate: "+65%",
//         satisfaction: "97%"
//       }
//     },
//     {
//       id: "02",
//       name: "مركز الميكانيكا المتطورة",
//       logo: "/partner2.png", // Update with actual path
//       description: "استفاد مركز الميكانيكا المتطورة من موقع مجمع النخيل الاستراتيجي والمساحات المناسبة للمعدات الكبيرة، مما أتاح لنا توسيع نطاق خدماتنا وتقديم حلول متكاملة لعملائنا في مجال صيانة محركات السيارات.",
//       testimonial: {
//         quote: "منذ انتقالنا لمجمع النخيل، تضاعفت قدرتنا على استيعاب السيارات وتحسنت كفاءة العمل بشكل ملحوظ بفضل التصميم العملي للورش.",
//         author: "خالد العمري",
//         position: "مدير العمليات"
//       },
//       stats: {
//         revenue: "+38%",
//         growthRate: "+52%",
//         satisfaction: "94%"
//       }
//     },
//     {
//       id: "03",
//       name: "ورشة التقنية الذكية",
//       logo: "/partner3.png", // Update with actual path
//       description: "استطاعت ورشة التقنية الذكية الاستفادة من الأنظمة الأمنية المتطورة والبنية التحتية القوية في مجمع النخيل لتقديم خدمات برمجة وصيانة الأنظمة الإلكترونية للسيارات الحديثة بكفاءة عالية.",
//       testimonial: {
//         quote: "الأنظمة الكهربائية والبنية التحتية المتطورة في مجمع النخيل مكنتنا من تركيب أحدث المعدات التشخيصية للسيارات دون أي قيود فنية.",
//         author: "سامي الحربي",
//         position: "مؤسس الشركة"
//       },
//       stats: {
//         revenue: "+60%",
//         growthRate: "+75%",
//         satisfaction: "98%"
//       }
//     },
//     {
//       id: "04",
//       name: "مركز الهندسة الميكانيكية",
//       logo: "/partner4.png", // Update with actual path
//       description: "وجد مركز الهندسة الميكانيكية في مجمع النخيل بيئة مثالية لتقديم خدمات متخصصة في صيانة ناقل الحركة والأنظمة الميكانيكية المعقدة، مع توفر مساحات عمل مناسبة ومرافق متكاملة.",
//       testimonial: {
//         quote: "سهولة الوصول للمجمع والمساحات الواسعة ساعدتنا على استقبال المزيد من السيارات الكبيرة والشاحنات، وهو ما كان صعباً في موقعنا السابق.",
//         author: "فهد القحطاني",
//         position: "المدير الفني"
//       },
//       stats: {
//         revenue: "+42%",
//         growthRate: "+58%",
//         satisfaction: "95%"
//       }
//     }
//   ];

//   // Auto-swap carousel
//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => {
//         setActiveIndex((current) => (current + 1) % partners.length);
//       }, 5000); // Change slide every 5 seconds
//       return () => clearInterval(interval);
//     }
//   }, [partners.length, isPaused]);

//   const handlePrev = () => {
//     setActiveIndex((current) => (current - 1 + partners.length) % partners.length);
//     setIsPaused(true);
//     setTimeout(() => setIsPaused(false), 10000); // Resume auto-swap after 10 seconds
//   };

//   const handleNext = () => {
//     setActiveIndex((current) => (current + 1) % partners.length);
//     setIsPaused(true);
//     setTimeout(() => setIsPaused(false), 10000); // Resume auto-swap after 10 seconds
//   };

//   const handleDotClick = (index: number) => {
//     setActiveIndex(index);
//     setIsPaused(true);
//     setTimeout(() => setIsPaused(false), 10000); // Resume auto-swap after 10 seconds
//   };

//   return (
//     <section id="partner-success" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//       <CircleDecoration className="top-10 left-10 opacity-30" />
//       <DotsDecoration className="bottom-20 right-10 opacity-30" />
      
//       <div className="container mx-auto px-4 max-w-6xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2F5D] mb-4">قصص نجاح شركائنا</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">تعرف على نجاحات شركائنا وكيف استفادوا من المرافق والخدمات المتكاملة في مجمع النخيل لتنمية أعمالهم</p>
//         </motion.div>

//         <div 
//           ref={carouselRef}
//           className="relative bg-white rounded-2xl shadow-xl overflow-hidden" 
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div 
//             className="flex transition-transform duration-500 ease-in-out" 
//             style={{ transform: `translateX(${activeIndex * 100}%)` }}
//           >
//             {partners.map((partner, index) => (
//               <div key={partner.id} className="w-full flex-shrink-0 flex flex-col md:flex-row rtl" style={{ direction: 'rtl' }}>
//                 <div className="w-full md:w-2/3 p-8 lg:p-12">
//                   <div className="h-20 w-48 relative mb-6">
//                     <div className="bg-gray-50 rounded-lg h-20 w-48 flex items-center justify-center">
//                       {/* Replace with actual logo */}
//                       <div className="font-bold text-[#0A2F5D] text-xl">{partner.name}</div>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-[#0A2F5D] mb-4">{partner.name}</h3>
//                   <p className="text-gray-700 mb-6">{partner.description}</p>
                  
//                   {partner.testimonial && (
//                     <div className="bg-gray-50 p-6 rounded-lg border-r-4 border-[#EAB308] mb-6">
//                       <p className="text-gray-700 italic mb-4">"{partner.testimonial.quote}"</p>
//                       <div className="flex items-center">
//                         <div className="w-10 h-10 bg-[#0A2F5D] rounded-full flex items-center justify-center text-white">
//                           <Users size={20} />
//                         </div>
//                         <div className="mr-3">
//                           <p className="font-bold text-[#0A2F5D]">{partner.testimonial.author}</p>
//                           <p className="text-gray-600 text-sm">{partner.testimonial.position}</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="w-full md:w-1/3 bg-[#0A2F5D]/5 p-8 flex flex-col justify-center">
//                   <div className="text-center p-4 bg-white rounded-lg shadow-sm mb-6">
//                     <h4 className="text-lg font-bold text-[#0A2F5D] mb-2">نتائج الشراكة</h4>
//                     <div className="grid grid-cols-3 gap-4 mt-4">
//                       <div className="text-center">
//                         <div className="flex justify-center mb-1">
//                           <Trophy size={20} className="text-[#EAB308]" />
//                         </div>
//                         <p className="text-sm text-gray-600">زيادة الإيرادات</p>
//                         <p className="font-bold text-green-600">{partner.stats?.revenue}</p>
//                       </div>
//                       <div className="text-center">
//                         <div className="flex justify-center mb-1">
//                           <Building size={20} className="text-[#0A2F5D]" />
//                         </div>
//                         <p className="text-sm text-gray-600">معدل النمو</p>
//                         <p className="font-bold text-green-600">{partner.stats?.growthRate}</p>
//                       </div>
//                       <div className="text-center">
//                         <div className="flex justify-center mb-1">
//                           <Star size={20} className="text-[#EAB308]" />
//                         </div>
//                         <p className="text-sm text-gray-600">رضا العملاء</p>
//                         <p className="font-bold text-green-600">{partner.stats?.satisfaction}</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="bg-white/60 rounded-lg p-6 flex justify-center items-center">
//                     <div className="text-center">
//                       <p className="font-bold text-[#0A2F5D] text-lg mb-2">انضم إلى قائمة شركائنا</p>
//                       <p className="text-gray-600 text-sm mb-4">واستفد من خدماتنا المتميزة</p>
//                       <button className="bg-[#0A2F5D] text-white px-6 py-2 rounded-full hover:bg-[#0A2F5D]/90 transition-colors">
//                         تواصل معنا
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Navigation buttons */}
//           <button 
//             onClick={handlePrev}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0A2F5D] w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={24} />
//           </button>
          
//           <button 
//             onClick={handleNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#0A2F5D] w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={24} />
//           </button>
          
//           {/* Navigation dots */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//             {partners.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   index === activeIndex ? "bg-[#0A2F5D]" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="h-2 bg-[#0A2F5D]" />
//             <div className="p-6">
//               <div className="w-12 h-12 bg-[#0A2F5D]/10 rounded-full flex items-center justify-center text-[#0A2F5D] mb-4">
//                 <Building size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#0A2F5D] mb-2">بيئة عمل متكاملة</h3>
//               <p className="text-gray-600">استفد من مرافق متكاملة ومساحات مصممة خصيصاً لنجاح أعمال صيانة السيارات</p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="h-2 bg-[#EAB308]" />
//             <div className="p-6">
//               <div className="w-12 h-12 bg-[#EAB308]/10 rounded-full flex items-center justify-center text-[#EAB308] mb-4">
//                 <Users size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#0A2F5D] mb-2">حركة عملاء نشطة</h3>
//               <p className="text-gray-600">موقع استراتيجي مركزي يضمن تدفق مستمر للعملاء وسهولة الوصول من جميع أنحاء المدينة</p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="h-2 bg-green-600" />
//             <div className="p-6">
//               <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center text-green-600 mb-4">
//                 <Trophy size={24} />
//               </div>
//               <h3 className="text-xl font-bold text-[#0A2F5D] mb-2">فرص نمو حقيقية</h3>
//               <p className="text-gray-600">انضم لمجتمع من المحترفين وشركاء النجاح واستفد من التعاون المشترك لتحقيق أهدافك</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// } 