import React, { useState } from 'react';
import { Play, FileText, Lock } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const TechnicalArchive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="acervo" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Dourado de Fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C6A87C] opacity-5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-[#C6A87C] font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
            Bastidores & Técnica
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transparência Técnica.
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Não vendemos apenas instalação. Vendemos a tranquilidade de saber que sua obra segue rigorosamente as normas da ABNT/NBR 15930.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: VÍDEO DE AUTORIDADE */}
          <div className="relative aspect-video bg-[#0F0F0F] border border-white/10 flex items-center justify-center group cursor-pointer hover:border-[#C6A87C] transition-all rounded-sm overflow-hidden">
             {/* Simulação de Thumb (Pode substituir por imagem real depois) */}
             <div className="absolute inset-0 bg-gray-900 opacity-60 group-hover:scale-105 transition-transform duration-700"></div>
             
             {/* Botão Play */}
             <div className="w-16 h-16 rounded-full bg-[#C6A87C] flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(198,168,124,0.4)] group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-black fill-black ml-1" />
             </div>
             
             <span className="absolute bottom-6 left-6 text-white text-xs font-bold tracking-widest uppercase z-10 border-l-2 border-[#C6A87C] pl-3">
                Processo de Instalação
             </span>
          </div>

          {/* LADO DIREITO: O CARD DE STORYTELLING (A VOLTA DO TEXTO PERDIDO) */}
          <div className="bg-[#0F0F0F] p-8 md:p-10 border-l-4 border-[#C6A87C] shadow-2xl relative">
            <div className="absolute top-6 right-6 text-[#C6A87C]/10">
              <FileText size={80} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              BLINDAGEM DE CRONOGRAMA: <br/>
              <span className="text-[#C6A87C]">Evite o Retrabalho.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              90% dos atrasos no acabamento fino acontecem por detalhes despercebidos na preparação da base. 
              Não espere a equipe de instalação chegar para descobrir que o vão está fora de esquadro ou o contrapiso úmido.
            </p>
            
            <p className="text-gray-300 mb-8 font-medium text-sm">
              Criamos o <strong className="text-white">Protocolo de Liberação GF</strong>: um checklist de campo prático para Engenheiros.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-[#C6A87C] hover:bg-[#b09265] text-black font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
            >
              <Lock size={18} /> 
              Solicitar Manual Técnico
            </button>
            
            <p className="mt-4 text-center text-[10px] text-gray-600 uppercase tracking-widest">
              Disponível apenas para profissionais
            </p>
          </div>
        </div>
      </div>

      {/* Renderiza Modal Condicionalmente */}
      {isModalOpen && <LeadCaptureModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default TechnicalArchive;