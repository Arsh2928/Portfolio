import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa'

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const whatsappNumber = "919116795395"

  const handleSend = (e) => {
    e.preventDefault()
    // Give a default polite message if they just click send empty.
    const text = message.trim() || "Hi Arshdeep! I saw your portfolio and I would like to connect with you."
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setMessage('')
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button that scales down when the chat is open */}
      <motion.button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 50,
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#fff',
          boxShadow: '0 10px 15px -3px rgba(34,197,94,0.3), 0 4px 6px -4px rgba(34,197,94,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.1, backgroundColor: '#1ebd5a' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <FaWhatsapp size={32} />
      </motion.button>

      {/* Interactive Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            style={{
              position: 'fixed', bottom: 24, right: 24, zIndex: 1000,
              width: 340, maxWidth: '90vw', background: '#111B2D',
              borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: "'Outfit', sans-serif"
            }}
          >
            {/* Header section designed to look like a WhatsApp profile header */}
            <div style={{ background: '#25D366', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ background: '#fff', borderRadius: '50%', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FaWhatsapp size={22} color="#25D366" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#fff' }}>Chat with Arshdeep</h3>
                  <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Typically replies within minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}>
                <FaTimes size={18} />
              </button>
            </div>

            {/* Simulated Chat Interface Body */}
            <div style={{ padding: '24px 20px', minHeight: 180, display: 'flex', flexDirection: 'column', gap: 16, background: '#0C1220' }}>
              {/* Dummy "Incoming" message bubble */}
              <div style={{
                background: '#1F2937', color: '#F3F4F6', padding: '14px 18px',
                borderRadius: '0 16px 16px 16px', fontSize: 13.5, lineHeight: 1.6,
                maxWidth: '90%', alignSelf: 'flex-start', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}>
                👋 Hi there! Thanks for checking out my portfolio. Do you have any questions or want to collaborate? Just type your message below and it will send directly to my WhatsApp!
              </div>
            </div>

            {/* User Input Area */}
            <form onSubmit={handleSend} style={{ display: 'flex', padding: '14px 16px', background: '#111B2D', borderTop: '1px solid rgba(255,255,255,0.05)', gap: 12, alignItems: 'center' }}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message..."
                style={{
                  flex: 1, background: '#1F2937', border: 'none', color: '#fff',
                  padding: '12px 18px', borderRadius: 24, fontSize: 13.5, outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              />
              <button
                type="submit"
                style={{
                  background: '#25D366', border: 'none', width: 44, height: 44,
                  borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', flexShrink: 0, transition: 'transform 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaPaperPlane size={14} style={{ marginLeft: -3 }} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
