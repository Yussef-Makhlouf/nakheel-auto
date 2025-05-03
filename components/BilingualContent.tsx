'use client';

import { useTranslation } from '@/hooks/useTranslation';

interface BilingualContentProps {
  arContent: string;
  enContent: string;
}

export function BilingualContent({ arContent, enContent }: BilingualContentProps) {
  const { locale } = useTranslation();

  return (
    <div className="text-base">
      {locale === 'ar' ? arContent : enContent}
    </div>
  );
} 