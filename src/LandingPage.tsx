import { useRef, useEffect } from "react";

const clientes = [
  { nome: "Cícero Bomboniere", imagem: "/clientes/cicero.jpg" },
  { nome: "Supermercado Ideal", imagem: "/clientes/ideal.jpg" },
  { nome: "Judson Gás", imagem: "/clientes/judson.jpg" },
];

export default function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });

        if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 bg-black shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <img src="/clientes/logo.png" alt="G Sistemas" className="h-20 w-auto"/>
          <a href="https://wa.me/5581991896370" target="_blank" rel="noopener noreferrer">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded">
              Fale Conosco
            </button>
          </a>
        </div>
      </header>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">Software de Gestão Empresarial</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Soluções completas para o seu negócio: PDV, controle de estoque, emissão de notas fiscais NFC-e, desenvolvimento de sistemas e aplicativos.
        </p>
      </section>

      <section className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { emoji: "🛒", title: "PDV Rápido e Seguro", desc: "Venda com agilidade e segurança. Integração com impressoras fiscais." },
            { emoji: "📦", title: "Controle de Estoque", desc: "Gerencie entradas, saídas e estoque mínimo de forma automatizada." },
            { emoji: "🧾", title: "Emissão de NFC-e", desc: "Emita notas fiscais com validade jurídica direto do sistema." },
            { emoji: "📞", title: "Suporte Personalizado", desc: "Atendimento rápido pelo WhatsApp com equipe técnica especializada." },
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 text-white border border-gray-700 p-6 text-center rounded-lg shadow">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 py-16 px-4 text-center">
        <div className="text-4xl mb-4 text-orange-500">🌐</div>
        <h3 className="text-3xl font-bold mb-2">Desenvolvimento de Sistemas e Aplicativos</h3>
        <p className="max-w-xl mx-auto text-gray-300">
          Criamos soluções personalizadas sob medida para o seu negócio, com tecnologias modernas, tanto web quanto mobile.
        </p>
      </section>

      <section className="bg-black text-center py-16 px-4">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">Atendemos Diversos Segmentos</h3>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Mercados, Padarias, Restaurantes, Pizzarias, Farmácias, Lojas de Roupas e muito mais!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {["Mercado", "Padaria", "Restaurante", "Pizzaria", "Farmácia", "Loja de Roupas"].map((seg, index) => (
            <span key={index} className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-orange-500">
              {seg}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-black text-center py-16 px-4">
        <div className="text-4xl text-orange-500 mb-4">👥</div>
        <h3 className="text-3xl font-bold mb-6">Nossos Clientes</h3>

        <div className="relative w-full max-w-4xl mx-auto">
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-black px-2 py-1 rounded-l">◀</button>
          <div ref={carouselRef} className="flex overflow-x-auto no-scrollbar space-x-6 px-10">
            {clientes.concat(clientes).map((cliente, index) => (
              <div key={index} className="min-w-[250px] bg-gray-800 p-4 rounded-lg border border-gray-700 flex flex-col items-center">
                <img src={cliente.imagem} alt={cliente.nome} className="w-28 h-28 rounded-full object-cover border-4 border-orange-500 mb-4 shadow-md" />
                <p className="text-orange-400 font-semibold">{cliente.nome}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-black px-2 py-1 rounded-r">▶</button>
        </div>
      </section>

      <section className="bg-orange-500 text-black text-center py-12 px-4">
        <h3 className="text-2xl font-bold mb-2">Pronto para evoluir sua empresa?</h3>
        <p className="mb-4">Entre em contato e conheça nossos planos!</p>
        <a href="https://wa.me/5581991896370" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">Falar no WhatsApp</button>
        </a>
      </section>

      <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} G Sistemas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
