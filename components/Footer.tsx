import React from 'react';
import { NAV_LINKS } from '../constants';
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-default pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-heading font-bold text-2xl tracking-widest text-white uppercase block mb-6">
              GF <span className="text-brand-gold">.</span>
            </a>
            <p className="text-text-tertiary text-sm leading-relaxed mb-6">
              Especialistas em instalações de alto padrão. Transformando projetos em realidade com precisão técnica e acabamento impecável.
            </p>
            <div className="flex space-x-4 text-text-secondary">
              <a href="#" className="hover:text-brand-gold transition-colors border border-white/10 p-2 rounded-full"><Instagram size={18} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors border border-white/10 p-2 rounded-full"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-brand-gold transition-colors border border-white/10 p-2 rounded-full"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1 md:pl-8">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Navegação</h4>
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contato</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex items-start gap-3">
                 <Phone size={20} className="text-brand-gold mt-1 shrink-0" />
                 <div>
                   <span className="block text-text-tertiary text-xs uppercase tracking-wider mb-1">WhatsApp</span>
                   <p className="text-white text-sm">(47) 98471-7341</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-3">
                 <Mail size={20} className="text-brand-gold mt-1 shrink-0" />
                 <div>
                   <span className="block text-text-tertiary text-xs uppercase tracking-wider mb-1">E-mail</span>
                   <p className="text-white text-sm break-all">gfinstalacaoereparosbc@gmail.com</p>
                 </div>
               </div>

               <div className="flex items-start gap-3 sm:col-span-2">
                 <MapPin size={20} className="text-brand-gold mt-1 shrink-0" />
                 <div>
                   <span className="block text-text-tertiary text-xs uppercase tracking-wider mb-1">Endereço</span>
                   <p className="text-white text-sm">
                     Rua Agrolândia, nº 440 – Sala 02<br/>
                     Municípios, Balneário Camboriú - SC
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-xs">
            © {new Date().getFullYear()} GF Instalações e Reparos Ltda. Todos os direitos reservados.
          </p>
          <p className="text-text-tertiary text-[10px] uppercase tracking-widest opacity-50">
            GF Luxury Dark System v1.0
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;