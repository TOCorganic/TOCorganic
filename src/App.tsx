import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StoryModal from './components/StoryModal';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleStoryClick = () => {
    setIsStoryModalOpen(true);
  };

  const handleCloseStory = () => {
    setIsStoryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Header onStoryClick={handleStoryClick} />
          <Hero onStoryClick={handleStoryClick} />
          <Products />
          <CTA />
          <Contact />
          <Footer />
          <StoryModal isOpen={isStoryModalOpen} onClose={handleCloseStory} />
          <WhatsAppButton />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;