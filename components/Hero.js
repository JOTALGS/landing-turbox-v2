'use client';
import { Raleway, Open_Sans } from 'next/font/google';

// Google Fonts
const raleway = Raleway({ 
  subsets: ['latin'], 
  weight: ['500','700','900'] 
});
const openSans = Open_Sans({ 
  subsets: ['latin'], 
  weight: ['400','600'] 
});

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#50618f] rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#11182c] rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className={`${raleway.className} font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white animate-fade-in-up`}>
          De la vulnerabilidad financiera a la rentabilidad con control
        </h1>
        <p className={`${raleway.className} mt-4 text-xl md:text-2xl text-gray-200 animate-fade-in-up animation-delay-200`}>
          Sitio web, sistema de reservas y chatbot inteligente integrados para emprendedores turísticos de Latinoamérica.
        </p>
        <p className={`${openSans.className} mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-200`}>
          Publica hoy. Cobra directo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-400">
          <a 
            id="signup" 
            href="#precios" 
            className="w-full sm:w-auto bg-blue-600 text-white text-base font-semibold px-8 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl"
          >
            Empezar gratis
          </a>
          <a 
            href="https://wa.me/0000000000?text=Quiero%20ver%20una%20demo%20de%20Turbox%20Go" 
            target="_blank" 
            rel="noopener" 
            className="w-full sm:w-auto bg-green-500 text-white text-base font-semibold px-8 py-3 rounded-lg hover:bg-green-400 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2" 
            aria-label="Ver demo por WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="animate-pulse">
              <path d="M12.04 2C6.57 2 2.13 6.44 2.13 11.91c0 2.08.64 4.02 1.74 5.62L2 22l4.63-1.79a9.9 9.9 0 0 0 5.41 1.6h.01c5.47 0 9.91-4.44 9.91-9.91C21.96 6.44 17.51 2 12.04 2Zm5.77 14.1c-.24.67-1.18 1.09-1.87 1.23-.5.1-1.14.17-3.3-.69-2.77-1.15-4.55-3.96-4.69-4.15-.13-.18-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.24-.28.62-.41 1-.41.12 0 .23 0 .33.01.29.01.44.03.64.49.24.58.82 1.99.89 2.13.07.15.12.33.02.52-.1.2-.16.32-.32.5-.16.17-.34.38-.48.51-.16.16-.32.33-.14.64.19.32.85 1.39 1.83 2.25 1.26 1.08 2.33 1.41 2.7 1.56.28.12.6.09.8-.14.25-.28.57-.74.9-1.19.23-.33.52-.37.82-.25.31.13 1.95.92 2.29 1.09.33.17.55.25.64.39.1.15.1.84-.14 1.51Z"/>
            </svg>
            Ver demo por WhatsApp
          </a>
        </div>
        <p className={`${openSans.className} mt-3 text-sm text-gray-400 animate-fade-in-up animation-delay-600`}>Sin tarjeta • Puedes cancelar cuando quieras</p>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
