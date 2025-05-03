// 'use client'
// import Image from "next/image"
// import { MapPin, Navigation, ExternalLink, Car, Building, Coffee, Clock, CircleDot, ChevronRight, MapIcon } from "lucide-react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

// export function Location() {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15
//       }
//     }
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
//   }

//   // Key landmarks nearby
//   const landmarks = [
//     {
//       name: "مطار الملك عبدالعزيز الدولي",
//       distance: "25 دقيقة",
//       icon: <Car className="h-5 w-5" />
//     },
//     {
//       name: "وسط المدينة",
//       distance: "15 دقيقة",
//       icon: <Building className="h-5 w-5" />
//     },
//     {
//       name: "مركز تسوق الأندلس مول",
//       distance: "10 دقائق",
//       icon: <Coffee className="h-5 w-5" />
//     },
//   ]

//   // Directions to the complex
//   const directions = [
//     "من طريق المدينة المنورة الاتجاه شمالًا",
//     "الدخول من المخرج 5 على اليمين",
//     "استمر لمسافة 2 كم حتى تصل إلى مجمع النخيل على اليمين"
//   ]

//   // Google Maps URL
//   const googleMapsUrl = "https://maps.app.goo.gl/mK5QRGHJZsShbZ6y9";

//   return (
//     <section id="location" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       {/* Background patterns & decorations */}
//       <div className="absolute inset-0 pattern-bg opacity-10"></div>
//       <div className="absolute top-40 left-20 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-30"></div>
//       <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent-100 rounded-full blur-[100px] opacity-30"></div>
      
//       {/* Section header */}
//       <div className="container mx-auto px-4 relative z-10 mb-16">
//         <motion.div 
//           className="text-center max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
//             موقع المجمع
//           </h2>
//           <p className="text-lg text-gray-600">
//             يتميز المجمع بموقع استراتيجي يسهل الوصول إليه من جميع أنحاء مدينة جدة
//           </p>
//           <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full"></div>
//         </motion.div>
//       </div>

//       {/* Full-width map section */}
//       <motion.div 
//         className="relative h-[500px] mb-16 overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <iframe 
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.1125942060186!2d39.24834!3d21.602702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db654988b4e5%3A0x57cfcf3eec662156!2sPrince%20Mohammed%20Bin%20Abdulaziz%20Rd%2C%20Al%20Nakheel%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1652918825514!5m2!1sen!2sus" 
//           width="100%" 
//           height="100%" 
//           style={{ border: 0 }} 
//           allowFullScreen
//           loading="lazy" 
//           referrerPolicy="no-referrer-when-downgrade"
//           className="w-full h-full object-cover"
//         ></iframe>
        
//         {/* Map overlay with location highlight */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
//           <div className="relative">
//             <span className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-accent-400 opacity-30"></span>
//             <MapPin className="relative z-10 h-12 w-12 text-accent-500 drop-shadow-lg" />
//           </div>
//         </div>
        
//         {/* Floating card on map */}
//         <div className="absolute top-8 left-8 bg-white shadow-xl rounded-2xl p-6 max-w-md z-30">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="rounded-full bg-primary-100 p-2 text-primary-700">
//               <MapPin className="h-6 w-6" />
//             </div>
//             <h3 className="text-xl font-bold text-primary-700">مجمع النخيل الشامل</h3>
//           </div>
//           <p className="text-gray-600 mb-4">
//             مشروع شمال جدة، طريق المدينة المنورة، حي النخيل، جدة، المملكة العربية السعودية
//           </p>
//           <Button 
//             className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white"
//             onClick={() => window.open(googleMapsUrl, '_blank')}
//           >
//             <Navigation className="h-5 w-5 ml-2" />
//             احصل على الاتجاهات
//           </Button>
//         </div>
//       </motion.div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Location details card */}
//           <motion.div 
//             className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <div className="flex items-start gap-4 mb-6">
//               <div className="p-3 rounded-2xl bg-primary-100 text-primary-700">
//                 <MapIcon className="h-7 w-7" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary-700 mb-1">العنوان</h3>
//                 <p className="text-sm text-gray-500">Address</p>
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <p className="text-gray-700">
//                 مشروع شمال جدة، طريق المدينة المنورة، حي النخيل، 
//                 جدة، المملكة العربية السعودية
//               </p>
//               <p className="text-sm text-gray-500">
//                 North Jeddah Project, Madinah Road, Al Nakheel District, 
//                 Jeddah, Saudi Arabia
//               </p>
//             </div>
            
//             <div className="mt-6 pt-6 border-t border-gray-100">
//               <Button 
//                 variant="outline" 
//                 className="w-full text-primary-700 border-primary-200 hover:bg-primary-50"
//                 onClick={() => window.open(googleMapsUrl, '_blank')}
//               >
//                 <ExternalLink className="h-4 w-4 ml-2" />
//                 عرض على الخريطة
//               </Button>
//             </div>
//           </motion.div>
          
//           {/* Nearby landmarks card */}
//           <motion.div 
//             className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             <div className="flex items-start gap-4 mb-6">
//               <div className="p-3 rounded-2xl bg-accent-100 text-accent-700">
//                 <Building className="h-7 w-7" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary-700 mb-1">معالم قريبة</h3>
//                 <p className="text-sm text-gray-500">Nearby Landmarks</p>
//               </div>
//             </div>
            
//             <ul className="space-y-5">
//               {landmarks.map((landmark, index) => (
//                 <li key={index} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
//                   <div className="rounded-full bg-gray-100 p-2 text-primary-600">
//                     {landmark.icon}
//                   </div>
//                   <div>
//                     <p className="text-gray-700 font-medium">{landmark.name}</p>
//                     <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
//                       <Clock className="h-3 w-3" />
//                       {landmark.distance} بالسيارة
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
          
//           {/* Directions card */}
//           <motion.div 
//             className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="flex items-start gap-4 mb-6">
//               <div className="p-3 rounded-2xl bg-secondary-100 text-secondary-700">
//                 <Navigation className="h-7 w-7" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-primary-700 mb-1">كيفية الوصول</h3>
//                 <p className="text-sm text-gray-500">Directions</p>
//               </div>
//             </div>
            
//             <ul className="space-y-4 mb-8">
//               {directions.map((direction, index) => (
//                 <li key={index} className="relative pr-8">
//                   <div className="absolute right-0 top-1.5 bg-accent-100 text-accent-700 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
//                     {index + 1}
//                   </div>
//                   <p className="text-gray-700">{direction}</p>
//                 </li>
//               ))}
//             </ul>
            
//             <Button 
//               className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white"
//               onClick={() => window.open(googleMapsUrl, '_blank')}
//             >
//               <Navigation className="h-5 w-5 ml-2" />
//               احصل على الاتجاهات التفصيلية
//             </Button>
//           </motion.div>
//         </div>
        
//         {/* Additional features */}
//         <motion.div 
//           className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-8 shadow-inner border border-primary-200"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex gap-3 items-center">
//               <div className="rounded-full bg-white p-3 text-primary-700">
//                 <Clock className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="font-medium text-primary-900">مدة الرحلة</p>
//                 <p className="text-primary-700">15-20 دقيقة من وسط المدينة</p>
//               </div>
//             </div>
            
//             <div className="flex gap-3 items-center">
//               <div className="rounded-full bg-white p-3 text-primary-700">
//                 <Car className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="font-medium text-primary-900">مواقف سيارات</p>
//                 <p className="text-primary-700">متوفرة مجاناً للزوار</p>
//               </div>
//             </div>
            
//             <div className="flex gap-3 items-center">
//               <div className="rounded-full bg-white p-3 text-primary-700">
//                 <Building className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="font-medium text-primary-900">المساحة</p>
//                 <p className="text-primary-700">20,500 متر مربع</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// } 