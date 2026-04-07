import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Tag, Gift, Star } from 'lucide-react'

const promos = [
  { icon: <Tag size={28} />, label: 'Menu Étudiant', desc: 'Repas complet à tarif réduit pour les étudiants sur présentation de carte', price: '3 000 FCFA', color: '#2E7D32' },
  { icon: <Star size={28} />, label: '-10% Fidélité', desc: 'Réduction de 10% pour nos clients réguliers sur sélection de commandes', price: '-10%', color: '#FF6B00' },
  { icon: <Gift size={28} />, label: '1 Acheté = 1 Offert', desc: 'Offres spéciales sur une sélection de produits en promotion', price: '🎁 Offert', color: '#1565C0' },
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/NOGC.faveur',
    color: '#1877F2',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@NOGC.faveur',
    color: '#ffffff',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/NOGC.faveur',
    color: '#E1306C',
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 60,
            background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,107,0,0.05))',
            border: '1px solid rgba(255,107,0,0.25)',
            borderRadius: 20, padding: 40, textAlign: 'center',
          }}>
          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', marginBottom: 12 }}>SUIVEZ-NOUS SUR LES RÉSEAUX</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>Restez connectés pour ne manquer aucune promo ou nouveauté !</p>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '14px 28px', borderRadius: 14,
                  background: s.gradient || `${s.color}18`,
                  border: `1px solid ${s.color}55`,
                  color: s.name === 'TikTok' ? '#fff' : s.color,
                  textDecoration: 'none',
                  fontWeight: 700, fontSize: '0.95rem',
                  letterSpacing: 0.5,
                  transition: 'box-shadow 0.3s',
                  boxShadow: `0 4px 20px ${s.color}22`,
                  backdropFilter: 'blur(8px)',
                }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>{s.icon}</span>
                <span>{s.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media(max-width: 768px) {
          section > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}