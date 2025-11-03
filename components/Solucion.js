'use client';
import { useEffect, useRef, useState } from 'react';
import { Open_Sans } from 'next/font/google';

// Google Fonts
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400','600'] });

export default function SolutionIntro() {
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

  return (
    <section ref={sectionRef} className="py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div 
          role="group" 
          aria-label="Video institucional Turbox Go" 
          className={`mt-2 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <video 
            className="w-full rounded-xl shadow-xl border border-gray-700 mx-auto hover:shadow-2xl hover:scale-[1.02] transition-all duration-500" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="metadata"
          >
            <source src="logo-animado.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
        <p className={`mt-4 text-lg text-gray-300 transition-all duration-700 delay-300 ${openSans.className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Turbox Go ofrece tres herramientas clave para construir autonomía y cumplir objetivos desde el primer mes.
        </p>
      </div>

      <style jsx>{`
        .delay-300 {
          transition-delay: 300ms;
        }
      `}</style>
    </section>
  );
}