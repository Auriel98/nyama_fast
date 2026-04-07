import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'

const WHATSAPP_NUMBER = '+24174550732' // <-- Remplace par ton numéro

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { cart, removeFromCart, updateQty, clearCart, total, count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Comment ça marche', href: '#how' },
    { label: 'Livraison', href: '#livraison' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleOrder = () => {
    if (cart.length === 0) return
    const lines = cart.map(i => `• ${i.name} x${i.qty} — ${(i.price * i.qty).toLocaleString()} FCFA`)
    const message = [
      '🍔 *Nouvelle commande — Street Bites Libreville*',
      '',
      ...lines,
      '',
      `━━━━━━━━━━━━━━━━━━`,
      `💰 *TOTAL : ${total.toLocaleString()} FCFA*`,
      '',
      '📍 Merci de préciser votre adresse de livraison.',
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(13,13,13,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,107,0,0.2)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 5%',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
           <img src="/images/logo_nyama.png" alt="Nyama Fast Logo" style={{ width: 42, height: 42, borderRadius: 12, objectFit: 'cover' }} />            <div>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', letterSpacing: 2, color: 'var(--blanc)', lineHeight: 1 }}>Nyama fast</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--orange)', letterSpacing: 3, textTransform: 'uppercase' }}>Libreville</div>
            </div>
          </a>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', gap: 32, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} style={{ color: 'var(--blanc)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s', opacity: 0.85 }}
                  onMouseEnter={e => { e.target.style.color = 'var(--orange)'; e.target.style.opacity = 1 }}
                  onMouseLeave={e => { e.target.style.color = 'var(--blanc)'; e.target.style.opacity = 0.85 }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Panier icon */}
            <button onClick={() => setCartOpen(true)} style={{
              position: 'relative', background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.3)',
              color: 'var(--orange)', width: 44, height: 44, borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,0,0.25)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,107,0,0.12)'}>
              <ShoppingBag size={20} />
              {count > 0 && (
                <span style={{
                  position: 'absolute', top: -6, right: -6,
                  background: 'var(--orange)', color: 'white', borderRadius: '50%',
                  width: 20, height: 20, fontSize: '0.65rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid var(--noir)',
                }}>{count}</span>
              )}
            </button>

            <a href="#menu" className="btn-primary desktop-cta" style={{ fontSize: '0.85rem', padding: '10px 22px', display: 'flex', alignItems: 'center', gap: 8 }}>
              Commander
            </a>

            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} className="hamburger">
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: 'var(--noir-soft)', padding: '20px 5%', borderTop: '1px solid rgba(255,107,0,0.2)' }}>
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ display: 'block', color: 'var(--blanc)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 500 }}>
                {l.label}
              </a>
            ))}
            <a href="#menu" className="btn-primary" style={{ marginTop: 16, display: 'block', textAlign: 'center' }}>Commander maintenant</a>
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .hamburger { display: block !important; }
            .desktop-cta { display: none !important; }
          }
        `}</style>
      </nav>

      {/* ── Panier Drawer ── */}
      {cartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000 }}>
          {/* Overlay */}
          <div onClick={() => setCartOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }} />

          {/* Drawer */}
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: 420,
            background: 'var(--noir-soft)', display: 'flex', flexDirection: 'column',
            borderLeft: '1px solid rgba(255,107,0,0.2)',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', letterSpacing: 2, margin: 0 }}>Mon Panier</h2>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{count} article{count > 1 ? 's' : ''}</p>
              </div>
              <button onClick={() => setCartOpen(false)} style={{ background: 'rgba(255,255,255,0.07)', border: 'none', color: 'white', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(255,255,255,0.3)' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
                  <p style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: 1 }}>Votre panier est vide</p>
                  <p style={{ fontSize: '0.85rem' }}>Ajoutez des articles depuis le menu</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.name} style={{
                    display: 'flex', gap: 12, alignItems: 'center', padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <img src={item.image} alt={item.name} style={{ width: 56, height: 56, borderRadius: 10, objectFit: 'cover', background: 'rgba(255,107,0,0.1)' }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'Bebas Neue', fontSize: '1rem', letterSpacing: 1, margin: '0 0 4px' }}>{item.name}</p>
                      <p style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{(item.price * item.qty).toLocaleString()} FCFA</p>
                    </div>
                    {/* Qty controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button onClick={() => updateQty(item.name, item.qty - 1)} style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'white', width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Minus size={14} />
                      </button>
                      <span style={{ fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.name, item.qty + 1)} style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: 'white', width: 28, height: 28, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Plus size={14} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.name)} style={{ background: 'none', border: 'none', color: 'rgba(255,80,80,0.7)', cursor: 'pointer', padding: 4 }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.55)' }}>Sous-total</span>
                  <span style={{ fontWeight: 700 }}>{total.toLocaleString()} FCFA</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>Livraison</span>
                  <span style={{ color: 'var(--orange)', fontSize: '0.85rem' }}>À confirmer</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: 1 }}>TOTAL</span>
                  <span style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', color: 'var(--orange)', letterSpacing: 1 }}>{total.toLocaleString()} FCFA</span>
                </div>
                <button onClick={handleOrder} style={{
                  width: '100%', padding: '14px', background: '#25D366',
                  border: 'none', borderRadius: 12, color: 'white', fontFamily: 'Bebas Neue',
                  fontSize: '1.2rem', letterSpacing: 2, cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
                  onMouseLeave={e => e.currentTarget.style.opacity = 1}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Commander via WhatsApp
                </button>
                <button onClick={clearCart} style={{ width: '100%', marginTop: 8, padding: '10px', background: 'transparent', border: '1px solid rgba(255,80,80,0.3)', borderRadius: 12, color: 'rgba(255,80,80,0.7)', cursor: 'pointer', fontSize: '0.85rem', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,80,80,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,80,80,0.5)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,80,80,0.3)' }}>
                  Vider le panier
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}