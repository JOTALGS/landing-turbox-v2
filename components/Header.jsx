'use client';
import Link from 'next/link';
import { Raleway, Open_Sans } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'], weight: ['500','700','900'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400','600'] });

export default function Header() {
  return (
    <header className="bg-[#11182c]/80 backdrop-blur-sm fixed w-full z-50 top-0 border-b border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center" aria-label="Principal">
        <a href="#" className={`inline-flex items-center gap-2 ${raleway.className}`} aria-label="Turbox Go - inicio">
          <img 
            src="/LOGO-TURBOX-VERTICAL-blanco 2-Copy.png" 
            alt="Logo Turbox Go" 
            width="180" 
            height="50" 
            decoding="async" 
            loading="eager" 
            className="h-[35px] w-auto" 
          />
        </a>
        <div className="flex items-center gap-4">
          <a href="#precios" className={`${openSans.className} text-sm font-medium text-gray-300 hover:text-white transition-colors`}>
            Precios
          </a>
          <a href="#faq" className={`${openSans.className} text-sm font-medium text-gray-300 hover:text-white transition-colors`}>
            FAQs
          </a>
          <a href="#signup" className={`${openSans.className} hidden sm:inline-block bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors shadow-lg`}>
            Empezar gratis
          </a>
        </div>
      </nav>
    </header>
  );
}
