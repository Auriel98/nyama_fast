import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Tag, Gift, Star } from 'lucide-react'

const promos = [
  { icon: <Tag size={28} />, label: 'Menu Étudiant', desc: 'Repas complet à tarif réduit pour les étudiants sur présentation de carte', price: '3 000 FCFA', color: '#2E7D32' },
  { icon: <Star size={28} />, label: '-10% Fidélité', desc: 'Réduction de 10% pour nos clients réguliers sur sélection de commandes', price: '-10%', color: '#FF6B00' },
  { icon: <Gift size={28} />, label: '1 Acheté = 1 Offert', desc: 'Offres spéciales sur une sélection de produits en promotion', price: '🎁 Offert', color: '#1565C0' },
]

export default function Promo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section style={{ padding: '100px 5%', background: 'var(--noir-soft)' }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="tag">Offres Spéciales</span>
          <h2 className="section-title">PROMOTIONS<br />& FIDÉLITÉ</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {promos.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              style={{
                background: 'var(--noir)', border: `1px solid ${p.color}33`,
                borderRadius: 20, padding: 32, textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              whileHover={{ y: -8, boxShadow: `0 20px 40px ${p.color}22` }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: `${p.color}22`, color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>{p.icon}</div>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: p.color, marginBottom: 4, letterSpacing: 1 }}>{p.price}</div>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.3rem', marginBottom: 12, letterSpacing: 1 }}>{p.label}</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}
          style={{ marginTop: 60, background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,107,0,0.05))', border: '1px solid rgba(255,107,0,0.25)', borderRadius: 20, padding: 40, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', marginBottom: 12 }}>SUIVEZ-NOUS SUR LES RÉSEAUX</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>Restez connectés pour ne manquer aucune promo ou nouveauté !</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📸 Instagram', '🎵 TikTok', '👍 Facebook'].map(r => (
              <a key={r} href="#" className="btn-outline" style={{ fontSize: '0.9rem', padding: '10px 24px' }}>{r}</a>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){ section > div > div:nth-child(2) { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}