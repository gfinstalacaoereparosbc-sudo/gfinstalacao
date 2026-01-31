import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Variáveis ref para não causar re-render na animação
  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Detecta se é dispositivo touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Move o ponto interno instantaneamente
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Detecção de Hover
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Loop de Animação para o Círculo Externo (Lerp)
    let animationFrameId: number;
    const animate = () => {
      // Física: O seguidor se move 15% da distância até o mouse a cada frame
      follower.current.x += (mouse.current.x - follower.current.x) * 0.15;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.15;

      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate3d(${follower.current.x}px, ${follower.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Círculo Externo (Seguidor Suave) */}
      <div 
        ref={cursorOuterRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#C6A87C] transition-all duration-300 ease-out will-change-transform
          ${isHovering 
            ? 'w-14 h-14 bg-[#C6A87C]/10 border-opacity-50' 
            : 'w-8 h-8 border-opacity-30'
          }
        `}
      />
      
      {/* Ponto Interno (Fixo) */}
      <div 
        ref={cursorInnerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#C6A87C] transition-all duration-300 ease-out will-change-transform
          ${isHovering ? 'w-2 h-2 opacity-50' : 'w-1.5 h-1.5 opacity-100'}
        `}
      />
    </>
  );
};

export default CustomCursor;