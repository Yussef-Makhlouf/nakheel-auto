import type { Metadata } from "next"
import { Inter, Tajawal } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })
const tajawal = Tajawal({ 
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: '--font-tajawal',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "مجمع النخيل الشامل",
  description: "مجمع النخيل الشامل - مشروع متكامل للسيارات",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} ${tajawal.variable} font-tajawal`}>
        <div className="flex min-h-screen flex-col bg-white">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  )
}