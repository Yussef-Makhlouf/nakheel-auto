import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A2F5D] py-12 text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="شعار مجمع النخيل"
                width={120}
                height={120}
                className="h-12 w-10"
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
            <h3 className="mb-4 text-lg font-bold text-white">روابط سريعة </h3>
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
            <h3 className="mb-4 text-lg font-bold text-white">اتصل بنا</h3>
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
                <a href="tel:0505740134" className="text-white/80 hover:text-[#EAB308] transition-colors">
                  0505740134
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="ml-2 h-5 w-5 text-[#EAB308]" />
                <span className="text-white/80">alqumrah@alqumrah.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">تابعنا </h3>
            <div className="flex gap-4">
        
              <Link 
                href="https://x.com/nakheelautopark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#EAB308] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
      
              <Link 
                href="https://www.linkedin.com/in/%D9%85%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D9%86%D8%AE%D9%8A%D9%84-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%84-%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B2-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA-b0b95b362/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#EAB308] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>

              <div className="flex flex-col items-center justify-center mt-8">
          <Image
            src="/license.png"
            alt="رخصة البناء مع كود QR"
            width={220}
            height={220}
            className="mx-auto rounded-lg shadow-lg border border-yellow-400  p-2"
            priority
          />
        </div>
            </div>
  
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} مجمع النخيل الشامل لصيانة السيارات. جميع الحقوق محفوظة.
            <br />
            <span className="text-sm">Al Nakheel Auto Maintenance Complex. All rights reserved.</span>
            <br />
            <span className="text-sm">تم تطويره بواسطة  <span className="text-yellow-400"> القمر الذهبي</span></span>
            <br />
          </p>
        </div>

      </div>
    </footer>
  )
} 