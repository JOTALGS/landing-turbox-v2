'use client';
import { useEffect, useRef, useState } from 'react';
import { Manrope, Carrois_Gothic } from 'next/font/google';

// Google Fonts - valid Manrope weights (up to 800) and Carrois Gothic (400)
const manrope = Manrope({ subsets: ['latin'], weight: ['500','700','800'], display: 'swap' });
const carroisGothic = Carrois_Gothic({ subsets: ['latin'], weight: ['400'], display: 'swap' });

export default function ComoFunciona() {
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

  const steps = [
    {
      number: "1.",
      title: "Publica tu web",
      subtitle: "Plantillas móviles + dominio propio",
      description: "Carga fotos, precios y políticas. Tu marca primero. Con nuestro constructor web tomas control de tu huella digital y activas tu venta directa.",
      demoPoster: "https://placehold.co/1280x720/png?text=Demo+Constructor+web",
      videoSrcMp4: "/01-constructor-web.mp4",
      videoSrcWebm: "/01-TrurboxGo-Constructor-web.webm",
      list: [
        "Reduce la presión de costos fijos evitando comisiones.",
        "Construye un activo propio sin depender de terceros."
      ]
    },
    {
      number: "2.",
      title: "Activa reservas",
      subtitle: "Cupos, horarios y calendario único",
      description: "Bloqueos por fecha, confirmación automática y recordatorios. Nuestro sistema de reservas te da la gestión operativa que necesitas.",
      demoPoster: "https://placehold.co/1280x720/png?text=Demo+Reservas+y+pagos",
      videoSrcMp4: "/02-agenda.mp4",
      videoSrcWebm: "/02-TurboxGo-Reservas-y-pagos.webm",
      list: [
        "Sincronización en tiempo real para evitar sobreventa.",
        "Automatiza tareas y reduce la presión crónica sobre caja."
      ]
    },
    {
      number: "3.",
      title: "Atiende con IA",
      subtitle: "Chatbot 24/7 que convierte",
      description: "Responde preguntas frecuentes, muestra tarifas y deriva a WhatsApp cuando hace falta. Nuestro chatbot inteligente utiliza IA para potenciar una personalización rentable.",
      demoPoster: "https://placehold.co/1280x720/png?text=Demo+Chatbot+IA",
      videoSrcMp4: "/03-chatbot.mp4",
      videoSrcWebm: "/03-TurboxGo-Chatbot-IA.webm",
      list: [
        "Capacidades de monitoreo y respuesta permanentes.",
        "Capitaliza tu ventaja PyME con atención 24/7."
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6" id="como-funciona">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className={`${manrope.className} font-semibold text-sm uppercase text-blue-400 tracking-wider`}>Cómo funciona</span>
          <h2 className={`${manrope.className} font-extrabold text-3xl md:text-4xl text-white mt-3`}>Tres pasos para vender directo</h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + idx * 200}ms` }}
            >
              <span className={`${manrope.className} font-extrabold text-6xl text-blue-500 inline-block hover:scale-110 transition-transform duration-300`}>
                {step.number}
              </span>
              <h3 className={`${manrope.className} font-medium text-2xl text-white mt-5`}>{step.title}</h3>
              <p className={`${carroisGothic.className} mt-2 text-gray-300`}>{step.subtitle}</p>
              <video
                className="w-full rounded-lg shadow-lg border border-gray-600 mt-5 mb-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                controls
                playsInline
                preload="metadata"
              >
                <source src={step.videoSrcMp4} type="video/mp4" />
              </video>
              <p className={`${carroisGothic.className} mt-5 text-gray-400`}>{step.description}</p>
              <ul className={`${carroisGothic.className} mt-5 space-y-2 list-disc list-inside text-gray-400`}>
                {step.list.map((item, i) => (
                  <li key={i} className="hover:text-gray-300 transition-colors duration-200">{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <p className={`${manrope.className} font-medium text-lg text-blue-400`}>Mira la demo</p>
                <video
                  className="w-full rounded-lg shadow-lg border border-gray-600 mt-3 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={step.videoSrcWebm} type="video/webm" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
