import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#0A2F5D]">اتصل بنا</h2>
          <p className="text-xl text-[#0A2F5D]/80">Contact Us</p>
          <div className="mx-auto h-1 w-20 bg-[#EAB308]"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-lg bg-[#F1F5F9] p-6">
              <h3 className="mb-4 text-2xl font-bold text-[#0A2F5D]">
                معلومات التواصل
                <br />
                <span className="text-lg font-medium text-[#0A2F5D]/70">Contact Information</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[#0A2F5D]" />
                  <div>
                    <p className="font-medium text-gray-700">العنوان</p>
                    <p className="text-sm text-gray-500">خالد بن يزيد، النخيل، جدة المملكة العربية السعودية</p>
                    <p className="text-sm text-gray-500">Khalid bin Yazid, Al Nakheel, Jeddah, Saudi Arabia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-[#0A2F5D]" />
                  <div>
                    <p className="font-medium text-gray-700">الهاتف</p>
                    <p className="text-sm text-gray-500">0505740134</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[#0A2F5D]" />
                  <div>
                    <p className="font-medium text-gray-700">البريد الإلكتروني</p>
                    <p className="text-sm text-gray-500">alqumrah@alqumrah.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-[#0A2F5D]" />
                  <div>
                    <p className="font-medium text-gray-700">ساعات العمل</p>
                    <p className="text-sm text-gray-500">من السبت إلى الخميس: 8:00 صباحاً - 10:00 مساءً</p>
                    <p className="text-sm text-gray-500">Saturday to Thursday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-[#F1F5F9] p-6">
              <h3 className="mb-4 text-2xl font-bold text-[#0A2F5D]">
                الموقع
                <br />
                <span className="text-lg font-medium text-[#0A2F5D]/70">Location</span>
              </h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.258132268922!2d39.247901!3d21.536759699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d3003720dcaf%3A0x5e57f3e4012ac327!2z2YXYrNmF2Lkg2KfZhNmG2K7ZitmEINin2YTYtNin2YXZhCDZhNi12YrYp9mG2Kkg2KfZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sar!2seg!4v1745933751133!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[#F1F5F9] p-6">
            <h3 className="mb-6 text-2xl font-bold text-[#0A2F5D]">
              شركاء النجاح والانجاز
              <br />
              <span className="text-lg font-medium text-[#0A2F5D]/70">Partners of Success and Achievement</span>
            </h3>
            <div className="space-y-8">
              {/* Main Partner */}
              <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
                <Image
                  src="/part7.png"
                  alt="Partner 1"
                  width={200}
                  height={120}
                  className="object-contain"
                />
                <p className="mt-4 text-lg font-medium text-gray-700">درة القمره</p>
              </div>

              {/* Secondary Partners Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/part2.png"
                    alt="Partner 2"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">برو ميديا</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/part3.png"
                    alt="Partner 3"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">شركة نظم الانشاء و التعمير</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/part4.png"
                    alt="Partner 4"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">مكتب م. حسين حسن</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/part1.png"
                    alt="Partner 5"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">الانشاءات الحديديه</p>
                </div>
              </div>
            </div>   
          </div>
        </div>

        <div className="mt-12">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
            <Image
              src="/cover2.png"
              alt="Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 p-6 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold"> مجمع النخيل الشامل </h2>
              <p className="text-xl">   أكبر مجمع لمراكز صيانة السيارات بقلب جده</p>
        
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 