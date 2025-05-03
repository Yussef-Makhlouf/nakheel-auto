'use client'
import Image from "next/image"
import Link from "next/link"
import {  Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTranslation } from '@/hooks/useTranslation'
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export function Header() {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#hero", label: t('common.home') },
    { href: "#about", label: t('common.about') },
    { href: "#advantages", label: t('common.advantages') },
    { href: "#facilities", label: t('common.facilities') },
    { href: "#location", label: t('common.location') },
    { href: "#contact", label: t('common.contact') },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 shadow-sm backdrop-blur-md' 
          : 'bg-transparent '
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/logo.png"
                  alt="شعار مجمع النخيل"
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-[#0A2F5D]' : 'text-white'}`}>
                {t('header.title')}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-gray-100/50 backdrop-blur-sm px-6 py-2 rounded-full">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-gray-700 hover:text-[#16A34A] transition-colors duration-200"
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16A34A]"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Contact Button */}
 <Link href="tel:0505740134">
 <Button
              variant="default"
              className="hidden md:flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full px-6"
            >
              <Phone className="h-4 w-4" />
              <span>{t('common.contact')}</span>
            </Button>
            </Link>
            {/* Language Selector */}
            <LanguageSwitcher />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden hover:bg-gray-100 rounded-full"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t('common.menu')}</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] bg-white/95 backdrop-blur-md"
              >
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-gray-700 hover:text-[#16A34A] transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <hr className="border-gray-200" />
                  <Button 
                    variant="default"
                    className="w-full bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full"
                  >
                    {t('common.contact')}
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
} 