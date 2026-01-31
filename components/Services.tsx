import React from 'react';
import { SERVICES } from '../constants';
import { DoorOpen, Layers, Ruler, Hammer } from 'lucide-react';
import FadeIn from './ui/FadeIn';

// Map icon names from constants to Lucide components
const iconMap = {
  Building: DoorOpen, // Mapping "Building" (from generic type) to DoorOpen for "Portas"
  Zap: Layers,        // Mapping "Zap" to Layers for "Pisos"
  Ruler: Ruler,       // Mapping "Ruler" to Ruler for "Rodapés"
  Wrench: Hammer      // Mapping "Wrench" to Hammer for "Forros"
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background-surface border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
          <FadeIn>
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-3">O Que Fazemos</span>
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-white uppercase">Serviços Especializados</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Hammer;
            return (
              <FadeIn key={service.id} delay={index * 100} className="h-full">
                <div className="group h-full p-8 bg-background-surface border-l-2 border-brand-gold hover:bg-white/[0.03] transition-all duration-300 flex flex-col relative overflow-hidden">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors" />

                  <div className="mb-8 text-brand-gold group-hover:text-brand-goldLight transition-colors">
                    <Icon size={36} strokeWidth={1} />
                  </div>
                  
                  <h3 className="text-lg font-heading font-bold text-white mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow font-light">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-brand-gold text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Detalhes
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;