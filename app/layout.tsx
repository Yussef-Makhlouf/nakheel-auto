import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Tajawal, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingButtons from "@/components/FloatingButtons"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "مجمع النخيل الشامل لصيانة السيارات - Al Nakheel Auto Maintenance Complex",
  description:
    "أكبر مجمع لمراكز وورش صيانة السيارات بقلب جدة - The Biggest Maintenance and Workshops Centers in the Heart of Jeddah",
  keywords: [
    "مجمع النخيل الشامل",
    "صيانة سيارات جدة",
    "ورش سيارات جدة",
    "Al Nakheel Auto Maintenance",
    "Car maintenance Jeddah",
    "Auto workshops Jeddah",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} ${poppins.variable} font-tajawal`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  )
}
