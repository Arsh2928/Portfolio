import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: 'easeOut' },
})

const STATS = [
  { n: '150+', l: 'DSA Solved'       },
  { n: '13',   l: 'MongoDB Badges'   },
  { n: '8.25', l: 'CGPA'             },
  { n: '2',    l: 'Projects Shipped' },
]

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 32px 60px', maxWidth: 1180, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 64, alignItems: 'center', width: '100%' }}>

        {/* ── LEFT ── */}
        <div>
          {/* Open badge */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', animation: 'pulse-green 2s infinite' }} />
            <span style={{ fontSize: 12, color: '#6B7280', fontFamily: "'JetBrains Mono', monospace" }}>
              // open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.22)}
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 0.92, marginBottom: 22, color: '#F0F0FA' }}
          >
            Arshdeep<br />
            <span style={{ color: '#6366F1' }}>Singh</span>
          </motion.h1>

          {/* Roles */}
          <motion.div {...fadeUp(0.36)} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22, flexWrap: 'wrap' }}>
            {['Full Stack Developer', 'DSA Enthusiast', 'B.Tech CSE @ LPU'].map((r, i) => (
              <span key={r} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: '#6B7280' }}>{r}</span>
                {i < 2 && <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'inline-block' }} />}
              </span>
            ))}
          </motion.div>

          {/* Desc */}
          <motion.p {...fadeUp(0.48)} style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.85, maxWidth: 460, marginBottom: 36 }}>
            Crafting end-to-end web applications — React frontends, Node.js backends, MongoDB databases — with a passion for clean code and 150+ DSA problems solved.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.6)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 46 }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects ›
            </button>
            <a className="btn-ghost" href="https://github.com/Arsh2928" target="_blank" rel="noreferrer">⌥ GitHub</a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/arsh2928/" target="_blank" rel="noreferrer">in LinkedIn</a>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp(0.74)} style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {STATS.map(s => (
              <div key={s.l}>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#6366F1', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 10, color: '#6B7280', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── AVATAR ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ position: 'relative', width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          {/* Grid bg glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(99,102,241,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />

          {/* Rings */}
          <div style={{ position: 'absolute', width: 290, height: 290, borderRadius: '50%', border: '1px dashed rgba(99,102,241,0.22)', animation: 'spin-cw 24s linear infinite' }} />
          <div style={{ position: 'absolute', width: 228, height: 228, borderRadius: '50%', border: '1px dashed rgba(244,114,182,0.18)', animation: 'spin-ccw 17s linear infinite' }} />

          {/* Core avatar */}
          <div style={{
            width: 172, height: 172, borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2,
            border: '3px solid rgba(255,255,255,0.12)',
            boxShadow: '0 0 60px rgba(99,102,241,0.3), 0 0 120px rgba(99,102,241,0.1)',
          }}>
            <img
              src="/avatar.png"
              alt="Arshdeep Singh"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Floating badges */}
          {[
            { label: 'React.js',   cls: 'b0', style: { top: 14, right: -24, border: '1.5px solid rgba(34,211,238,0.4)', color: '#22D3EE', animation: 'float-a 2.9s ease-in-out infinite', boxShadow: '0 4px 16px rgba(34,211,238,0.12)' } },
            { label: 'Node.js',    cls: 'b1', style: { bottom: 30, left: -36, border: '1.5px solid rgba(34,197,94,0.4)', color: '#22C55E', animation: 'float-b 3.2s ease-in-out infinite', boxShadow: '0 4px 16px rgba(34,197,94,0.12)' } },
            { label: 'MongoDB',    cls: 'b2', style: { bottom: 8, right: 8, border: '1.5px solid rgba(0,237,100,0.4)', color: '#00ED64', animation: 'float-c 2.7s ease-in-out infinite', boxShadow: '0 4px 16px rgba(0,237,100,0.12)' } },
          ].map(b => (
            <div
              key={b.label}
              style={{
                position: 'absolute', zIndex: 5,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10.5, fontWeight: 700,
                padding: '5px 11px', borderRadius: 6,
                background: '#0A1120', whiteSpace: 'nowrap',
                ...b.style,
              }}
            >
              {b.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
