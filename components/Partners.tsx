import React from 'react';

// LISTA DE PARCEIROS COM URLs DO SUPABASE
const partners = [
  { 
    name: "Cechinel", 
    logo: "https://dnlpwxuxgotwxnjzdkmk.supabase.co/storage/v1/object/public/portfolio-assets/logos/cechinel.png"
  },
  { 
    name: "Ciaplan", 
    logo: "https://dnlpwxuxgotwxnjzdkmk.supabase.co/storage/v1/object/public/portfolio-assets/logos/ciaplan.png" 
  },
  { 
    name: "Mendes Sibara", 
    logo: "https://dnlpwxuxgotwxnjzdkmk.supabase.co/storage/v1/object/public/portfolio-assets/logos/mendessibara.png" 
  },
  { 
    name: "Rosecon", 
    logo: "https://dnlpwxuxgotwxnjzdkmk.supabase.co/storage/v1/object/public/portfolio-assets/logos/rosecon.png" 
  },
  { 
    name: "Brava Beach", 
    logo: "https://dnlpwxuxgotwxnjzdkmk.supabase.co/storage/v1/object/public/portfolio-assets/logos/bravabeach.png" 
  },
  { 
    name: "Axia", 
    logo: "https://dnlpwxuxgotwxnjzdkmk.supabase.co/storage/v1/object/public/portfolio-assets/logos/axia.png" 
  },
];

const Partners = () => {
  return (
    <section className="bg-[#050505] py-10 border-b border-white/5 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <p className="text-[#C6A87C] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-12 opacity-70">
          Parceiros & Construtoras
        </p>
      </div>
      
      {/* Slider Infinito */}
      <div className="relative w-full flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* Renderiza 4x para garantir loop sem buracos */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-14 flex items-center justify-center min-w-[120px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                loading="lazy"
                onError={(e) => {
                  // Fallback: Se a imagem falhar, ocultamos o elemento pai (o div wrapper)
                  // para não ficar um espaço vazio no slider.
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.display = 'none';
                  }
                }}
                className="h-16 md:h-20 w-auto object-contain 
                  grayscale opacity-40 
                  hover:opacity-100 
                  transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Estilos da Animação Otimizada */}
      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          display: flex;
          animation: scroll 40s linear infinite;
          width: fit-content;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Partners;