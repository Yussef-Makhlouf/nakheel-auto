'use client';

import { useParams } from 'next/navigation';
import { t } from '@/lib/i18n';
import { Locale } from '@/lib/i18n';

export function useTranslation() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'ar';

  const translate = (key: string) => t(key, locale);

  return {
    t: translate,
    locale,
  };
} 