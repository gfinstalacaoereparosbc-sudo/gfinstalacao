import React from 'react';
import { X, ShieldAlert, ArrowDown } from 'lucide-react';
import { Button } from './ui/Button';

interface StoryNotificationModalProps {
  onClose: () => void;
  onNavigateToAcervo: () => void;
}

const StoryNotificationModal: React.FC<StoryNotificationModalProps> = ({ onClose, onNavigateToAcervo }) => {
  const handleAction = () => {
    onNavigateToAcervo();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-6 pointer-events-none">
      {/* Overlay transparente com backdrop blur para focar a atenção */}
      <div className="pointer-events-auto absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity" onClick={onClose} />

      {/* Card - Mobile: Margem e elevação para não colar na borda. Desktop: Centralizado */}
      <div className="pointer-events-auto relative w-full max-w-lg bg-[#0F0F0F] border-l-4 border-brand-gold shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-fade-in-up flex flex-col md:flex-row overflow-hidden m-4 md:m-0 rounded-sm">
        
        {/* Close Button - Touch Target Otimizado (48px min) */}
        <button 
          onClick={onClose} 
          className="absolute top-0 right-0 p-4 text-white/40 hover:text-white transition-colors z-20 cursor-pointer"
          aria-label="Fechar alerta"
        >
          <X size={24} />
        </button>

        {/* Icon Section */}
        <div className="bg-brand-gold/10 p-6 flex items-center justify-center md:w-24 shrink-0 border-b md:border-b-0 md:border-r border-white/5">
           <ShieldAlert className="text-brand-gold w-10 h-10 animate-pulse" />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1">
          <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
            Alerta de Bastidores
          </span>
          
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight uppercase pr-8">
            Sua obra está <span className="text-brand-gold">blindada</span> contra atrasos?
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            90% dos problemas no acabamento fino surgem de detalhes invisíveis na pré-instalação.
          </p>

          <Button 
            variant="primary" 
            onClick={handleAction}
            className="w-full flex items-center justify-center gap-2 py-3 text-xs"
          >
            Descobrir Blindagem de Cronograma <ArrowDown size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryNotificationModal;