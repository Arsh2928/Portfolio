import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '../data'

export default function Nav() {
  const [active, setActive]   = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]       = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = [...NAV_ITEMS].reverse().map(n => n.toLowerCase())
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: 64, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 36px',
          background: scrolled ? 'rgba(5,10,20,0.92)' : 'rgba(5,10,20,0.7)',
          backdropFilter: 'blur(22px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          transition: 'background 0.3s',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo('home')}
          style={{ fontSize: 22, fontWeight: 900, color: '#6366F1', letterSpacing: '-0.04em', cursor: 'pointer' }}
        >
          AS<span style={{ color: '#F0F0FA' }}>.</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 3 }}>
          {NAV_ITEMS.map(n => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: active === n.toLowerCase() ? 'rgba(99,102,241,0.13)' : 'none',
                border: 'none',
                fontSize: 13, fontWeight: 600, padding: '7px 13px', borderRadius: 7,
                color: active === n.toLowerCase() ? '#6366F1' : '#6B7280',
                cursor: 'pointer', fontFamily: "'Outfit', sans-serif",
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { if (active !== n.toLowerCase()) e.target.style.color = '#F0F0FA' }}
              onMouseLeave={e => { if (active !== n.toLowerCase()) e.target.style.color = '#6B7280' }}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <a
            href="/Arshdeep_Singh_Resume.pdf"
            target="_blank" rel="noreferrer" download="Arshdeep_Singh_Resume.pdf"
            style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '8px 17px',
              background: '#6366F1', color: '#fff', borderRadius: 7,
              textDecoration: 'none', fontSize: 12, fontWeight: 700,
            }}
          >
            ↓ Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: '#F0F0FA', fontSize: 20, cursor: 'pointer', lineHeight: 1 }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
              background: '#0A1120', borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '10px 16px',
            }}
          >
            {NAV_ITEMS.map(n => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                style={{
                  display: 'block', width: '100%', background: 'none', border: 'none',
                  fontSize: 15, fontWeight: 600, color: '#F0F0FA',
                  padding: '11px 12px', textAlign: 'left',
                  fontFamily: "'Outfit', sans-serif", borderRadius: 8, cursor: 'pointer',
                }}
              >
                {n}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
