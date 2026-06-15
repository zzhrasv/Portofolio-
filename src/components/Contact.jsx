import { useState } from 'react'
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import '../styles/contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Hubungi Saya</h2>
      
      <div className="contact-container">
        {/* Info panel */}
        <div className="contact-info clay-card">
          <h3 className="info-title">Mari Berdiskusi</h3>
          <p className="info-desc">
            Punya ide proyek menarik atau ingin berkolaborasi? Hubungi saya melalui form 
            atau media berikut. Saya akan membalas secepat mungkin!
          </p>
          
          <div className="info-list">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <p>azzahrasivaa8@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <Phone size={20} />
              </div>
              <div className="info-text">
                <h4>Telepon / WA</h4>
                <p>+62 823 2264 3208</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div className="info-text">
                <h4>Lokasi</h4>
                <p>Jawa Tengah, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="contact-form-wrapper clay-card">
          {submitSuccess ? (
            <div className="success-message">
              <CheckCircle size={50} className="success-icon" />
              <h3>Terima Kasih!</h3>
              <p>Pesan Anda telah berhasil dikirim. Saya akan menghubungi Anda segera.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`clay-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Masukkan nama Anda..."
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.name}
                  </span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`clay-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="name@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Pesan Anda</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`clay-input textarea-input ${errors.message ? 'input-error' : ''}`}
                  placeholder="Tulis pesan Anda di sini..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.message}
                  </span>
                )}
              </div>
              
              <button
                type="submit"
                className="clay-button submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'} <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
