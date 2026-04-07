import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Heart, Globe, Users } from 'lucide-react'

const atouts = [
  { icon: <Globe size={28} />, title: 'Fusion Afrique-Monde', desc: 'Cuisine africaine traditionnelle rencontre les saveurs internationales pour une expérience unique.' },
  { icon: <Zap size={28} />, title: 'Service Ultra-Rapide', desc: 'Commandez en ligne, payez et recevez votre repas en 30 à 60 minutes à domicile.' },
  { icon: <Heart size={28} />, title: 'Produits Locaux', desc: 'Nous valorisons les producteurs locaux : viande, poisson, alloco, plantain du Gabon.' },
  { icon: <Users size={28} />, title: 'Pour Tous les Budgets', desc: 'De 500 FCFA à 4 500 FCFA, chacun trouve son repas idéal chez Nyama fast.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ padding: '100px 5%', background: 'var(--noir-soft)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: '-5%', top: '50%', transform: 'translateY(-50%)', width: 400, height: 400, background: 'radial-gradient(circle, rgba(46,125,50,0.08) 0%, transparent 70%)', borderRadius: '50%' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="tag">Notre histoire</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>Nyama <br />fast<br />LIBREVILLE</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 20 }}>
              Né d'une vision simple : offrir des repas rapides, délicieux et accessibles qui célèbrent 
              la richesse culinaire du Gabon tout en embrassant les tendances mondiales.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 32 }}>
              Nyama fast Libreville est plus qu'un fast-food — c'est un mouvement culinaire 
              qui connecte tradition et modernité au cœur de la capitale gabonaise.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px', background: 'rgba(255,107,0,0.08)', borderLeft: '3px solid var(--orange)', borderRadius: '0 12px 12px 0' }}>
              <span style={{ fontSize: '2rem' }}>💬</span>
              <div>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem', color: 'var(--orange)' }}>RAPIDE, LOCAL, IRRÉSISTIBLE</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gris)', letterSpacing: 2, textTransform: 'uppercase' }}>Notre slogan</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {atouts.map((a, i) => (
              <motion.div key={a.title}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,107,0,0.15)',
                  borderRadius: 16, padding: 24, transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.background = 'rgba(255,107,0,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,107,0,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}>
                <div style={{ color: 'var(--orange)', marginBottom: 12 }}>{a.icon}</div>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.1rem', marginBottom: 8, letterSpacing: 1 }}>{a.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{a.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  )
}