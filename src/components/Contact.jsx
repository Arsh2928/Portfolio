import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CONTACT_LINKS } from '../data'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const send = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/arshdeep17022005@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio inquiry from ${form.name}`,
          message: form.message,
          _subject: `[Portfolio] ${form.subject || 'New Message'} — from ${form.name}`,
          _captcha: 'false',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus(null), 5500)
  }

  const inputStyle = (focused) => ({
    width: '100%', padding: '13px 16px',
    background: '#0E1525',
    border: `1.5px solid ${focused ? '#6366F1' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 8, color: '#F0F0FA',
    fontFamily: "'Outfit', sans-serif", fontSize: 14, outline: 'none',
    transition: 'border-color 0.2s',
  })

  const [focused, setFocused] = useState({})
  const onFocus = k => setFocused(p => ({ ...p, [k]: true }))
  const onBlur  = k => setFocused(p => ({ ...p, [k]: false }))

  return (
    <div id="contact" className="section-wrap">
      <p className="section-label">07 // Contact</p>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="section-title"
      >
        Let's <em style={{ color: '#F472B6' }}>Connect</em>
      </motion.h2>
      <p className="section-sub">
        Open to internships, full-time roles, and freelance projects. My inbox is always open.
      </p>

      <div className="contact-grid-main" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 36, alignItems: 'start' }}>

        {/* ── LINKS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {CONTACT_LINKS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_self' : '_blank'}
              rel="noreferrer"
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '15px 18px',
                background: '#0C1220',
                border: '1.5px solid rgba(255,255,255,0.07)',
                borderRadius: 11, textDecoration: 'none', color: '#F0F0FA',
                transition: 'border-color 0.25s, transform 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${item.color}45`
                e.currentTarget.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 38, height: 38, borderRadius: 8, flexShrink: 0,
                background: `${item.color}14`, border: `1.5px solid ${item.color}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: item.color, fontWeight: 800,
                fontSize: item.icon === 'in' ? 12 : 16,
              }}>
                {item.icon}
              </div>

              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B7280', marginBottom: 2 }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#F0F0FA' }}>
                  {item.val}
                </div>
              </div>

              <div style={{ marginLeft: 'auto', color: '#6B7280', fontSize: 14 }}>›</div>
            </motion.a>
          ))}
        </div>

        {/* ── FORM ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#0C1220',
            border: '1.5px solid rgba(255,255,255,0.07)',
            borderRadius: 14, padding: '32px 30px',
          }}
        >
          <div style={{ fontSize: 19, fontWeight: 700, color: '#F0F0FA', marginBottom: 22 }}>
            Send me a message
          </div>

          {/* Name + Email row */}
          <div className="contact-grid-inputs" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
            {[
              { key: 'name',  label: 'Name',  placeholder: 'Your name',       type: 'text'  },
              { key: 'email', label: 'Email', placeholder: 'your@email.com',  type: 'email' },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key}>
                <label style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key]}
                  onChange={e => update(key, e.target.value)}
                  placeholder={placeholder}
                  style={inputStyle(focused[key])}
                  onFocus={() => onFocus(key)}
                  onBlur={() => onBlur(key)}
                />
              </div>
            ))}
          </div>

          {/* Subject */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              Subject
            </label>
            <input
              type="text"
              value={form.subject}
              onChange={e => update('subject', e.target.value)}
              placeholder="What's this about?"
              style={inputStyle(focused.subject)}
              onFocus={() => onFocus('subject')}
              onBlur={() => onBlur('subject')}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 11, fontWeight: 700, color: '#6B7280', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              Message
            </label>
            <textarea
              value={form.message}
              onChange={e => update('message', e.target.value)}
              placeholder="Tell me about your opportunity or project..."
              rows={5}
              style={{ ...inputStyle(focused.message), resize: 'vertical' }}
              onFocus={() => onFocus('message')}
              onBlur={() => onBlur('message')}
            />
          </div>

          {/* Submit */}
          <motion.button
            onClick={send}
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: '100%', padding: '14px 28px',
              background: status === 'sending' ? '#4F46E5' : '#6366F1',
              color: '#fff', border: 'none', borderRadius: 9,
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              fontFamily: "'Outfit', sans-serif",
              opacity: status === 'sending' ? 0.75 : 1,
              transition: 'opacity 0.2s, background 0.2s',
            }}
          >
            {status === 'sending' ? (
              <>
                <span style={{ display: 'inline-block', animation: 'spin-cw 0.8s linear infinite', fontSize: 14 }}>◌</span>
                Sending...
              </>
            ) : (
              'Send Message ↗'
            )}
          </motion.button>

          {/* Status messages */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#22C55E', fontSize: 13, fontWeight: 600, marginTop: 14 }}
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#EF4444', fontSize: 13, fontWeight: 600, marginTop: 14 }}
              >
                ✗ Failed to send. Email me at arshdeep17022005@gmail.com
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
