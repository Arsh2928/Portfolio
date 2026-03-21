import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../data'
import { getIcon } from '../icons'

function SkillCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.55, ease: 'easeOut' }}
      className="skill-card"
      style={{
        ['--pct']: `${item.pct}%`,
        ['--fill-scale']: `${item.pct / 100}`,
        ['--float-delay']: `${(index % 10) * 0.35}s`,
        ['--brand-color']: item.borderColor.replace('0.25)', '1)'),
        ['--brand-glow']: item.borderColor.replace('0.25)', '0.35)'),
      }}
    >
      <div className="skill-card__fill" aria-hidden="true" />

      <div className="skill-card__content">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 10 }}>
          <div className="skill-logo-box" style={{
            width: 38, height: 38, borderRadius: 10,
            background: item.bg, border: `1px solid ${item.borderColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: item.borderColor.replace('0.25)', '0.9)')
          }}>
            <div style={{ transform: 'scale(1.2)', display: 'flex' }}>{getIcon(item.name)}</div>
          </div>
          <div className="skill-card__name">{item.name}</div>
        </div>
        <div className="skill-card__pct">{item.pct}%</div>
      </div>
    </motion.div>
  )
}

function SkillCategory({ cat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.55 }}
      className="skill-category"
      style={{ ['--cat-color']: cat.color }}
    >
      {/* Category label */}
      <div className="skill-category__header">
        <div className="skill-category__accent" />
        <span className="skill-category__label">{cat.cat}</span>
      </div>

      <div className="skills-grid">
        {cat.items.map((item, i) => (
          <SkillCard key={item.name} item={item} index={index * 10 + i} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="bg-alt skills-premium">
      <div id="skills" className="section-wrap">
        <p className="section-label">02 // Skills</p>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="section-title"
        >
          Technical <em style={{ color: '#6366F1' }}>Arsenal</em>
        </motion.h2>
        <p className="section-sub">Hover a skill to reveal its proficiency as a liquid fill.</p>

        <div className="skills-categories-grid">
          {SKILLS.map((cat, i) => (
            <SkillCategory key={cat.cat} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
