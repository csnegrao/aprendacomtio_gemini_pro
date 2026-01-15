import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedCourses } from './components/FeaturedCourses';
import { Testimonials } from './components/Testimonials';
import { Differentials } from './components/Differentials';
import { SpecialOffer } from './components/SpecialOffer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <HowItWorks />
        <FeaturedCourses />
        <Testimonials />
        <Differentials />
        <SpecialOffer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;