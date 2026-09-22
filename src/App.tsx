import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { PropertyTypes } from './sections/PropertyTypes/PropertyTypes';
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';
import { AboutOwner } from './components/AboutOwner/AboutOwner';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import { MobileBottomBar } from './components/MobileBottomBar/MobileBottomBar';
import { PropertyCategory } from './types/enquiry';

function MainLayout() {
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('Open Plot');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectCategory = (category: PropertyCategory) => {
    setSelectedCategory(category);
    scrollToSection('enquire');
  };

  const handleExploreProperties = () => {
    scrollToSection('properties');
  };

  const handleNavigateToForm = () => {
    scrollToSection('enquire');
  };

  return (
    <div className="app-layout">
      {/* Top Fixed Navbar without cramped links */}
      <Navbar onNavigateToForm={handleNavigateToForm} />

      {/* Main Page Content */}
      <main id="main-content">
        <Hero onExploreProperties={handleExploreProperties} />
        <PropertyTypes onSelectCategory={handleSelectCategory} />
        <WhyChooseUs />
        <AboutOwner />
        <ContactForm selectedCategory={selectedCategory} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <MainLayout />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
