import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CERTIFICATIONS } from '../data'

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.14, duration: 0.55 }}
      whileHover={{ translateY: -8, boxShadow: '0 28px 64px rgba(0,0,0,0.55)' }}
      style={{
        textDecoration: 'none', display: 'block',
        background: '#0C1220',
        border: '1.5px solid rgba(255,255,255,0.07)',
        borderRadius: 14, overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
    >
      {/* Visual zone */}
      <div style={{
        height: 200, background: cert.bgColor,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 12, position: 'relative', overflow: 'hidden',
      }}>
        {/* Glowing ring */}
        <div style={{
          position: 'absolute', width: 140, height: 140, borderRadius: '50%',
          border: `1px dashed ${cert.accent}25`,
          animation: 'spin-cw 20s linear infinite',
        }} />
        <div style={{
          position: 'absolute', width: 110, height: 110, borderRadius: '50%',
          border: `1px dashed ${cert.accent}15`,
          animation: 'spin-ccw 14s linear infinite',
        }} />

        {/* Certificate image or emoji */}
        {cert.img ? (
          <img
            src={cert.img}
            alt={cert.title}
            style={{
              maxWidth: '85%', maxHeight: 140, objectFit: 'contain',
              position: 'relative', zIndex: 2, borderRadius: 6,
            }}
          />
        ) : (
          <div style={{ fontSize: 58, position: 'relative', zIndex: 2 }}>{cert.emoji}</div>
        )}

        {/* Verified badge */}
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          background: cert.accent, color: cert.accentText,
          fontSize: 9, fontWeight: 800, padding: '3px 8px', borderRadius: 3,
          letterSpacing: '0.12em', fontFamily: "'JetBrains Mono', monospace",
        }}>
          VERIFIED ✓
        </div>

        {/* External link icon */}
        <div style={{ position: 'absolute', top: 12, right: 14, color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>↗</div>
      </div>

      {/* Info */}
      <div style={{ padding: '20px 24px' }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: '#6B7280', marginBottom: 6,
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          {cert.issuer} · {cert.date}
        </div>
        <div style={{ fontSize: 16.5, fontWeight: 700, color: '#F0F0FA', lineHeight: 1.3, marginBottom: 12 }}>
          {cert.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#818CF8', fontSize: 12, fontWeight: 600 }}>
          View Certificate ↗
        </div>
      </div>
    </motion.a>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="bg-alt">
      <div id="certifications" className="section-wrap">
        <p className="section-label">04 // Certifications</p>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title"
        >
          Verified <em style={{ color: '#22D3EE' }}>Credentials</em>
        </motion.h2>
        <p className="section-sub">Click any card to verify the certificate directly online.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
