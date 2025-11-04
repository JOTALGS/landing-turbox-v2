'use client';
import { useEffect, useRef, useState } from 'react';
import { Manrope, Carrois_Gothic } from 'next/font/google';

// Google Fonts - valid Manrope weights (up to 800) and Carrois Gothic (400)
const manrope = Manrope({ subsets: ['latin'], weight: ['500','700','800'], display: 'swap' });
const carroisGothic = Carrois_Gothic({ subsets: ['latin'], weight: ['400'], display: 'swap' });

export default function Precios() {
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

  const features = [
    "Sitio web con dominio",
    "Calendario y cupos ilimitados",
    "Chatbot 24/7",
    "Soporte y guía de publicación"
  ];

  return (
    <section ref={sectionRef} id="precios" className="bg-gray-950 py-20 px-6 anchor-offset">
      <div className={`max-w-md mx-auto bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <h2 className={`${manrope.className} font-extrabold text-2xl text-white text-center`}>
          Plan simple para empezar
        </h2>
        <p className={`${carroisGothic.className} text-gray-400 text-center mt-2 mb-6`}>
          Todo incluido: Web + Reservas + Chatbot. Sin costos ocultos.
        </p>

        <div className="text-center my-6">
          <p className={`${manrope.className} text-5xl font-extrabold text-white animate-bounce-subtle`}>Primer mes gratis</p>
          <p className={`${carroisGothic.className} text-gray-400 mt-2`}>Luego, <span className={`${carroisGothic.className} font-semibold`}>USD 30</span> / mes</p>
        </div>

        <ul className="space-y-3 my-8">
          {features.map((feature, idx) => (
            <li 
              key={idx} 
              className={`flex items-center transition-all duration-500 hover:translate-x-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              <span className={`${carroisGothic.className}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col space-y-4">
          <a href="https://turboxgo.com/waitlist" target="_blank" rel="noopener" className={`${carroisGothic.className} font-semibold w-full bg-blue-600 text-white text-base px-8 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center`}>
            Crear cuenta
          </a>
          <a href="https://wa.me/0000000000?text=Quiero%20hablar%20con%20un%20asesor%20de%20Turbox%20Go" target="_blank" rel="noopener" className={`${carroisGothic.className} font-semibold w-full bg-gray-700 text-white text-base px-8 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 text-center`}>
            Hablar con un asesor
          </a>
        </div>

        <p className={`${carroisGothic.className} text-xs text-gray-500 mt-4 text-center`}>
          * Impuestos locales (IVA/IGV, etc.) no incluidos. Puedes cancelar cuando quieras.
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
