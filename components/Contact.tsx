import React from 'react';
import { Button } from './ui/Button';
import FadeIn from './ui/FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background-surface border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <FadeIn>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest block mb-3">Contato</span>
              <h2 className="font-heading font-semibold text-3xl md:text-5xl text-white uppercase mb-8 leading-tight">
                Vamos criar algo <br/> extraordinário.
              </h2>
              <p className="text-text-secondary mb-12 max-w-md">
                Preencha o formulário para discutir seu próximo projeto. Nossa equipe técnica retornará em até 24 horas.
              </p>

              <div className="space-y-8 border-l border-white/10 pl-8">
                <div>
                  <h4 className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-1">Endereço</h4>
                  <p className="text-white font-light text-sm">
                    Rua Agrolândia, nº 440 – Sala 02<br/>
                    Municípios, Balneário Camboriú - SC
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-1">Email</h4>
                  <p className="text-white font-light text-sm">gfinstalacaoereparosbc@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold uppercase text-[10px] tracking-widest mb-1">WhatsApp</h4>
                  <p className="text-white font-light text-sm">(47) 98471-7341</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="bg-background-default p-8 md:p-12 border border-white/5 shadow-2xl">
            <FadeIn delay={200}>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 group-focus-within:text-brand-gold transition-colors">Nome</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="Seu nome"
                    />
                   </div>
                   <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 group-focus-within:text-brand-gold transition-colors">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                   </div>
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 group-focus-within:text-brand-gold transition-colors">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 group-focus-within:text-brand-gold transition-colors">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none"
                    placeholder="Conte sobre seu projeto..."
                  />
                </div>

                <Button variant="primary" className="w-full md:w-auto">Enviar Mensagem</Button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;