import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Tajawal, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingButtons from "@/components/FloatingButtons"
import { getDirection, getFontFamily } from "@/lib/i18n"
import { Toaster } from "@/components/ui/toaster"

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
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const direction = getDirection(locale as any)
  const fontFamily = getFontFamily(locale as any)

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${tajawal.variable} ${poppins.variable} ${fontFamily} ${direction === 'rtl' ? 'rtl' : 'ltr'}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-white">
            {children}
            <FloatingButtons />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 