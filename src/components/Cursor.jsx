import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  let ringX = 0, ringY = 0
  let mouseX = 0, mouseY = 0
  let rafId = null

  useEffect(() => {
    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top  = mouseY + 'px'
      }
    }

    const lerp = () => {
      ringX += (mouseX - ringX) * 0.11
      ringY += (mouseY - ringY) * 0.11
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top  = ringY + 'px'
      }
      rafId = requestAnimationFrame(lerp)
    }
    rafId = requestAnimationFrame(lerp)

    const onEnter = () => document.body.classList.add('hovering')
    const onLeave = () => document.body.classList.remove('hovering')
    const targets = 'a, button, [data-hover]'

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll(targets).forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Re-attach after any dynamic renders
    const mo = new MutationObserver(() => {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
