import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, ShoppingCart, CreditCard, Truck } from 'lucide-react'

const steps = [
  { icon: <Search size={32} />, num: '01', title: 'Choisissez vos plats', desc: 'Parcourez notre menu digital et sélectionnez vos plats favoris.' },
  { icon: <ShoppingCart size={32} />, num: '02', title: 'Ajoutez au panier', desc: 'Personnalisez vos commandes avec suppléments et options.' },
  { icon: <CreditCard size={32} />, num: '03', title: 'Payez en sécurité', desc: 'Mobile Money, carte bancaire ou paiement à la livraison.' },
  { icon: <Truck size={32} />, num: '04', title: 'Suivez votre commande', desc: 'Suivez votre livraison en temps réel jusqu\'à votre porte.' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="how" ref={ref} style={{ padding: '100px 5%', background: 'var(--noir-soft)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ textAlign: 'center', marginBottom: 70 }}>
          <span className="tag">Simple & Rapide</span>
          <h2 className="section-title">COMMENT ÇA<br />MARCHE ?</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 60, left: '12%', right: '12%', height: 2, background: 'linear-gradient(to right, var(--orange), rgba(255,107,0,0.1))', zIndex: 0 }} />

          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              {/* Icon circle */}
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: i === 0 ? 'var(--orange)' : 'rgba(255,107,0,0.1)',
                border: `2px solid ${i === 0 ? 'var(--orange)' : 'rgba(255,107,0,0.3)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px', color: i === 0 ? 'white' : 'var(--orange)',
                transition: 'all 0.3s',
              }}>
                {s.icon}
              </div>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '2.5rem', color: 'rgba(255,107,0,0.2)', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.3rem', letterSpacing: 1, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Payment methods */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
          style={{ marginTop: 60, textAlign: 'center' }}>
          <p style={{ color: 'var(--gris)', fontSize: '0.85rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>Moyens de paiement acceptés</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📱 Airtel Money', '💳 Moov Money', '🏦 Carte Bancaire', '💵 Paiement à la livraison'].map(m => (
              <div key={m} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: 50, fontSize: '0.9rem', fontWeight: 500 }}>{m}</div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){ #how > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </section>
  )
}