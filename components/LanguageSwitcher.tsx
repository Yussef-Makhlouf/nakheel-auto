'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { Locale, t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] as Locale;

  const handleLocaleChange = (locale: Locale) => {
    const newPath = pathname.replace(/^\/(ar|en)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={cn(
            "relative hover:bg-accent hover:text-accent-foreground",
            "bg-white text-black rounded-full",
            "transition-all duration-200 ease-in-out",
            "focus:ring-2 focus:ring-offset-2 focus:ring-primary",
            "active:scale-95"
          )}
          aria-label={t('switchLanguage')}
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={cn(
          "w-40 p-1",
          "bg-white dark:bg-gray-800",
          "border border-gray-200 dark:border-gray-700",
          "rounded-lg shadow-lg"
        )}
      >
        <DropdownMenuItem 
          onClick={() => handleLocaleChange('ar')}
          className={cn(
            "flex items-center justify-between px-3 py-2",
            "rounded-md transition-colors duration-200",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "cursor-pointer",
            currentLocale === 'ar' && "bg-accent text-accent-foreground"
          )}
        >
          <span className="font-medium">العربية</span>
          {currentLocale === 'ar' && (
            <span className="text-primary-500 dark:text-primary-400">✓</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLocaleChange('en')}
          className={cn(
            "flex items-center justify-between px-3 py-2",
            "rounded-md transition-colors duration-200",
            "hover:bg-gray-100 dark:hover:bg-gray-700",
            "cursor-pointer",
            currentLocale === 'en' && "bg-accent text-accent-foreground"
          )}
        >
          <span className="font-medium">English</span>
          {currentLocale === 'en' && (
            <span className="text-primary-500 dark:text-primary-400">✓</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 