import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HighlightedNews from './components/HighlightedNews';
import NewsSection from './components/NewsSection';
import ShareStory from './components/ShareStory';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HighlightedNews />
      <NewsSection />
      <ShareStory />
      <Footer />
    </div>
  );
}

export default App;
