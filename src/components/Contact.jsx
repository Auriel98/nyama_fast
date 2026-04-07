import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '100px 5%', background: 'var(--noir)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="tag">Contactez-nous</span>
          <h2 className="section-title">RESTONS<br />EN CONTACT</h2>
        </motion.div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Infos */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', color: 'var(--orange)', marginBottom: 24, letterSpacing: 2 }}>NYAMA FAST LIBREVILLE</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {[
                { icon: <MapPin size={20} />, label: 'Adresse', val: 'Libreville, Gabon — Centre-ville' },
                { icon: <Phone size={20} />, label: 'Téléphone', val: '+241 74 55 07 32' },
                { icon: <Mail size={20} />, label: 'Email', val: 'contact@Nyama-fast-lbv.com' },
              ].map(i => (
                <div key={i.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ color: 'var(--orange)', background: 'rgba(255,107,0,0.12)', width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--gris)', letterSpacing: 2, textTransform: 'uppercase' }}>{i.label}</div>
                    <div style={{ fontWeight: 500 }}>{i.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(255,107,0,0.07)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 16, padding: 24 }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem', color: 'var(--orange)', marginBottom: 8 }}>⏰ HORAIRES D'OUVERTURE</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
                Lundi – Dimanche : 10h00 – 22h00<br />
                Service non-stop tous les jours<br />
                <span style={{ color: 'var(--vert-light)', fontWeight: 600 }}>✅ Ouvert 7j/7</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <form onSubmit={handleSubmit} style={{ background: 'var(--noir-soft)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 36 }}>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', marginBottom: 24, letterSpacing: 2 }}>ENVOYER UN MESSAGE</h3>
              {[
                { label: 'Votre nom', type: 'text', placeholder: 'Auriel' },
                { label: 'Email ou téléphone', type: 'text', placeholder: 'Auriel@example.com ou +241...' },
              ].map(f => (
                <div key={f.label} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gris)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} required style={{
                    width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, padding: '12px 16px', color: 'white', fontFamily: 'DM Sans', fontSize: '0.95rem',
                    outline: 'none', transition: 'border 0.2s', boxSizing: 'border-box',
                  }}
                    onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gris)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>Message</label>
                <textarea placeholder="Votre message, question ou commande spéciale..." required rows={4} style={{
                  width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10, padding: '12px 16px', color: 'white', fontFamily: 'DM Sans', fontSize: '0.95rem',
                  outline: 'none', resize: 'vertical', transition: 'border 0.2s', boxSizing: 'border-box',
                }}
                  onFocus={e => e.target.style.borderColor = 'var(--orange)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: '1rem' }}>
                {sent ? '✅ Message envoyé !' : <><Send size={18} /> Envoyer le message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          #contact {
            padding: 80px 6% !important;
          }

          #contact h3 {
            text-align: center;
          }

          #contact .section-title {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          #contact form {
            padding: 24px !important;
          }

          #contact form input,
          #contact form textarea {
            font-size: 16px !important; /* évite le zoom auto sur iOS */
          }
        }
      `}</style>
    </section>
  )
}