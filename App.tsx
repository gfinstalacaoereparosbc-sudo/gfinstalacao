import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import About from './components/About';
import Gallery from './components/Gallery';
import TechnicalArchive from './components/TechnicalArchive';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProjectDetail from './components/ProjectDetail';
import StoryNotificationModal from './components/StoryNotificationModal';
import CustomCursor from './components/ui/CustomCursor';
import NoiseOverlay from './components/ui/NoiseOverlay';
import IntroReveal from './components/ui/IntroReveal';

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showStoryModal, setShowStoryModal] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Rota 404 / Catch-all: Se a URL não for a raiz, reseta para a raiz silenciosamente.
    // Isso garante que se o usuário digitar site.com/blabla, ele vai para a Home em vez de quebrar ou ficar em branco.
    if (window.location.pathname !== '/') {
      try {
        window.history.replaceState(null, '', '/');
      } catch (e) {
        // Ignora erros de histórico em ambientes restritos (ex: iframes, blob urls)
        console.warn('Unable to reset URL path due to environment restrictions:', e);
      }
    }
  }, []);

  // Timer 15 segundos para modal de Storytelling automático
  useEffect(() => {
    // Só inicia o timer do modal DEPOIS que a intro acabar
    if (!introFinished) return;

    const timer = setTimeout(() => {
      // Só mostra se o usuário ainda não interagiu/não está em um modal
      if (!selectedProjectId) {
        setShowStoryModal(true);
      }
    }, 15000); 
    return () => clearTimeout(timer);
  }, [selectedProjectId, introFinished]);

  const handleOpenProject = (id: string) => {
    setSelectedProjectId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    window.scrollTo(0, 0);
  };

  const handleNavigateToAcervo = () => {
    setShowStoryModal(false);
    const element = document.getElementById('acervo');
    if (element) {
        // Pequeno delay para garantir que o modal feche suavemente antes do scroll
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans scroll-smooth selection:bg-[#C6A87C] selection:text-black">
      {/* Intro Animation - Só renderiza na primeira vez */}
      <IntroReveal onComplete={() => setIntroFinished(true)} />

      {/* Efeitos Visuais Globais */}
      <CustomCursor />
      <NoiseOverlay />

      {selectedProjectId ? (
        <>
          <ProjectDetail 
            projectId={selectedProjectId} 
            onBack={handleBackToHome}
            onNavigate={handleOpenProject}
          />
          <FloatingWhatsApp />
        </>
      ) : (
        <>
          <Navbar />
          <main>
            <div id="inicio"><Hero /></div>
            <Partners />
            <div id="sobre"><About /></div>
            <div id="obras"><Gallery onOpenProject={handleOpenProject} /></div>
            <div id="acervo"><TechnicalArchive /></div>
            <div id="contato"><Contact /></div>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}

      {/* Modal Automático de Storytelling */}
      {showStoryModal && introFinished && (
        <StoryNotificationModal 
            onClose={() => setShowStoryModal(false)} 
            onNavigateToAcervo={handleNavigateToAcervo}
        />
      )}
    </div>
  );
}

export default App;