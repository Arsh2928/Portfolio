import { motion } from 'framer-motion'

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Arsh2928' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arsh2928/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Arshdeep2928/' },
  { label: 'GFG',      href: 'https://www.geeksforgeeks.org/profile/arsh2928' },
  { label: 'Email',    href: 'mailto:arshdeep17022005@gmail.com' },
]

export default function Footer() {
  return (
    <footer style={{
      background: '#0A1120',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '26px 36px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexWrap: 'wrap', gap: 14,
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6B7280' }}>
        © 2025 <span style={{ color: '#6366F1' }}>Arshdeep Singh</span> — Built with React + Framer Motion
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        {LINKS.map(l => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noreferrer"
            whileHover={{ y: -3, color: '#6366F1' }}
            style={{ color: '#6B7280', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
          >
            {l.label}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}
