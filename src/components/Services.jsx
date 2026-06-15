import { Code2, Server, Palette, LayoutGrid } from 'lucide-react'
import '../styles/services.css'

function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      desc: 'Membangun antarmuka web yang interaktif, responsif, dan dinamis menggunakan React.js dan standard CSS modern.',
      colorClass: 'service-blue'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      desc: 'Membuat logika server-side, integrasi API, keamanan, dan manajemen basis data menggunakan Node.js atau PHP Laravel.',
      colorClass: 'service-mint'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      desc: 'Mendesain layout antarmuka berkualitas tinggi dengan tema modern seperti Claymorphism & Glassmorphism yang estetik.',
      colorClass: 'service-pink'
    },
    {
      icon: <LayoutGrid size={32} />,
      title: 'Responsive Design',
      desc: 'Mengoptimalkan website agar tampil sempurna di semua ukuran perangkat mulai dari ponsel, tablet, hingga layar desktop.',
      colorClass: 'service-yellow'
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Layanan Saya</h2>
      <p className="services-subtitle">Solusi pengembangan web profesional untuk kebutuhan digital Anda</p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card clay-card ${service.colorClass}`}>
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
