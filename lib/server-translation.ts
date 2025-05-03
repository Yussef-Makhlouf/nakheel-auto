import { t } from './i18n';
import { Locale } from './i18n';

export function getServerTranslation(locale: Locale) {
  return {
    t: (key: string) => t(key, locale),
  };
} 