import React from 'react';
import FadeIn from './ui/FadeIn';
import { STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import ParallaxImage from './ui/ParallaxImage';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background-default relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Text & Stats */}
        <div className="relative z-10">
          <FadeIn direction="up">
            <span className="block text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Quem Somos</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-8 leading-tight uppercase">
              Excelência e <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Comprometimento</span>
            </h2>
            
            <div className="space-y-6 text-text-secondary leading-relaxed mb-12 border-l border-brand-gold/30 pl-6">
              <p>
                Trabalhamos para garantir resultados que superam expectativas. Entendemos que cronogramas de obra são desafiadores, por isso alinhamos necessidades com respeito e eficiência absoluta.
              </p>
              <p>
                Nossa equipe é treinada para atuar em ambientes de alto padrão, respeitando as normas condominiais e a integridade dos materiais nobres que manuseamos.
              </p>
            </div>

            {/* Stats Grid - Integrated here as requested */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <span className="block font-heading font-bold text-2xl md:text-4xl text-brand-gold mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] md:text-xs uppercase tracking-widest text-text-tertiary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Vertical Image with Parallax */}
        <div className="relative h-[600px] w-full lg:w-[90%] lg:ml-auto">
          <FadeIn direction="left" delay={200} className="h-full w-full">
             <div className="relative w-full h-full group bg-background-surface2">
               
               {/* Parallax Component Implementation */}
               <ParallaxImage 
                 src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=800&auto=format&fit=crop"
                 alt="Detalhe de acabamento de luxo com controle de qualidade GF"
                 className="w-full h-full"
                 imgClassName="filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                 speed={0.08}
                 priority={false} // Lazy loading
               />

               {/* Frame */}
               <div className="absolute inset-4 border border-white/10 z-10 pointer-events-none" />
               <div className="absolute bottom-10 left-10 z-20">
                 <div className="bg-brand-gold/90 backdrop-blur p-4 inline-flex items-center gap-3">
                   <CheckCircle2 size={20} className="text-black" />
                   <span className="text-black text-xs font-bold uppercase tracking-wider">Certificação GF</span>
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default About;