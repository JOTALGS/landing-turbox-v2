import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Dolores from '../components/Dolores';
import ComoFunciona from '../components/ComoFunciona';
import Precios from '../components/Precios';
import CTAFinal from '../components/CTAFinal';
import Footer from '../components/Footer';
import MobileCTA from '../components/MobileCTA';
import Solucion from '../components/Solucion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Turbox Go — Rentabilidad y control para emprendedores turísticos</title>
        <meta name="description" content="Web + Reservas + Chatbot en minutos. Primer mes gratis. Sin tarjeta. Turbox Go te ayuda a vender directo, reducir comisiones y..." />
      </Head>

      <Header />
      <main className="bg-gray-900 text-white">
        <Hero />
        <Dolores />
        <Solucion />
        <ComoFunciona />
        <Precios />
        <CTAFinal />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
