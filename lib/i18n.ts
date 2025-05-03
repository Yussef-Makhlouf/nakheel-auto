import ar from '@/locales/ar.json';
import en from '@/locales/en.json';

export type Locale = 'ar' | 'en';

export const defaultLocale: Locale = 'ar';

export const locales: Locale[] = ['ar', 'en'];

export const localesMap = {
  ar,
  en,
};

export function getTranslation(locale: Locale = defaultLocale) {
  return localesMap[locale];
}

export function t(key: string, locale: Locale = defaultLocale): string {
  const keys = key.split('.');
  let value: any = localesMap[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  return value || key;
}

export function getDirection(locale: Locale = defaultLocale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getFontFamily(locale: Locale = defaultLocale): string {
  return locale === 'ar' ? 'font-tajawal' : 'font-poppins';
} 