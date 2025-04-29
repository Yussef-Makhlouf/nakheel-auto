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
                    <p className="text-sm text-gray-500">+966 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[#0A2F5D]" />
                  <div>
                    <p className="font-medium text-gray-700">البريد الإلكتروني</p>
                    <p className="text-sm text-gray-500">info@alnakheelauto.com</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.444444444444!2d39.12345678901234!3d21.54321098765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMyJzM1LjYiTiAzOcKwMDcnMjQuNSJF!5e0!3m2!1sen!2ssa!4v1234567890"
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
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/partners/partner1.png"
                    alt="Partner 1"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">شريك 1</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/partners/partner2.png"
                    alt="Partner 2"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">شريك 2</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/partners/partner3.png"
                    alt="Partner 3"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">شريك 3</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                  <Image
                    src="/partners/partner4.png"
                    alt="Partner 4"
                    width={120}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">شريك 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
            <Image
              src="/banner.jpg"
              alt="Banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white">
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