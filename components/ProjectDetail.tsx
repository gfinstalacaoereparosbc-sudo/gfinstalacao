import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, MapPin, Ruler, ShieldAlert } from 'lucide-react';
import { PROJECTS } from '../constants';
import FadeIn from './ui/FadeIn';
import ParallaxImage from './ui/ParallaxImage';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

// Lista fixa de imagens arquitetônicas para o grid de detalhes (Cacheável)
const DETAIL_IMAGES = [
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=600&auto=format&fit=crop',
];

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack, onNavigate }) => {
  // Find project data or fallback
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];

  // Logic for Next Project
  const projectIds = PROJECTS.map(p => p.id);
  const currentIndex = projectIds.indexOf(projectId);
  const nextIndex = (currentIndex + 1) % projectIds.length; // Circular loop
  const nextId = projectIds[nextIndex];
  const nextProjectTitle = PROJECTS.find(p => p.id === nextId)?.title || 'Próximo';

  const handleNext = () => {
    onNavigate(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Ensure scroll to top on mount or id change
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="bg-background-default min-h-screen text-white animate-fade-in-up">
      
      {/* 1. Header Simplificado (Fixo) */}
      <nav className="fixed top-0 w-full z-50 p-6 md:p-8 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-brand-gold transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-brand-gold group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest hidden md:inline-block">Voltar</span>
        </button>
        
        <div className="font-heading font-bold text-xl tracking-widest text-white uppercase absolute left-1/2 -translate-x-1/2">
          GF <span className="text-brand-gold">.</span>
        </div>
        
        <div className="w-10"></div> {/* Spacer */}
      </nav>

      {/* 2. Hero Section com Parallax */}
      <header className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage 
            src={project.imageUrl}
            alt={`Capa do projeto ${project.title}`}
            className="w-full h-full"
            imgClassName="filter brightness-[0.4] grayscale-[30%]"
            speed={0.15} // Velocidade ligeiramente maior para o Hero
            priority={true} // High priority loading for LCP
          />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <FadeIn direction="up">
            <span className="block text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Portfólio Exclusivo</span>
            <h1 className="font-heading font-bold text-4xl md:text-7xl text-white uppercase tracking-tight mb-4 leading-tight">
              {project.title}
            </h1>
            <div className="w-20 h-0.5 bg-brand-gold mx-auto mb-6"></div>
            <p className="font-sans text-white/80 text-sm md:text-lg uppercase tracking-widest font-light flex items-center justify-center gap-2">
              <MapPin size={16} className="text-brand-gold" /> {project.category} | {project.size || 'Localização Privada'}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* 3. Ficha Técnica Grid */}
      <section className="border-b border-white/5 bg-background-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            <div className="p-8 md:p-12 text-center md:text-left hover:bg-white/[0.02] transition-colors">
              <div className="flex justify-center md:justify-start mb-3 text-brand-gold"><Ruler size={24} /></div>
              <span className="block text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Serviço</span>
              <p className="text-white font-heading font-semibold text-lg">Instalação Completa</p>
            </div>
            
            <div className="p-8 md:p-12 text-center md:text-left hover:bg-white/[0.02] transition-colors">
              <div className="flex justify-center md:justify-start mb-3 text-brand-gold"><MapPin size={24} /></div>
              <span className="block text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Área Executada</span>
              <p className="text-white font-heading font-semibold text-lg">High-End Residential</p>
            </div>
            
            <div className="p-8 md:p-12 text-center md:text-left hover:bg-white/[0.02] transition-colors">
              <div className="flex justify-center md:justify-start mb-3 text-brand-gold"><Clock size={24} /></div>
              <span className="block text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Prazo</span>
              <p className="text-white font-heading font-semibold text-lg">Entrega Pontual</p>
            </div>
            
            <div className="p-8 md:p-12 text-center md:text-left hover:bg-white/[0.02] transition-colors">
               <div className="flex justify-center md:justify-start mb-3 text-brand-gold"><ShieldAlert size={24} /></div>
              <span className="block text-brand-gold text-[10px] font-bold uppercase tracking-widest mb-2">Desafio</span>
              <p className="text-white font-heading font-semibold text-lg">Acabamento Fino</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Storytelling */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-1/2">
              <FadeIn direction="up">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-4">Case Study</span>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white uppercase mb-8 leading-tight">
                  O Desafio <br /> Técnico
                </h2>
                <div className="text-text-secondary leading-relaxed font-light">
                  <p className="mb-6 text-lg">
                    {project.description}
                  </p>
                  <p>
                    Neste projeto, a exigência estética era a prioridade absoluta. Utilizamos técnicas de corte e fixação invisível, garantindo que a madeira nobre fosse a protagonista do ambiente, sem interferências visuais.
                    A integração entre pisos e rodapés seguiu um alinhamento milimétrico, respeitando as dilatações naturais do material.
                  </p>
                </div>
                
                <div className="mt-10 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider border border-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-gold" /> NBR 15930
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider border border-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-gold" /> Acústica Premium
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-wider border border-white/10 px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-gold" /> Garantia Estendida
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:w-1/2 w-full">
              <FadeIn direction="left" delay={200}>
                <div className="relative aspect-[4/5] bg-background-surface group overflow-hidden border border-white/5 shadow-2xl">
                   {/* Parallax Secondary Image */}
                   <ParallaxImage 
                     src={project.imageUrl}
                     alt={`Detalhe técnico de ${project.title}`}
                     className="w-full h-full"
                     imgClassName="filter grayscale-[20%] group-hover:scale-105"
                     speed={0.05}
                     priority={false} // Lazy load secondary image
                   />
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur px-4 py-2 text-[10px] text-white uppercase tracking-widest border border-white/10 z-10">
                    Detalhe: Acabamento Premium
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Galeria Masonry (Mockada visualmente com imagens placeholder variadas) */}
      <section className="py-24 bg-background-surface border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-3">Imagens</span>
              <h2 className="font-heading font-semibold text-3xl text-white uppercase">Execução e Detalhes</h2>
            </FadeIn>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
             {/* Usando imagens fixas do array DETAIL_IMAGES para carregamento instantâneo */}
             {DETAIL_IMAGES.map((imgUrl, index) => (
               <FadeIn key={index} delay={index * 100} className="break-inside-avoid">
                 <div className="relative group overflow-hidden border border-white/5 bg-black">
                   <img 
                     src={imgUrl} 
                     alt={`Detalhe da obra ${project.title} - imagem ${index + 1}`}
                     loading="lazy"
                     className="w-full h-auto grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 hover:scale-105 block"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                 </div>
               </FadeIn>
             ))}
          </div>

        </div>
      </section>

      {/* 6. Footer Navigation / CTA */}
      <footer className="py-20 bg-background-default border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h3 className="font-heading text-2xl text-white uppercase mb-8">Gostou deste resultado?</h3>
            
            <a 
              href="https://wa.me/5547984717341" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-gold text-background-default px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(198,168,124,0.3)] mb-16"
            >
              Solicitar Orçamento Similar
            </a>

            <div className="flex justify-between items-center border-t border-white/10 pt-8">
              <button 
                onClick={onBack} 
                className="text-text-secondary hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Voltar ao Início
              </button>
              
              <button 
                onClick={handleNext}
                className="text-text-secondary hover:text-brand-gold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors cursor-pointer"
              >
                Próximo: {nextProjectTitle} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;