import React from 'react';
import { Button } from './ui/Button';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image Otimizada para LCP */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop" 
          alt="Ambiente de luxo com acabamento em madeira de alto padrão"
          className="w-full h-full object-cover filter brightness-[0.35]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-default via-background-default/20 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl">
        <FadeIn delay={200} direction="up">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-tight tracking-tight mb-8">
            A Assinatura do <br className="hidden md:block"/>
            <span className="text-brand-gold">Acabamento</span> em <br className="hidden md:block"/>
            Santa Catarina.
          </h1>
        </FadeIn>

        <FadeIn delay={400} direction="up">
          <p className="font-sans text-text-secondary max-w-2xl mx-auto mb-12 text-sm md:text-lg leading-relaxed font-light tracking-wide">
            <span className="text-white font-medium">Uma parceria de sucesso.</span> Especialistas em Portas, Pisos e Rodapés para o Alto Padrão.
          </p>
        </FadeIn>

        <FadeIn delay={600} direction="up">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => document.getElementById('obras')?.scrollIntoView({ behavior: 'smooth' })}>Conheça Nossos Projetos</Button>
          </div>
        </FadeIn>
      </div>
      
      {/* Bottom Strip */}
      <div className="absolute bottom-0 left-0 w-full z-20 bg-background-default/80 backdrop-blur-sm border-t border-white/5 py-4">
        <div className="container mx-auto px-6">
           <FadeIn delay={800} direction="up">
            <p className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-center">
              Atendendo Balneário Camboriú | Praia Brava | Joinville | Itapema
            </p>
           </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;