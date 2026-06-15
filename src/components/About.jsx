import { BookOpen, Award, Target, Cpu } from 'lucide-react'
import '../styles/about.css'

function About() {
  const skills = [
    { name: 'HTML & CSS / Responsive Web', level: 90, color: 'blue' },
    { name: 'JavaScript / ES6+', level: 85, color: 'yellow' },
    { name: 'React.js / Frontend Frameworks', level: 80, color: 'purple' },
    { name: 'PHP / Laravel Backend', level: 75, color: 'indigo' },
    { name: 'UI/UX Design / Claymorphism', level: 85, color: 'pink' }
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Tentang Saya</h2>
      
      <div className="about-grid">
        <div className="about-bio clay-card">
          <h3 className="bio-title">Siapa Saya?</h3>
          <p className="bio-text">
            Saya adalah seorang mahasiswa program studi Teknik Informatika Universitas Muhammadiyah Purwokerto 
            yang memiliki gairah tinggi dalam pengembangan web modern. Saya berfokus pada 
            penciptaan website interaktif dengan tampilan yang bersih, unik, dan ramah pengguna.
          </p>
          <p className="bio-text">
            Bagi saya, pemrograman bukan hanya sekadar baris kode, melainkan seni untuk 
            mempermudah kehidupan manusia melalui inovasi digital. Di waktu luang, saya senang 
            mempelajari tren desain UI/UX terbaru dan bereksperimen dengan animasi CSS.
          </p>
          
          <div className="bio-highlights">
            <div className="highlight-item">
              <div className="icon-wrapper purple-bg">
                <BookOpen size={20} />
              </div>
              <div>
                <h4>Pendidikan</h4>
                <p>Mahasiswa Semester 4 - Program Studi  Teknik Informatika</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="icon-wrapper pink-bg">
                <Award size={20} />
              </div>
              <div>
                <h4>Fokus Utama</h4>
                <p>Frontend & UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-skills clay-card">
          <h3 className="skills-title">Keahlian & Teknologi</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="clay-progress-track">
                  <div 
                    className={`clay-progress-bar fill-${skill.color}`} 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    role="progressbar"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
