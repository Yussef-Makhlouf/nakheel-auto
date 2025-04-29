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
                    <p className="text-sm text-gray-500">شارع الملك عبد العزيز، جدة، المملكة العربية السعودية</p>
                    <p className="text-sm text-gray-500">King Abdulaziz Street, Jeddah, Saudi Arabia</p>
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
                src="https://www.google.com/maps/place/%D9%85%D8%AC%D9%85%D8%B9+%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84+%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84+%D9%84%D8%B5%D9%8A%D8%A7%D9%86%D8%A9+%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%E2%80%AD/@21.5367597,39.247901,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3d3003720dcaf:0x5e57f3e4012ac327!8m2!3d21.5367597!4d39.247901!16s%2Fg%2F11lyz43mx5?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
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
            <h3 className="mb-4 text-2xl font-bold text-[#0A2F5D]">
              شركاء النجاح والانجاز
              <br />
              <span className="text-lg font-medium text-[#0A2F5D]/70">Partners of Success and Achievement</span>
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm">
                  <Image
                    src="/part7.png"
                    alt="Partner 1"
                    width={200}
                    height={120}
                    className="object-contain"
                  />
                  <p className="mt-4 text-lg font-medium text-gray-700">درة القمره</p>
                </div>
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
              <Button className="mt-6 bg-[#EAB308] hover:bg-[#EAB308]/90">
                اكتشف المزيد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 