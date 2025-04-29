import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/cover.png')] bg-cover bg-center bg-no-repeat opacity-90"></div>
        <div className="absolute inset-0 bg-[#0A2F5D]/70"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] bg-repeat opacity-10"></div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="mb-6 flex items-center justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-[#EAB308] p-1">
              <Image
                src="/logo.png"
                alt="شعار مجمع النخيل"
                width={120}
                height={120}
                className="h-full w-full rounded-full pt-1 object-cover"
              />
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
            أكبر مجمع لمراكز وورش صيانة السيارات بقلب جدة
          </h1>
          <p className="mb-2 text-xl font-semibold text-[#EAB308]">
            The Biggest Maintenance and Workshops Centers in the Heart of Jeddah
          </p>
          <div className="mb-4 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">مجمع النخيل الشامل لصيانة السيارات</p>
            <p className="text-xl font-medium">Al Nakheel Auto Maintenance Complex</p>
          </div>

        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A2F5D] to-transparent"></div>
      </div>
    </section>
  )
} 