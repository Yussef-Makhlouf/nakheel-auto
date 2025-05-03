'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, User, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useTranslation } from '@/hooks/useTranslation'

export function Contact() {
  const { t } = useTranslation()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert(t('common.success'))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-bg opacity-30" />

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute top-0 w-full h-full transform rotate-180"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary-800 opacity-5"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('contact.description')}
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-accent-400 to-secondary-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Card - 2 cols */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[#0a2f5d] from-primary-700 to-primary-800 rounded-3xl p-8 h-full shadow-xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 h-32 w-32 bg-primary-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 h-40 w-40 bg-secondary-400/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 pattern-bg opacity-5"></div>

              <div className="relative z-10 ">
                <h3 className="text-2xl font-bold text-white mb-8">{t('contact.info.title')}</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 rounded-full p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-400 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-bold mb-1">{t('contact.info.address')}</h4>
                      <p className="text-white/80">  {t('contact.info.addressValue')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 rounded-full p-3 flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent-400" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-bold mb-1">{t('contact.info.phone')}</h4>
                      <p className="text-white/80"> 0505740134</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 rounded-full p-3 flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent-400 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-bold mb-1">{t('contact.info.email')}</h4>
                      <p className="text-white/80">alqumrah@alqumrah.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 rounded-full p-3 flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent-400 text-white" />
                    </div>
                    <div className="text-white">
                      <h4 className="font-bold mb-1">{t('contact.info.workingHours')}</h4>
                      <p className="text-white/80">{t('contact.info.workingHoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 cols */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-700 mb-8">{t('contact.form.title')}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">{t('contact.form.name')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        type="text" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.name')}
                        className="pr-10 bg-gray-50 border-gray-200 rounded-xl focus:border-primary-500" 
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 block">{t('contact.form.phone')}</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input 
                        type="tel" 
                        name="phone" 
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phone')}
                        className="pr-10 bg-gray-50 border-gray-200 rounded-xl focus:border-primary-500" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">{t('contact.form.email')}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input 
                      type="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.email')}
                      className="pr-10 bg-gray-50 border-gray-200 rounded-xl focus:border-primary-500" 
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 block">{t('contact.form.message')}</label>
                  <div className="relative">
                    <div className="absolute top-3 right-3 pointer-events-none">
                      <MessageCircle className="h-5 w-5 text-gray-400" />
                    </div>
                    <Textarea 
                      name="message" 
                      value={formState.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.message')}
                      className="pr-10 bg-gray-50 border-gray-200 rounded-xl h-40 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#0a2f5d] hover:from-primary-700 hover:to-primary-800  text-white py-6 h-auto rounded-xl"
                >
                  <Send className="h-5 w-5 ml-2" />
                  <span>{t('contact.form.submit')}</span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden shadow-xl h-[400px] border border-gray-200"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.258132268922!2d39.247901!3d21.536759699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d3003720dcaf%3A0x5e57f3e4012ac327!2z2YXYrNmF2Lkg2KfZhNmG2K7ZitmEINin2YTYtNin2YXZhCDZhNi12YrYp9mG2Kkg2KfZhNiz2YrYp9ix2KfYqg!5e0!3m2!1sar!2seg!4v1746266864268!5m2!1sar!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
} 