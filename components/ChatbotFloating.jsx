'use client';
import { useState, useEffect } from 'react';

export default function ChatbotFloating() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Botón flotante Chatbot Turbox Go con animación de pulso */}
      <button 
        id="tg-fab" 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[60] right-4 bottom-24 sm:bottom-6 sm:right-6 rounded-full p-3 sm:p-4 shadow-2xl bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-[#11182c] transition-all duration-300 hover:scale-110 animate-bounce-slow" 
        aria-controls="tg-chat" 
        aria-expanded={isOpen} 
        aria-label="Abrir chatbot Turbox Go"
      >
        {/* Efecto de pulso de onda */}
        <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></span>
        <img src="/chatbot-icon.svg" alt="" className="w-7 h-7 sm:w-8 sm:h-8 pointer-events-none relative z-10" />
      </button>

      {/* Panel del chatbot con animación de entrada */}
      <div 
        id="tg-chat" 
        className={`fixed z-[60] right-4 bottom-44 sm:bottom-24 sm:right-6 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="w-[92vw] max-w-[380px] h-[65vh] max-h-[560px] bg-[#11182c]/95 backdrop-blur border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gradient-to-r from-blue-600/10 to-transparent">
            <div className="flex items-center gap-2 animate-fade-in">
              <img src="/LOGO TURBOX VERTICAL - griss.png" alt="Turbox Go" className="h-6 w-auto opacity-90" />
              <p className="text-sm font-semibold text-white">Chatbot Turbox Go</p>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>
            <button 
              id="tg-close"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 hover:rotate-90" 
              aria-label="Cerrar chatbot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300">
                <path d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12l-5.775 5.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 1 0-1.414-1.414L12 10.586 6.225 4.811Z"/>
              </svg>
            </button>
          </div>
          {/* Cuerpo */}
          <div className="h-full max-h-[calc(65vh-56px)] p-4 text-sm text-gray-300 overflow-auto">
            <div className="animate-slide-in-up">
              <p className="mb-3 bg-gray-800/50 p-3 rounded-lg border-l-4 border-blue-500">
                Hola, soy el asistente de Turbox Go. Puedo responder preguntas sobre Web Builder, Reservas y Chatbot.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2 animate-slide-in-up animation-delay-200">
              {[
                "Cómo publicar la web",
                "Configurar calendario y pagos",
                "Conectar WhatsApp"
              ].map((item, idx) => (
                <li 
                  key={idx}
                  className="hover:text-gray-300 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/0000000000?text=Hola%20Turbox%20Go%20%E2%80%94%20quiero%20probar%20el%20chatbot" 
              target="_blank" 
              rel="noopener" 
              className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-in-up animation-delay-400"
            >
              Hablemos por WhatsApp
            </a>
            <p className="mt-3 text-xs text-gray-500 animate-fade-in animation-delay-600">
              Integración embebida disponible. Solicita acceso en la demo.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out forwards;
          opacity: 0;
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
      `}</style>
    </>
  );
}