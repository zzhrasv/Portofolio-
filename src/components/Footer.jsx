import { ArrowUp } from 'lucide-react'
import '../styles/footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container clay-card">
        <div className="footer-info">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} <span className="highlight-text">Zzhrasv.Dev</span>. All rights reserved.
          </p>
          <p className="footer-attribution">
          </p>
        </div>
        
        <button 
          onClick={scrollToTop} 
          className="clay-button scroll-top-btn" 
          aria-label="Scroll ke atas"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
