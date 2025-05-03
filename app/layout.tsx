import type { Metadata } from "next"
import { Inter, Tajawal } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const tajawal = Tajawal({ 
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: '--font-tajawal'
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
      <body className={`${inter.className} ${tajawal.variable}`}>
        <div className="flex min-h-screen flex-col bg-white">
          {children}
        </div>
      </body>
    </html>
  )
} 