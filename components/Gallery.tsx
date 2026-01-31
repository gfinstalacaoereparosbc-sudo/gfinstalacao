import React from 'react';
import { PROJECTS } from '../constants';
import FadeIn from './ui/FadeIn';
import { Plus } from 'lucide-react';

interface GalleryProps {
  onOpenProject: (projectId: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onOpenProject }) => {
  return (
    <section id="obras" className="bg-background-default pt-24 pb-0 md:pb-24 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <FadeIn className="text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-3">Portfólio</span>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl text-white uppercase">
              Projetos Que Fizemos
            </h2>
          </div>
          <p className="hidden md:block text-text-tertiary text-sm max-w-sm text-right">
            Selecione um projeto para ver os detalhes da execução técnica e acabamentos.
          </p>
        </FadeIn>
      </div>

      {/* Vertical Strips Container */}
      <div className="w-full h-[800px] flex flex-col md:flex-row">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => onOpenProject(project.id)}
            className="group relative flex-1 border-b md:border-b-0 md:border-r border-white/10 last:border-0 cursor-pointer overflow-hidden transition-[flex] duration-700 ease-out hover:flex-[2.5]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full bg-[#111]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                loading="eager" 
                onError={(e) => {
                  // Fallback para placeholder escuro se a imagem falhar
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/800x1200/1a1a1a/333333?text=GF+Obra';
                }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.6] grayscale-[20%] group-hover:brightness-100 group-hover:grayscale-0"
              />
            </div>

            {/* Overlay Gradient (Always Visible to make text readable) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              
              {/* Hover Indicator Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 z-10">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold flex items-center justify-center">
                  <Plus className="text-brand-gold" size={32} />
                </div>
              </div>

              {/* Text Information */}
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                
                <h3 className="text-white font-heading font-bold text-2xl md:text-3xl uppercase leading-tight mb-2">
                  {project.title}
                </h3>

                {/* Vertical Text for Desktop Default State */}
                <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="block whitespace-nowrap text-white/50 text-xs font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
                    {project.category} — {project.title}
                  </span>
                </div>
                
                {/* Mobile Button visual cue */}
                <div className="md:hidden mt-4 text-brand-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Ver Projeto <Plus size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;