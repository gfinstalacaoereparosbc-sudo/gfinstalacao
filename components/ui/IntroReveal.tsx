import React, { useEffect, useState } from 'react';

interface IntroRevealProps {
  onComplete: () => void;
}

const IntroReveal: React.FC<IntroRevealProps> = ({ onComplete }) => {
  const [animationStage, setAnimationStage] = useState(0); // 0: Logo, 1: Exit, 2: Gone

  useEffect(() => {
    // Cronograma da animação
    const timeline = [
      setTimeout(() => setAnimationStage(1), 2200), // Começa a saída
      setTimeout(() => {
        setAnimationStage(2);
        onComplete();
      }, 3000) // Fim total
    ];

    return () => {
      timeline.forEach(t => clearTimeout(t));
    };
  }, [onComplete]);

  if (animationStage === 2) return null;

  return (
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none
      ${animationStage === 1 ? '-translate-y-full' : 'translate-y-0'}
    `}>
      {/* 
         NOTA: Adicionei pointer-events-none ao container principal e 
         pointer-events-auto aos filhos se necessário, para garantir que 
         mesmo durante a animação o scroll funcione se o usuário tentar.
      */}
      
      {/* Fundo Dividido (opcional para efeito cortina) ou Sólido */}
      <div className="absolute inset-0 bg-[#050505] pointer-events-auto" />

      {/* Conteúdo Central */}
      <div className={`relative z-10 flex flex-col items-center transition-opacity duration-500 pointer-events-none ${animationStage === 1 ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Logo Animado */}
        <div className="w-16 h-16 md:w-20 md:h-20 border border-[#C6A87C] flex items-center justify-center transform rotate-45 mb-8 animate-pulse shadow-[0_0_30px_rgba(198,168,124,0.2)]">
          <span className="text-white font-bold text-xl md:text-2xl -rotate-45 font-heading">GF</span>
        </div>

        {/* Texto */}
        <div className="overflow-hidden h-8 mb-2">
            <h1 className="text-white font-heading font-bold text-lg tracking-[0.3em] uppercase animate-[slideUp_0.8s_ease-out_forwards]">
              GF Instalações
            </h1>
        </div>
        
        <p className="text-[#C6A87C] text-[10px] tracking-[0.5em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
          Alto Padrão
        </p>

        {/* Barra de Progresso Decorativa */}
        <div className="w-32 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#C6A87C] animate-[progress_2s_ease-in-out_forwards]" />
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes progress {
          0% { width: 0%; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0%; left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default IntroReveal;