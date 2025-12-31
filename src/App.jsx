import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import GetExtension from './components/GetExtension';
import Pricing from './components/Pricing';
import Carousel2 from './components/Carousel2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-[#FFC367] selection:text-black bg-[#101011]">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <GetExtension />
        <Pricing />
        <Carousel2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
