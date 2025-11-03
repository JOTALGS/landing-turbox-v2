'use client';
import { useEffect, useRef, useState } from 'react';
import { Raleway, Open_Sans } from 'next/font/google';

// Google Fonts
const raleway = Raleway({ subsets: ['latin'], weight: ['500','700','900'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400','600'] });

export default function Dolores() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      title: "Costos fijos y comisiones",
      text: "La presión de costos fijos y las altas comisiones de intermediarios reducen tus márgenes y te hacen sensible a caídas de demanda.",
      delay: "delay-300"
    },
    {
      title: "Gestión de la huella digital",
      text: "Tu reputación en línea es hoy el activo principal, pero faltan capacidades de monitoreo y respuesta 24/7.",
      delay: "delay-500"
    },
    {
      title: "Ineficiencia operativa",
      text: "La fragmentación informativa y la gestión manual aumentan el riesgo de overbooking y la presión crónica sobre caja.",
      delay: "delay-700"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gray-800/50 py-20 px-6 anchor-offset" id="dolores">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${raleway.className} font-extrabold text-3xl text-white text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ¿Te reconoces en estas situaciones?
        </h2>

        {/* Video general */}
        <div className={`mt-10 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <video 
            className="w-full rounded-lg shadow-xl border border-gray-700 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300" 
            controls 
            playsInline 
            preload="metadata"
          >
            <source src="/video-general.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {cards.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 ${item.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h3 className={`${raleway.className} font-medium text-xl text-white mb-3`}>{item.title}</h3>
              <p className={`${openSans.className} text-gray-400`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-500 { transition-delay: 500ms; }
        .delay-700 { transition-delay: 700ms; }
      `}</style>
    </section>
  );
}
