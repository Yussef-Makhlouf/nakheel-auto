"use client"
import { useState } from 'react';
import { t } from '@/lib/i18n';
import { ChevronDown, ChevronUp, HelpCircle, Car, Clock, Wrench, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

interface FAQProps {
  className?: string;
}

export default function FAQ({ className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t: translate, locale } = useTranslation();
  const isRTL = locale === 'ar';

  const faqItems: FAQItem[] = [
    {
      question: translate('faq.questions.1.question'),
      answer: translate('faq.questions.1.answer'),
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      question: translate('faq.questions.2.question'),
      answer: translate('faq.questions.2.answer'),
      icon: <Clock className="w-6 h-6" />,
    },
    {
      question: translate('faq.questions.3.question'),
      answer: translate('faq.questions.3.answer'),
      icon: <Car className="w-6 h-6" />,
    },
    {
      question: translate('faq.questions.4.question'),
      answer: translate('faq.questions.4.answer'),
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('w-full max-w-4xl mx-auto px-4 py-20', className)}>
      <div className={cn("text-center mb-16", isRTL ? "rtl" : "ltr")}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <HelpCircle className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
          {translate('faq.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {translate('faq.subtitle')}
        </p>
      </div>
      
      <div className="grid gap-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              "transition-all duration-300",
              "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800",
              "hover:shadow-xl hover:scale-[1.02]",
              "border border-gray-200 dark:border-gray-700",
              openIndex === index && "shadow-lg scale-[1.02]"
            )}
          >
            <button
              className={cn(
                "w-full px-8 py-6 text-left flex items-center gap-6",
                "transition-all duration-300",
                "hover:bg-gray-50/50 dark:hover:bg-gray-800/50",
                openIndex === index && "bg-gray-50 dark:bg-gray-800/50",
                isRTL ? "flex-row-reverse" : "flex-row"
              )}
              onClick={() => toggleItem(index)}
            >
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                "transition-all duration-300",
                "bg-primary/10",
                "group-hover:bg-primary/20",
                openIndex === index && "bg-primary/20"
              )}>
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className={cn(
                  "text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300",
                  isRTL ? "text-right" : "text-left"
                )}>
                  {item.question}
                </h3>
              </div>
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                "transition-all duration-300",
                "bg-gray-100 dark:bg-gray-800",
                "group-hover:bg-primary/10",
                openIndex === index && "bg-primary/10"
              )}>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
                )}
              </div>
            </button>
            <div
              className={cn(
                "px-8 overflow-hidden transition-all duration-500 ease-in-out",
                openIndex === index ? "max-h-96 py-6" : "max-h-0",
                isRTL ? "rtl" : "ltr"
              )}
            >
              <div className={cn("pl-18", isRTL ? "pr-18 pl-0" : "")}>
                <p className={cn(
                  "text-gray-600 dark:text-gray-300 leading-relaxed",
                  isRTL ? "text-right" : "text-left"
                )}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 