import React, { useState } from 'react';
import { X, Lock, CheckCircle } from 'lucide-react';

interface LeadCaptureModalProps {
  onClose: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    obra: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Monta a mensagem para o WhatsApp
    const message = `Olá GF! Me chamo *${formData.nome}*, sou *${formData.cargo}* na obra *${formData.obra}*. Meu email é ${formData.email}. Gostaria de receber o Manual Técnico de Pré-Instalação.`;
    const encodedMessage = encodeURIComponent(message);
    
    // Abre o WhatsApp
    window.open(`https://wa.me/5547984717341?text=${encodedMessage}`, '_blank');
    
    // Fecha o modal
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Fundo Escuro Borrado */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* O Modal */}
      <div className="relative bg-[#0F0F0F] border border-[#C6A87C] w-full max-w-lg p-8 shadow-2xl rounded-sm animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
        
        {/* Close Button - Touch Target Otimizado */}
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 p-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8 pt-2">
          <div className="flex justify-center mb-4 text-[#C6A87C]">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">MATERIAL RESTRITO</h2>
          <p className="text-gray-400 text-sm">
            Para acessar o guia de pré-instalação e checklist de obras, por favor, identifique-se abaixo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#C6A87C] text-xs font-bold uppercase tracking-wider mb-1">Nome Completo</label>
            <input 
              required name="nome" type="text" placeholder="Seu nome"
              className="w-full bg-transparent border-b border-gray-700 focus:border-[#C6A87C] text-white py-2 outline-none transition-colors placeholder-gray-600"
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="block text-[#C6A87C] text-xs font-bold uppercase tracking-wider mb-1">Cargo / Função *</label>
            <input 
              required name="cargo" type="text" placeholder="Ex: Arquiteto, Engenheiro, Comprador"
              className="w-full bg-transparent border-b border-gray-700 focus:border-[#C6A87C] text-white py-2 outline-none transition-colors placeholder-gray-600"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-[#C6A87C] text-xs font-bold uppercase tracking-wider mb-1">Nome da Obra / Construtora</label>
            <input 
              required name="obra" type="text" placeholder="Ex: Residencial Ocean"
              className="w-full bg-transparent border-b border-gray-700 focus:border-[#C6A87C] text-white py-2 outline-none transition-colors placeholder-gray-600"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#C6A87C] text-xs font-bold uppercase tracking-wider mb-1">WhatsApp</label>
              <input 
                required name="whatsapp" type="tel" placeholder="(00) 00000-0000"
                className="w-full bg-transparent border-b border-gray-700 focus:border-[#C6A87C] text-white py-2 outline-none transition-colors placeholder-gray-600"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-[#C6A87C] text-xs font-bold uppercase tracking-wider mb-1">E-mail Corporativo</label>
              <input 
                required name="email" type="email" placeholder="nome@empresa.com"
                className="w-full bg-transparent border-b border-gray-700 focus:border-[#C6A87C] text-white py-2 outline-none transition-colors placeholder-gray-600"
                onChange={handleChange}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-6 bg-[#C6A87C] hover:bg-[#b09265] text-black font-bold py-4 uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
          >
            Solicitar Acesso <CheckCircle size={18} />
          </button>
        </form>
        
        <p className="mt-4 text-center text-[10px] text-gray-600">
          Seus dados serão enviados diretamente para nossa equipe técnica via WhatsApp.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureModal;