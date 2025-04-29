'use client';

import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingButtons() {
  const phoneNumber = '0505740134';
  const whatsappNumber = '966505740134'; // WhatsApp requires country code without '+'

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Link>

      {/* Phone Button */}
      <Link
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </Link>
    </div>
  );
} 