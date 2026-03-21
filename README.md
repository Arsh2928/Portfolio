# Arshdeep Singh — Portfolio

A production-grade personal portfolio built with **React 18 + Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📦 Deploy to Vercel (recommended — free)

```bash
npm install -g vercel
vercel
```
Follow the prompts — Vercel auto-detects Vite. Your live URL is ready in ~60 seconds.

## 📦 Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          # Custom dual-layer cursor with lerp animation
│   │   ├── Nav.jsx             # Fixed navbar with scroll-active highlighting
│   │   ├── Hero.jsx            # Landing with avatar, floating badges, stats
│   │   ├── Skills.jsx          # Skill bars with % reveal on hover
│   │   ├── Projects.jsx        # Project cards with live screenshots
│   │   ├── Certifications.jsx  # Clickable certificate cards
│   │   ├── Achievements.jsx    # Platform stats + academic strip
│   │   ├── Resume.jsx          # Download + Google Drive preview
│   │   ├── Contact.jsx         # Contact links + email form (FormSubmit)
│   │   └── Footer.jsx
│   ├── data/
│   │   └── index.js            # All portfolio data — edit here!
│   ├── App.jsx
│   ├── index.css               # Global styles + CSS animations
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## ✉️ Contact Form Setup

The form uses **FormSubmit** (no backend needed).  
On first submit, FormSubmit sends a **verification email** to `arshdeep17022005@gmail.com`.  
Click the link in that email — then all future submissions go straight to your inbox.

## 🎨 Customization

All portfolio content lives in `src/data/index.js`:
- Update `SKILLS` to change skill bars and percentages
- Update `PROJECTS` with new projects (add `img` URL for screenshot)
- Update `CERTIFICATIONS` with new certificates
- Update `ACHIEVEMENTS` with new platforms/stats
- Update `CONTACT_LINKS` for new social links

## 🛠 Tech Stack

- **React 18** — UI framework
- **Framer Motion 10** — animations & transitions
- **Vite 5** — build tool & dev server
- **React Icons** — icon library
- **FormSubmit** — zero-backend contact form
- **JetBrains Mono + Outfit** — typography

## 📸 Live Project Screenshots

The Super Furniture House project auto-loads a live screenshot via `thum.io`.  
Format: `https://image.thum.io/get/width/1200/crop/780/YOUR_URL`
