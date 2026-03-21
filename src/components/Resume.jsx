import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const RESUME_DOWNLOAD = '/Arshdeep_Singh_Resume.pdf'

const HIGHLIGHTS = [
  { icon: '🎓', label: 'Education',       val: 'B.Tech CSE — LPU (CGPA: 8.25)'        },
  { icon: '💻', label: 'Projects',        val: '2 full-stack production apps'          },
  { icon: '⚡', label: 'DSA',             val: '150+ problems on LeetCode & GFG'       },
  { icon: '🍃', label: 'Certifications',  val: '3 verified certificates + 13 badges'  },
]

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="bg-alt">
      <div id="resume" className="section-wrap">
        <p className="section-label">06 // Resume</p>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-title"
        >
          Download My <em style={{ color: '#6366F1' }}>Resume</em>
        </motion.h2>
        <p className="section-sub">
          A complete overview of education, projects, skills, and achievements — one PDF.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(244,114,182,0.06))',
            border: '1.5px solid rgba(99,102,241,0.25)',
            borderRadius: 16, padding: '52px 48px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 48, flexWrap: 'wrap',
          }}
        >
          {/* Left info */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6B7280', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>📄</span> Arshdeep_Singh_Resume.pdf
            </div>

            <div style={{ fontSize: 32, fontWeight: 800, color: '#F0F0FA', marginBottom: 6 }}>
              Arshdeep Singh
            </div>
            <div style={{ color: '#6B7280', fontSize: 14, marginBottom: 28 }}>
              Full Stack Developer · B.Tech CSE · LPU, Punjab
            </div>

            {/* Highlights grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
              {HIGHLIGHTS.map(h => (
                <div key={h.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  padding: '12px 14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 8,
                }}>
                  <span style={{ fontSize: 18 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 2 }}>{h.label}</div>
                    <div style={{ fontSize: 12.5, color: '#F0F0FA', lineHeight: 1.4 }}>{h.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
            <motion.a
              href={RESUME_DOWNLOAD}
              target="_blank"
              rel="noreferrer"
              download="Arshdeep_Singh_Resume.pdf"
              whileHover={{ scale: 1.04, boxShadow: '0 14px 36px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '15px 36px', background: '#6366F1', color: '#fff',
                borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 15,
              }}
            >
              ↓ Download Resume
            </motion.a>

            <a
              href="https://www.linkedin.com/in/arsh2928/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '12px 36px', background: 'rgba(10,102,194,0.12)',
                color: '#93C5FD', border: '1.5px solid rgba(10,102,194,0.3)',
                borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14,
                transition: 'border-color 0.2s',
              }}
            >
              in View LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
