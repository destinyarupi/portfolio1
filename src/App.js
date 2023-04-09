import './App.css';
import { useEffect, useState } from 'react';
import { NavBar, Hero, Sponsors, About, Collections, Creators, CTA, FAQ, Footer } from './assets/data/Exports'

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <>
      {
        loading ?
        <div className='loader-bg'>
          <span className='follow-the-leader'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </span>
        </div>
        :
        <div className='app'>
        <header data-aos="fade-in">
          <NavBar />
        </header>
        <main>
          <Hero />
          <Sponsors />
          <About />
          <Collections />
          <Creators />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        </div>
      }
    </>
  )
}

export default App