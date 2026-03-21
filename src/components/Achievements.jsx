import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ACHIEVEMENTS } from '../data'

function AchievementCard({ ach, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={ach.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.13, duration: 0.55 }}
      whileHover={{ translateY: -6 }}
      style={{
        textDecoration: 'none', display: 'block',
        background: '#0C1220',
        border: '1.5px solid rgba(255,255,255,0.07)',
        borderRadius: 13, padding: 26,
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${ach.color}50`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6B7280', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 6 }}>
            {ach.platform}
          </div>
          <div style={{ fontSize: 46, fontWeight: 900, color: ach.color, lineHeight: 1 }}>
            {ach.num}
          </div>
          <div style={{ fontSize: 12.5, color: '#6B7280', marginTop: 5 }}>
            {ach.label}
          </div>
        </div>
        <div style={{
          width: 46, height: 46, borderRadius: 11, fontSize: 22,
          background: ach.bg, border: `1.5px solid ${ach.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {ach.icon}
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 12.5, color: '#6B7280', lineHeight: 1.6, marginBottom: 14 }}>
        {ach.desc}
      </p>

      {/* Topic chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
        {ach.topics.map(t => (
          <span key={t} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600,
            padding: '3px 8px', borderRadius: 4,
            background: ach.bg, border: `1px solid ${ach.color}22`, color: ach.color,
          }}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 600 }}>View Profile ↗</div>
    </motion.a>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div id="achievements" className="section-wrap">
      <p className="section-label">05 // Achievements</p>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="section-title"
      >
        Coding <em style={{ color: '#A3E635' }}>Milestones</em>
      </motion.h2>
      <p className="section-sub">
        Problem-solving across platforms with verified credentials and consistent academic excellence.
      </p>

      {/* Platform cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 18 }}>
        {ACHIEVEMENTS.map((ach, i) => (
          <AchievementCard key={ach.platform} ach={ach} index={i} />
        ))}
      </div>

      {/* Academic strip */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2 }}
        style={{
          background: '#0C1220',
          border: '1.5px solid rgba(255,255,255,0.07)',
          borderRadius: 13, padding: '28px 36px',
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0,
        }}
      >
        {[
          { n: '8.25', l: 'CGPA — LPU Computer Science', c: '#A3E635' },
          { n: '90%',  l: 'Intermediate — The Gurukul School', c: '#22D3EE' },
          { n: '87%',  l: 'Matriculation — The Genius School', c: '#F472B6' },
        ].map((s, j) => (
          <div key={s.l} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 180 }}>
            {j > 0 && <div style={{ width: 1, height: 52, background: 'rgba(255,255,255,0.07)', margin: '0 40px' }} />}
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: s.c, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: '#6B7280', marginTop: 5, lineHeight: 1.4 }}>{s.l}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
