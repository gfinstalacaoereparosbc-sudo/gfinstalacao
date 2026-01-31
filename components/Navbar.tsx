import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detecta rolagem para mudar a cor do fundo do menu
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função inteligente para rolar até a seção descontando a altura do menu fixo
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Impede o pulo seco padrão do navegador
    setIsOpen(false); // Fecha o menu mobile se estiver aberto

    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO (Clica e volta ao topo) */}
        <a 
          href="#inicio" 
          onClick={(e) => handleScrollTo(e, 'inicio')} 
          className="font-bold text-xl tracking-widest text-white uppercase whitespace-nowrap z-50 hover:text-[#C6A87C] transition-colors flex items-center gap-3"
        >
           {/* Ícone Geométrico do Logo */}
           <div className="w-8 h-8 bg-white flex items-center justify-center transform rotate-45 border border-[#C6A87C] overflow-hidden shadow-[0_0_10px_rgba(198,168,124,0.3)]">
              <span className="text-black font-bold text-xs -rotate-45">GF</span>
           </div>
           <span className="hidden sm:inline-block font-sans">GF INSTALAÇÕES</span>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: 'A GF', id: 'sobre' },
            { name: 'Obras', id: 'obras' },
            { name: 'Acervo', id: 'acervo' },
            { name: 'Contato', id: 'contato' },
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleScrollTo(e, item.id)}
              className="text-xs font-bold uppercase tracking-[0.15em] text-gray-300 hover:text-[#C6A87C] transition-colors relative group"
            >
              {item.name}
              {/* Linha animada ao passar o mouse */}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#C6A87C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Botão de Orçamento (Link Externo WhatsApp) */}
          <a 
            href="https://wa.me/5547984717341" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-[#C6A87C] text-[#C6A87C] px-6 py-2 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-[#C6A87C] hover:text-black transition-all shadow-[0_0_15px_rgba(198,168,124,0.1)] hover:shadow-[0_0_20px_rgba(198,168,124,0.4)]"
          >
            Orçamento
          </a>
        </div>

        {/* BOTÃO MOBILE (Hambúrguer) */}
        <button 
          className="md:hidden text-white hover:text-[#C6A87C] transition-colors focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE (Dropdown) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-8 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col space-y-6 px-8">
          {[
            { name: 'A GF', id: 'sobre' },
            { name: 'Obras', id: 'obras' },
            { name: 'Acervo', id: 'acervo' },
            { name: 'Contato', id: 'contato' },
          ].map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleScrollTo(e, item.id)} 
              className="text-white text-lg font-bold uppercase tracking-widest hover:text-[#C6A87C] border-b border-white/5 pb-2"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5547984717341" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#C6A87C] text-black px-6 py-4 text-center uppercase text-sm font-bold tracking-widest hover:bg-white transition-all mt-4"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;