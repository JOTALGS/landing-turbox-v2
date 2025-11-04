'use client';
import { useEffect, useRef, useState } from 'react';
import { Manrope, Carrois_Gothic } from 'next/font/google';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Google Fonts
const manrope = Manrope({ subsets: ['latin'], weight: ['500','700'] });
const carroisGothic = Carrois_Gothic({ subsets: ['latin'], weight: ['400'] });

gsap.registerPlugin(ScrollTrigger);

export default function Dolores() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

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

  // GSAP ScrollTrigger: escala el video según scroll
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    // asegúrate de resetear transform inicialmente
    gsap.set(vid, { scale: 1, transformOrigin: 'center center' });

    const tween = gsap.to(vid, {
      scale: 1.2, // factor de agrandamiento final (ajusta si quieres más/menos)
      ease: 'none',
      scrollTrigger: {
        trigger: vid,
        start: 'top 80%',                 // cuando el top del video llega al 50% del viewport
        end: 'bottom 60%',        // hasta que el bottom del video toque bottom + 10% del viewport
        scrub: true,                      // sincroniza con el scroll
        // markers: true,                 // descomenta para depurar los puntos start/end
      }
    });

    return () => {
      // limpieza segura
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [isVisible]); // espera a que la sección sea visible (opcional), pero puedes quitar isVisible si quieres siempre

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
        <h2 className={`${manrope.className} font-extrabold text-3xl text-white text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ¿Te reconoces en estas situaciones?
        </h2>

        {/* Video general */}
        <div className={`mt-10 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <video 
            ref={videoRef}
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
              <h3 className={`${manrope.className} font-medium text-xl text-white mb-3`}>{item.title}</h3>
              <p className={`${carroisGothic.className} text-gray-400`}>{item.text}</p>
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
