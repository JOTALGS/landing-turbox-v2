'use client';
import { useState } from 'react';
import { Raleway, Open_Sans } from 'next/font/google';

// ✅ Valid font weights (removed 900)
const raleway = Raleway({ subsets: ['latin'], weight: ['500', '700', '800'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export default function Footer() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const faqs = [
    {
      q: "¿Qué incluye la prueba gratis?",
      a: "Acceso completo a Web Builder, Chatbot 24/7 y Sistema de Reservas por 14 días. Sin tarjeta para empezar. Puedes cancelar cuando quieras."
    },
    {
      q: "¿Puedo usar mi dominio y WhatsApp?",
      a: "Sí. Conectas tu dominio propio en minutos y habilitas handoff a WhatsApp desde el chatbot (conservas tu número)."
    },
    {
      q: "¿Cómo evito la sobreventa?",
      a: "Con calendario único, cupos por horario/fecha, bloqueo de fechas y confirmación automática. Puedes sumar recordatorios para reducir no-shows."
    },
    {
      q: "¿Cuánto tiempo me lleva publicar mi web?",
      a: "Entre 15 y 60 minutos si ya tienes fotos, precios y políticas. Eliges plantilla, cargas fichas y listo."
    },
    {
      q: "¿El chatbot puede responder precios y derivar a reserva?",
      a: 'Sí. Maneja preguntas frecuentes, muestra tarifas, calcula totales simples y dirige a "Reservar ahora" o WhatsApp.'
    },
    {
      q: "¿Puedo ofrecer cupones o descuentos?",
      a: "Sí. Puedes crear cupones por porcentaje o monto fijo y aplicarlos por fecha o campaña."
    },
    {
      q: "¿Necesito conocimientos técnicos?",
      a: "No. Es drag-and-drop con plantillas mobile-first y campos guiados (fotos, descripciones, políticas)."
    },
    {
      q: "¿Cómo manejo políticas de cancelación?",
      a: "Defines tu política en cada producto o servicio. Se muestra en la ficha y en la confirmación para reducir dudas y disputas."
    },
    {
      q: "¿Cumple con privacidad y RGPD?",
      a: "Sí. El formulario y el chatbot incluyen consentimiento y puedes configurar avisos legales y política de privacidad."
    },
    {
      q: "¿Qué soporte tengo durante la prueba?",
      a: "Acceso a guías, chat de ayuda y ejemplos. Si lo necesitas, hacemos un onboarding exprés (agenda desde la demo)."
    }
  ];

  return (
    <footer id="faq" className="bg-gray-800 text-gray-400 py-16 px-6 anchor-offset">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* FAQs */}
        <div className="lg:col-span-2">
          <h3 className={`${raleway.className} text-xl font-semibold text-white mb-6`}>
            10 preguntas frecuentes
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700/80"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className={`${openSans.className} w-full p-5 cursor-pointer font-medium text-white flex justify-between items-center text-left`}
                >
                  {faq.q}
                  <span className={`text-2xl text-blue-400 transition-transform duration-300 ${openFAQ === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openFAQ === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className={`${openSans.className} p-5 border-t border-gray-600 text-gray-300`}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sobre nosotros & Legal */}
        <div className="space-y-10">
          <div className="animate-fade-in">
            <h3 className={`${raleway.className} text-xl font-semibold text-white mb-4`}>
              Sobre nosotros
            </h3>
            <p className={`${openSans.className} text-sm`}>
              Turbox Go es un desarrollo de Next Smart Solutions, empresa especializada en diseñar y desplegar soluciones tecnológicas para turismo. Con presencia regional, integramos IA, RA/RV, geolocalización y plataformas SaaS para transformar destinos y experiencias. Creamos rutas autoguiadas inmersivas, asistentes inteligentes, sistemas de gestión para MiPyMEs, storytelling digital y soluciones adaptadas a distintos territorios. También aportamos experiencia en formación, planes y proyectos público-privados con foco en sostenibilidad, inclusión y escalabilidad.
            </p>
            <a href="https://nextsmart.solutions/" target="_blank" rel="noopener noreferrer" className={`${openSans.className} text-sm text-blue-400 hover:text-blue-300 mt-2 inline-block transition-colors duration-200`}>
              nextsmart.solutions
            </a>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className={`${raleway.className} text-xl font-semibold text-white mb-4`}>
              Estamos aquí para escucharte
            </h3>
            <p className={`${openSans.className} text-sm`}>Si tienes consultas o dudas, escríbenos:</p>
            <a href="mailto:info@turboxgo.com" className={`${openSans.className} text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200`}>
              info@turboxgo.com
            </a>
          </div>

          {/* Legal Section */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className={`${raleway.className} text-xl font-semibold text-white mb-4`}>
              Legal
            </h3>
            <div className="space-y-4">

              {/* Términos de servicio */}
              <div className="bg-gray-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700/80">
                <button
                  onClick={() => setOpenTerms(!openTerms)}
                  className={`${openSans.className} w-full p-4 font-medium text-gray-200 cursor-pointer text-left text-sm flex justify-between items-center`}
                >
                  Términos de servicio
                  <span className={`text-xl text-blue-400 transition-transform duration-300 ${openTerms ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openTerms ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className={`${openSans.className} p-4 text-xs opacity-80 space-y-2 border-t border-gray-600`}>
                      <p>Al usar este sitio aceptas estos Términos. Si no estás de acuerdo, por favor no lo utilices.</p>
                      <p><strong>Uso del sitio:</strong> El contenido se ofrece con fines informativos y comerciales. Se prohíbe la reproducción y/o extracción automatizada de datos sin autorización.</p>
                      <p><strong>Propiedad intelectual:</strong> Los contenidos del sitio (textos, imágenes, logotipos, software) pertenecen a Turbox Go o se usan bajo licencia.</p>
                      <p><strong>Responsabilidad del usuario:</strong> Brindar información veraz y no realizar acciones que dañen o sobrecarguen el sitio.</p>
                      <p><strong>Limitación de responsabilidad:</strong> Turbox Go no responde por interrupciones, errores, daños derivados del uso del sitio ni por contenidos de terceros.</p>
                      <p><strong>Cambios:</strong> Podemos actualizar estos Términos. La versión vigente se publica en esta página.</p>
                      <p><strong>Jurisdicción:</strong> Leyes de la República Oriental del Uruguay. Tribunales de Montevideo.</p>
                      <p><strong>Contacto:</strong> legal@turboxgo.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Política de privacidad */}
              <div className="bg-gray-700/50 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-700/80">
                <button
                  onClick={() => setOpenPrivacy(!openPrivacy)}
                  className={`${openSans.className} w-full p-4 font-medium text-gray-200 cursor-pointer text-left text-sm flex justify-between items-center`}
                >
                  Política de privacidad
                  <span className={`text-xl text-blue-400 transition-transform duration-300 ${openPrivacy ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openPrivacy ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className={`${openSans.className} p-4 text-xs opacity-80 space-y-2 border-t border-gray-600`}>
                      <p><strong>Responsable:</strong> Next Smart Solutions (Subito Red Desarrollos SRL), Porongos 2877, Montevideo, Uruguay. info@nextsmart.solutions • +598 97199059</p>
                      <p><strong>Datos:</strong> contacto (nombre, email, teléfono), navegación (IP, dispositivo), información de formularios.</p>
                      <p><strong>Finalidades:</strong> prestar y personalizar servicios; gestionar consultas; analítica; comunicaciones comerciales con consentimiento.</p>
                      <p><strong>Base legal:</strong> consentimiento, ejecución contractual, interés legítimo.</p>
                      <p><strong>Conservación:</strong> por el tiempo necesario o según normativa.</p>
                      <p><strong>Derechos:</strong> acceso, rectificación, supresión, oposición, limitación y portabilidad. Contacto: privacy@turboxgo.com.</p>
                      <p><strong>Transferencias:</strong> cuando corresponda, con garantías adecuadas (p. ej., RGPD).</p>
                      <p><strong>Cookies:</strong> este sitio usa cookies. Ver Política de Cookies.</p>
                      <p><strong>Seguridad:</strong> medidas técnicas y organizativas para proteger los datos.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8 text-center">
        <img 
          src="/LOGO-TURBOX-VERTICAL-blanco-2.png" 
          alt="Logo Turbox Go" 
          width="180" 
          height="80" 
          decoding="async" 
          loading="lazy" 
          className="h-[100px] w-auto mx-auto mb-4 opacity-80 hover:opacity-100 transition-opacity duration-300" 
        />
        <p className={`${openSans.className} text-sm`}>© 2025 Turbox Go. Todos los derechos reservados.</p>
        <a href="https://nextsmart.solutions/" target="_blank" rel="noopener noreferrer" className={`${openSans.className} text-sm text-blue-500 hover:text-blue-400 mt-1 inline-block transition-colors duration-200`}>
          nextsmart.solutions
        </a>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
      `}</style>
    </footer>
  );
}
