export default function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(255,107,0,0.15)', padding: '50px 5% 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 44, height: 44, background: 'var(--orange)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🍔</div>
              <div>
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', letterSpacing: 2 }}>Nyama fast</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: 3, textTransform: 'uppercase' }}>Libreville</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 280 }}>
              Fusion de la cuisine africaine et des saveurs internationales. Rapide, local, irrésistible.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
              {['📸', '🎵', '👍'].map(s => (
                <a key={s} href="#" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,0,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}>{s}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Navigation', links: ['Accueil', 'À propos', 'Menu', 'Livraison', 'Contact'] },
            { title: 'Info', links: ['Politique de confidentialité', 'CGU', 'FAQ', 'Programme fidélité'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: 'Bebas Neue', fontSize: '1.1rem', color: 'var(--orange)', letterSpacing: 2, marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--orange)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2025 Nyama fast Libreville. Tous droits réservés.</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>🇬🇦 Fait avec ❤️ à Libreville, Gabon</p>
        </div>
      </div>
      <style>{`@media(max-width:768px){ footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 30px !important; } }`}</style>
    </footer>
  )
}