import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A2F5D] py-12 text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="شعار مجمع النخيل"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <div>
                <span className="block text-xl font-bold text-[#EAB308]">مجمع النخيل الشامل</span>
                <span className="text-sm text-white/70">Al Nakheel Auto Maintenance Complex</span>
              </div>
            </div>
            <p className="mt-4 text-white/80">
              أكبر مجمع لمراكز وورش صيانة السيارات بقلب جدة
              <br />
              <span className="text-sm text-white/60">
                The Biggest Maintenance and Workshops Centers in the Heart of Jeddah
              </span>
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">روابط سريعة / Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-white/80 hover:text-white">
                  الرئيسية 
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-white">
                  نبذة عن المشروع 
                </Link>
              </li>
              <li>
                <Link href="#advantages" className="text-white/80 hover:text-white">
                  المزايا 
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="text-white/80 hover:text-white">
                  المرافق 
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-white/80 hover:text-white">
                  الموقع 
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white">
                  اتصل بنا 
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">اتصل بنا / Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="ml-2 h-5 w-5 text-[#EAB308]" />
                <div>
                  <span className="block text-white/80">وسط جدة، المملكة العربية السعودية</span>
                  <span className="text-sm text-white/60">Center of Jeddah, Saudi Arabia</span>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="ml-2 h-5 w-5 text-[#EAB308]" />
                <span className="text-white/80">012-345-6789</span>
              </li>
              <li className="flex items-start">
                <Mail className="ml-2 h-5 w-5 text-[#EAB308]" />
                <span className="text-white/80">info@nakheelauto.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} مجمع النخيل الشامل لصيانة السيارات. جميع الحقوق محفوظة.
            <br />
            <span className="text-sm">Al Nakheel Auto Maintenance Complex. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
} 