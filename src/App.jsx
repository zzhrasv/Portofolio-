import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      {/* Background Claymorphism Bubbles */}
      <div className="bubble-background" aria-hidden="true">
        <div className="bg-bubble"></div>
        <div className="bg-bubble"></div>
        <div className="bg-bubble"></div>
        <div className="bg-bubble"></div>
        <div className="bg-bubble"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
