import { motion } from 'framer-motion'
import { ArrowDown, Star, Clock, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0D0D0D 0%, #1a0a00 50%, #0D0D0D 100%)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '100px 5% 60px',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(circle, #FF6B00 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Orange glow */}
      <div style={{
        position: 'absolute', right: '-10%', top: '20%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />

      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Logo image mobile (visible uniquement sur mobile, au-dessus du texte) */}
        <motion.div
          className="hero-logo-mobile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ display: 'none', justifyContent: 'center', alignItems: 'center', marginBottom: 32 }}>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 20px 40px rgba(255,107,0,0.4))' }}>
            <img src="/images/logo_nyama.png" alt="Nyama Fast" style={{ width: 180, height: 180, objectFit: 'contain' }} />
          </motion.div>
        </motion.div>

        {/* Left — Texte */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <span className="tag">🌍 Libreville • Gabon</span>

          <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', lineHeight: 0.9, marginBottom: 24 }}>
            <span style={{ color: 'var(--blanc)' }}>RAPIDE.</span><br />
            <span style={{ color: 'var(--orange)' }}>LOCAL.</span><br />
            <span style={{ color: 'var(--blanc)' }}>IRRÉSISTIBLE.</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
            Fusion unique entre la cuisine africaine traditionnelle et les saveurs internationales.
            Burgers, plats locaux, wraps — livrés en 30 à 60 min sur Libreville.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="#menu" className="btn-primary" style={{ fontSize: '1.05rem' }}>Voir le menu</a>
            <a href="#how" className="btn-outline" style={{ fontSize: '1.05rem' }}>Comment commander</a>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              { icon: <Clock size={18} />, val: '30-60 min', label: 'Livraison' },
              { icon: <Star size={18} />, val: 'Dès 500 FCFA', label: 'À partir de' },
              { icon: <MapPin size={18} />, val: 'Libreville', label: 'Zone couverte' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ color: 'var(--orange)' }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.1rem', letterSpacing: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gris)', textTransform: 'uppercase', letterSpacing: 2 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Logo desktop avec badges */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 30px 60px rgba(255,107,0,0.4))' }}>
            <img src="/images/logo_nyama.png" alt="Nyama Fast" style={{ width: 'clamp(180px, 25vw, 320px)', height: 'clamp(180px, 25vw, 320px)', objectFit: 'contain' }} />
          </motion.div>

          {/* Floating badges */}
          {[
            { emoji: '🌿', text: 'Local', top: '10%', left: '5%' },
            { emoji: '⚡', text: 'Rapide', top: '15%', right: '5%' },
            { emoji: '🇬🇦', text: 'Gabon', bottom: '20%', left: '0%' },
            { emoji: '🔥', text: 'Populaire', bottom: '15%', right: '5%' },
          ].map(b => (
            <motion.div key={b.text}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: Math.random() * 2 }}
              style={{
                position: 'absolute', ...b,
                background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,107,0,0.3)',
                borderRadius: 12, padding: '8px 14px',
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.85rem', fontWeight: 600,
              }}>
              <span>{b.emoji}</span> {b.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
        style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', color: 'var(--orange)', cursor: 'pointer' }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <ArrowDown size={28} />
      </motion.div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (max-width: 768px) {
          #hero {
            padding: 100px 6% 80px !important;
            align-items: flex-start !important;
          }

          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          /* Affiche le logo compact en haut sur mobile */
          .hero-logo-mobile {
            display: flex !important;
          }

          /* Cache la colonne droite (logo large avec badges) sur mobile */
          .hero-right {
            display: none !important;
          }

          .hero-left {
            text-align: center;
          }

          .hero-left .tag {
            display: inline-block;
          }

          .hero-left p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-left > div:first-of-type {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}