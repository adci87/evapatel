/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DESTINATIONS, SERVICES } from './data/hotelData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>(DESTINATIONS[0].city);
  const [selectedService, setSelectedService] = useState<string>(
    SERVICES[0].inquiryValue
  );

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceValue: string) => {
    setSelectedService(serviceValue);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-slate-100">
      <Header onBookClick={scrollToContact} />
      <main className="flex-1">
        <HeroSection
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          onReserveClick={scrollToContact}
        />
        <ServicesSection
          selectedService={selectedService}
          onSelectService={handleSelectService}
        />
        <AboutSection />
        <ContactSection
          selectedCity={selectedCity}
          selectedService={selectedService}
        />
      </main>
      <Footer />
    </div>
  );
}
