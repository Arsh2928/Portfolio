import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '../data'
import { getIcon } from '../icons'

function ProjectCard({ proj, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [imgErr, setImgErr] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.18, duration: 0.65 }}
      style={{
        background: '#0C1220',
        border: '1.5px solid rgba(255,255,255,0.07)',
        borderRadius: 16, overflow: 'hidden',
        marginBottom: 22,
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${proj.color}30`
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.45)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className={(proj.isLive || proj.img) ? 'project-grid-2' : 'project-grid-1'}>

        {/* Screenshot */}
        {(proj.isLive || proj.img) && (
          <div style={{ position: 'relative', background: '#0E1525', minHeight: 360, overflow: 'hidden' }}>
            {!imgErr ? (
              <img
                src={proj.img}
                alt={proj.title}
                onError={() => setImgErr(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            ) : (
              <div style={{
                width: '100%', height: '100%', minHeight: 360,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14,
                background: `linear-gradient(135deg, ${proj.color}10, ${proj.color}04)`,
              }}>
                <div style={{ fontSize: 72 }}>🛒</div>
                <div style={{ color: '#6B7280', fontSize: 13, fontFamily: "'JetBrains Mono', monospace" }}>
                  {proj.title}
                </div>
                <a href={proj.live} target="_blank" rel="noreferrer"
                  style={{ fontSize: 12, color: proj.color, textDecoration: 'none', border: `1px solid ${proj.color}40`, padding: '6px 14px', borderRadius: 6 }}>
                  Visit Site ↗
                </a>
              </div>
            )}

            {/* LIVE badge */}
            {proj.isLive && (
            <div style={{
              position: 'absolute', top: 14, left: 14,
              display: 'flex', alignItems: 'center', gap: 5,
              background: '#16A34A', color: '#fff',
              fontSize: 9.5, fontWeight: 800, padding: '4px 10px', borderRadius: 5,
              letterSpacing: '0.08em', fontFamily: "'JetBrains Mono', monospace",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#86EFAC', animation: 'pulse-green 2s infinite' }} />
              LIVE
            </div>
            )}
          </div>
        )}

        {/* Info panel */}
        <div className="project-info-panel" style={{
          padding: (proj.isLive || proj.img) ? '40px 36px' : '42px 44px',
          borderLeft: (proj.isLive || proj.img) ? '1.5px solid rgba(255,255,255,0.07)' : 'none',
          borderTop: !(proj.isLive || proj.img) ? `3px solid ${proj.color}` : 'none',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#6B7280', marginBottom: 10 }}>
            0{index + 1} / {proj.subtitle}
          </div>

          <h3 style={{ fontSize: 27, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 12, color: '#F0F0FA' }}>
            {proj.title}
          </h3>

          <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.8, marginBottom: 16 }}>
            {proj.desc}
          </p>

          {/* Highlights */}
          <ul style={{ listStyle: 'none', marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {proj.highlights.map(h => (
              <li key={h} style={{ fontSize: 12.5, color: '#6B7280', display: 'flex', gap: 8, alignItems: 'flex-start', lineHeight: 1.5 }}>
                <span style={{ color: proj.color, flexShrink: 0, marginTop: 1 }}>→</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            {proj.tech.map(t => (
              <span key={t} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600,
                padding: '4px 10px', borderRadius: 4,
                background: `${proj.color}10`, border: `1.5px solid ${proj.color}28`, color: proj.color,
                display: 'flex', alignItems: 'center', gap: 6
              }}>
                <span style={{ display: 'flex', opacity: 0.85, transform: 'scale(0.95)' }}>{getIcon(t)}</span> {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {proj.live && (
              <motion.a
                whileHover={{ translateY: -3, boxShadow: `0 12px 28px ${proj.color}45` }}
                href={proj.live} target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '10px 22px',
                  background: proj.color, color: '#fff', borderRadius: 8,
                  textDecoration: 'none', fontSize: 13, fontWeight: 700,
                }}
              >
                ↗ Live Demo
              </motion.a>
            )}
            <motion.a
              whileHover={{ translateY: -3 }}
              href={proj.github} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px',
                background: '#0E1525', color: '#F0F0FA',
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 700,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            >
              ⌥ GitHub Repo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div id="projects" className="section-wrap">
      <p className="section-label">03 // Projects</p>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="section-title"
      >
        What I've <em style={{ color: '#F472B6' }}>Built</em>
      </motion.h2>
      <p className="section-sub">
        Production-grade full-stack apps with live demos, live screenshots, and detailed tech breakdowns.
      </p>

      <div>
        {PROJECTS.map((proj, i) => (
          <ProjectCard key={proj.id} proj={proj} index={i} />
        ))}
      </div>
    </div>
  )
}
