import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string; // Classes para o container
  imgClassName?: string; // Classes para a imagem
  speed?: number; // Velocidade do parallax (padrão 0.1)
  scale?: number; // Escala inicial da imagem (padrão 1.15 para dar margem ao movimento)
  priority?: boolean; // Se true, carrega com eager/high priority (LCP). Se false, lazy.
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  imgClassName = "",
  speed = 0.1,
  scale = 1.15,
  priority = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Desativa em mobile para performance e UX
    if (window.innerWidth < 768) return;

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Só calcula se estiver visível na tela (viewport + margem)
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calcula a distância do centro da imagem em relação ao centro da tela
        const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;
        
        // Aplica o fator de velocidade
        // Se speed for positivo, a imagem move contra o scroll (efeito profundidade)
        const translateY = distanceFromCenter * speed;
        
        setOffset(translateY);
      }
    };

    const loop = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden relative ${className}`}
      style={{ willChange: 'transform' }}
    >
      <img 
        ref={imgRef}
        src={src} 
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={`w-full h-full object-cover transition-transform duration-100 ease-linear ${imgClassName}`}
        style={{ 
          transform: `scale(${scale}) translateY(${offset}px)`,
          willChange: 'transform'
        }}
      />
      {/* Overlay opcional para garantir que bordas não fiquem brancas em movimento extremo */}
    </div>
  );
};

export default ParallaxImage;