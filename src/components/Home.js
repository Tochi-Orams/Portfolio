import { useState, useEffect } from 'react';

import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';

const Home = ({page, setPage, handleNav, VW, cHov, setSec}) => {
    setTimeout(() => {
        setSec("main")
    }, 100);

  // Background parallax
  const [pos, setPos] = useState(0)

  const limit = document.body.offsetHeight - window.innerHeight

  const handlePlx = () => {
    setPos(-185/limit * window.scrollY)
  }

  useEffect(() => {
    document.getElementById("background").style.top = `${pos}%`
    if (pos < -25) {
        document.getElementById("bgLay").style.opacity = 0.8
    } else {
        document.getElementById("bgLay").style.opacity = 0
    }
  }, [pos])

  useEffect(() => {
    window.addEventListener("scroll", handlePlx)
    return () => window.removeEventListener("scroll", handlePlx)
  })


  // Change page state on scroll
  useEffect(() => {
    if (window.scrollY < limit/8) {
      setPage("home")
    } else if (window.scrollY >= limit/8 && window.scrollY < limit/2) {
      setPage("about")
    } else if (window.scrollY >= limit/2 && window.scrollY < limit/4 + limit/2) {
      setPage("about2")
    } else if (window.scrollY >= limit/4 + limit/2 && window.scrollY < limit) {
      setPage("projects")
    } else if (window.scrollY >= limit) {
      setPage("contact")
    }
  })

  return (
    <>
        <Hero handleNav={handleNav} page={page} VW={VW} />
        <About page={page} VW={VW} />
        <Skills page={page} />
        <Projects page={page} VW={VW} />
        <Contact page={page} cHov={cHov} />
        <video autoPlay muted loop id="background">
            <source src={require("../assets/BKG.mp4")} type="video/mp4" />
        </video>
        <div id="bgLay"></div>
    </>
  )
}

export default Home;
