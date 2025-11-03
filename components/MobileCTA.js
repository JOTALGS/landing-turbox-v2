export default function MobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#11182c]/90 backdrop-blur border-t border-gray-700 flex items-center gap-3 px-4 py-3">
      <a href="#precios" className="flex-1 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">
        Empezar gratis
      </a>
      <a href="https://wa.me/0000000000?text=Quiero%20ver%20una%20demo%20de%20Turbox%20Go" target="_blank" rel="noopener" className="flex-1 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">
        Demo WhatsApp
      </a>
    </div>
  );
}