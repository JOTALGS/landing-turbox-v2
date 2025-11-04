'use client';
import { useEffect, useRef, useState } from 'react';
import { Manrope, Carrois_Gothic } from 'next/font/google';

// Google Fonts
const manrope = Manrope({ subsets: ['latin'], weight: ['500', '700', '800'], display: 'swap' });
const carroisGothic = Carrois_Gothic({ subsets: ['latin'], weight: ['400'], display: 'swap' });

export default function CTAFinal() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#43517b] text-center relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2
          className={`${manrope.className} font-extrabold text-3xl text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Para tu emprendimiento la tecnología no es un lujo: es tu ventaja
        </h2>
        <a
          href="#precios"
          className={`${carroisGothic.className} font-semibold mt-8 inline-block bg-blue-700/80 text-white text-base px-8 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Prueba Turbox Go y recupera tu autonomía
        </a>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
