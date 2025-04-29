import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="شعار مجمع النخيل"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-[#0A2F5D]">مجمع النخيل الشامل</span>
        </div>
        <nav className="hidden md:flex md:gap-6">
          <Link href="#hero" className="text-sm font-medium hover:text-[#16A34A]">
            الرئيسية
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-[#16A34A]">
            نبذة عن المشروع
          </Link>
          <Link href="#advantages" className="text-sm font-medium hover:text-[#16A34A]">
            المزايا
          </Link>
          <Link href="#facilities" className="text-sm font-medium hover:text-[#16A34A]">
            المرافق
          </Link>
          <Link href="#location" className="text-sm font-medium hover:text-[#16A34A]">
            الموقع
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-[#16A34A]">
            اتصل بنا
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">القائمة</span>
          </Button>
        </div>
      </div>
    </header>
  )
} 