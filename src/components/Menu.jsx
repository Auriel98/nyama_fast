import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

const categories = [
  {
    id: 'burgers', label: '🍔 Burgers', items: [
      { name: 'Burger Classique', desc: 'Viande ou poulet grillé, salade, tomate, sauce maison', price: 2500, popular: true, image: '/images/menu/burger-classique.jpeg' },
      { name: 'Burger Double', desc: 'Double steak juteux, double fromage, sauce spéciale', price: 3500, popular: false, image: '/images/menu/burger-double.png' },
      { name: 'Menu Burger Complet', desc: 'Burger + frites dorées + boisson de votre choix', price: 4500, popular: true, image: '/images/menu/menu-burger-complet.jpeg' },
      { name: 'Le Bacon Burger', desc: 'Un cheeseburger auquel on ajoute des tranches de bacon grillé et croustillant.', price: 6500, popular: true, image: '/images/menu/bacon-burger.png' },
      { name: 'Le Chicken Burger', desc: 'Un filet de poulet (pané ou grillé), de la mayonnaise.', price: 5500, popular: true, image: '/images/menu/chiken-burger.png' },
      { name: 'Le Veggie Burger', desc: 'Une galette de légumes, de légumineuses (pois chiches, haricots rouges) ou un substitut de viande (type "Beyond Meat").', price: 5500, popular: true, image: '/images/menu/veggie-burger.png' },
      { name: 'Le Burger Gourmet', desc: "Ingrédients nobles comme du foie gras, de la truffe, du bleu d'Auvergne, ou des oignons confits. Le pain est souvent une brioche artisanale.", price: 6500, popular: false, image: '/images/menu/burger-gourmet.jpeg' },
      { name: 'Le Smash Burger', desc: "Le steak n'est pas épais ; il est écrasé très finement sur une plaque brûlante pour créer une croûte caramélisée et ultra-savoureuse.", price: 6500, popular: false, image: '/images/menu/smash-burger.png' },
    ]
  },
  {
    id: 'africain', label: '🌍 Plats Africains', items: [
      { name: 'Poulet Braisé + Alloco', desc: 'Poulet braisé tendre avec alloco croustillant', price: 3000, popular: true, image: '/images/menu/poulet-braise-alloco.jpeg' },
      { name: 'Poulet Braisé + Riz', desc: 'Poulet braisé savoureux accompagné de riz blanc parfumé', price: 3000, popular: false, image: '/images/menu/poulet-braise-riz.jpeg' },
      { name: 'Poisson Grillé + Riz', desc: 'Poisson frais du Gabon grillé avec riz et sauce locale', price: 3500, popular: false, image: '/images/menu/poisson-grille.jpeg' },
      { name: 'Poulet Nyembwe', desc: 'Poulet à la sauce graine (spécialité gabonaise nyembwe)', price: 4000, popular: true, image: '/images/menu/poulet-nyembwe.jpeg' },
      { name: 'Atanga + Poisson Fumé', desc: 'Prunes africaines servies avec poisson fumé', price: 2500, popular: false, image: '/images/menu/atanga-poisson.jpg' },
      { name: 'Riz Jollof + Poulet', desc: 'Riz épicé ouest-africain accompagné de poulet', price: 3000, popular: true, image: '/images/menu/jollof-rice.png' },
      { name: 'Attiéké + Poisson', desc: 'Semoule de manioc avec poisson frit', price: 3000, popular: false, image: '/images/menu/attieke-poisson.jpeg' },
      { name: 'Thieboudienne', desc: 'Riz au poisson à la sénégalaise', price: 3500, popular: false, image: '/images/menu/thieboudienne.jpeg' },
    ]
  },
  {
    id: 'wraps', label: '🌯 Snacks & Wraps', items: [
      { name: 'Wrap Poulet', desc: 'Wrap croustillant garni de poulet grillé, crudités et sauce', price: 2500, popular: false, image: '/images/menu/wrap-poulet.jpeg' },
      { name: 'Wrap Viande', desc: 'Wrap savoureux avec viande épicée, légumes frais et sauce', price: 2800, popular: false, image: '/images/menu/wrap-viande.jpeg' },
      { name: 'Wrap Poisson', desc: 'Wrap au poisson grillé avec légumes et sauce maison', price: 2700, popular: false, image: '/images/menu/wrap-poisson.png' },
      { name: 'Wrap Mixte', desc: 'Mélange de poulet et viande avec crudités fraîches', price: 3000, popular: true, image: '/images/menu/wrap-mixte.png' },
      { name: 'Tacos Poulet', desc: 'Tacos garni de poulet, frites et sauce fromagère', price: 3000, popular: true, image: '/images/menu/tacos-poulet.png' },
      { name: 'Tacos Viande', desc: 'Tacos avec viande épicée, frites et sauce spéciale', price: 3200, popular: false, image: '/images/menu/tacos-viande.png' },
      { name: 'Burger Classique', desc: 'Burger avec steak, salade, tomate et fromage', price: 3000, popular: true, image: '/images/menu/burger-classique.jpeg' },
      { name: 'Hot Dog', desc: 'Pain garni de saucisse, ketchup, moutarde et oignons', price: 2000, popular: false, image: '/images/menu/hotdog.png' },
    ]
  },
  {
    id: 'extras', label: '🍟 Accompagnements', items: [
      { name: 'Frites Maison', desc: 'Frites croustillantes à souhait', price: 1000, popular: false, image: '/images/menu/frites-maison.jpeg' },
      { name: 'Alloco', desc: 'Bananes plantain frites traditionnelles', price: 1000, popular: true, image: '/images/menu/alloco.jpeg' },
      { name: 'Bananes Plantain', desc: 'Bananes plantain grillées dorées', price: 1200, popular: false, image: '/images/menu/bananes-plantain.jpeg' },
      { name: 'Eau', desc: 'Eau fraîche', price: 500, popular: false, image: '/images/menu/eau.png' },
      { name: 'Soda', desc: 'Coca, Fanta, Sprite…', price: 800, popular: false, image: '/images/menu/boissons.jpeg' },

      { name: 'Jus Local', desc: 'Jus de fruits locaux naturels', price: 1000, popular: true, image: '/images/menu/boissons.png' },
    ]
  },
]

const options = [
  { label: 'Supplément fromage', price: '+500 FCFA' },
  { label: 'Supplément viande', price: '+1 000 FCFA' },
  { label: 'Supplément sauce', price: '+300 FCFA' },
  { label: 'Grande portion', price: '+500-1000 FCFA' },
]

const fallbackEmoji = { burgers: '🍔', africain: '🍗', wraps: '🌯', extras: '🍟' }

function AddButton({ item }) {
  const { addToCart, cart } = useCart()
  const [flash, setFlash] = useState(false)
  const inCart = cart.find(i => i.name === item.name)

  const handleAdd = () => {
    addToCart(item)
    setFlash(true)
    setTimeout(() => setFlash(false), 800)
  }

  return (
    <button
      onClick={handleAdd}
      style={{
        background: flash ? 'var(--vert, #22c55e)' : 'var(--orange)',
        border: 'none', color: 'white', width: 36, height: 36, borderRadius: '50%',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.3s, transform 0.2s', position: 'relative',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      {flash ? <Check size={18} /> : <Plus size={18} />}
      {inCart && (
        <span style={{
          position: 'absolute', top: -6, right: -6, background: 'white',
          color: 'var(--orange)', borderRadius: '50%', width: 18, height: 18,
          fontSize: '0.6rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1.5px solid var(--orange)',
        }}>{inCart.qty}</span>
      )}
    </button>
  )
}

export default function Menu() {
  const [active, setActive] = useState('burgers')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const current = categories.find(c => c.id === active)

  return (
    <section id="menu" ref={ref} style={{ padding: '100px 5%', background: 'var(--noir)', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} style={{ textAlign: 'center', marginBottom: 60 }}>
          <span className="tag">Notre Menu Digital</span>
          <h2 className="section-title">CE QUI NOUS<br />REND CÉLÈBRES</h2>
        </motion.div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8, marginBottom: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              style={{
                background: active === c.id ? 'var(--orange)' : 'rgba(255,255,255,0.06)',
                color: 'white', border: active === c.id ? 'none' : '1px solid rgba(255,255,255,0.12)',
                padding: '10px 22px', borderRadius: 50, cursor: 'pointer', whiteSpace: 'nowrap',
                fontFamily: 'DM Sans', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.3s',
              }}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, marginBottom: 60 }}>
          {current.items.map((item, i) => (
            <motion.div key={item.name}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              style={{
                background: 'var(--noir-soft)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20, overflow: 'hidden', position: 'relative', transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(255,107,0,0.15)' }}>

              <div style={{ height: 160, overflow: 'hidden', position: 'relative', background: 'linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,107,0,0.05))' }}>
                <img
                  src={item.image} alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.style.display = 'flex'
                    e.currentTarget.parentElement.style.alignItems = 'center'
                    e.currentTarget.parentElement.style.justifyContent = 'center'
                    e.currentTarget.parentElement.style.fontSize = '60px'
                    e.currentTarget.parentElement.innerText = fallbackEmoji[active]
                  }}
                />
              </div>

              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.2rem', letterSpacing: 1, flex: 1 }}>{item.name}</h3>
                  {item.popular && <span style={{ background: 'var(--vert)', color: 'white', fontSize: '0.6rem', fontWeight: 700, padding: '3px 8px', borderRadius: 20, letterSpacing: 1, whiteSpace: 'nowrap', marginLeft: 8 }}>⭐ TOP</span>}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginBottom: 16, lineHeight: 1.5 }}>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Bebas Neue', fontSize: '1.4rem', color: 'var(--orange)', letterSpacing: 1 }}>{item.price.toLocaleString()} FCFA</span>
                  <AddButton item={item} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Options */}
        <div style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: 20, padding: 32 }}>
          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', color: 'var(--orange)', marginBottom: 20, letterSpacing: 2 }}>✨ Personnalisez votre commande</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {options.map(o => (
              <div key={o.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', background: 'rgba(255,255,255,0.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '0.9rem' }}>{o.label}</span>
                <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.9rem' }}>{o.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}