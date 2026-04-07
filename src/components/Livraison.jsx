import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, MapPin, Package } from 'lucide-react'

export default function Livraison() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="livraison" ref={ref} style={{ padding: '100px 5%', background: 'var(--noir)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-5%', bottom: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 70%)', borderRadius: '50%' }} />

      <div className="livraison-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="tag">Service de Livraison</span>
          <h2 className="section-title" style={{ marginBottom: 24 }}>LIVRÉS<br />CHEZ VOUS</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 40 }}>
            Nos livreurs internes sillonnent Libreville pour vous apporter vos plats chauds rapidement.
            Fiabilité et rapidité sont notre priorité.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: <Clock size={24} />, title: '30 à 60 minutes', desc: 'Délai de livraison estimé selon votre zone' },
              { icon: <MapPin size={24} />, title: 'Libreville Centre-ville', desc: 'Zone de livraison avec frais de 500 à 1 500 FCFA' },
              { icon: <Package size={24} />, title: 'Emballages adaptés', desc: 'Vos repas arrivent chauds et bien protégés' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(255,107,0,0.15)', color: 'var(--orange)', width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: 1, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <a href="#contact" className="btn-primary">Commander maintenant</a>
          </div>
        </motion.div>

        {/* Right - Map visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 24, padding: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 80, marginBottom: 20 }}>🗺️</div>
          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--orange)', marginBottom: 16 }}>ZONE DE LIVRAISON</h3>
          <div className="zones-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {['Centre-ville', 'Quartier Louis', 'Akanda', 'Owendo', 'Nzeng-Ayong', 'PK5-PK12'].map(zone => (
              <div key={zone} style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)', padding: '10px 16px', borderRadius: 10, fontSize: '0.9rem', fontWeight: 500 }}>
                📍 {zone}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 20, padding: '12px 20px', background: 'rgba(46,125,50,0.15)', border: '1px solid rgba(46,125,50,0.3)', borderRadius: 12, fontSize: '0.85rem', color: 'var(--vert-light)' }}>
            ✅ Livraison disponible 7j/7 de 10h à 22h
          </div>
        </motion.div>
      </div>

      <style>{`
        .livraison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (max-width: 768px) {
          #livraison {
            padding: 80px 6% !important;
          }

          .livraison-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          #livraison .section-title {
            font-size: clamp(2.2rem, 10vw, 3rem);
          }

          #livraison .tag {
            display: inline-block;
          }

          /* Carte zones : 1 colonne sur très petit écran */
          @media (max-width: 420px) {
            .zones-grid {
              grid-template-columns: 1fr !important;
            }
          }

          #livraison .btn-primary {
            display: block;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}