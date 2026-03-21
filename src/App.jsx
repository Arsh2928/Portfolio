import Cursor       from './components/Cursor'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Skills       from './components/Skills'
import Projects     from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Resume       from './components/Resume'
import Contact      from './components/Contact'
import Footer       from './components/Footer'
import WhatsAppChat from './components/WhatsAppChat'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <WhatsAppChat />
      <Footer />
    </>
  )
}
