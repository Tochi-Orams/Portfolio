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

  // Change page state on scroll
  // const changeSec = () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY < limit/8) {
  //     setPage("home")
  //   } else if (window.scrollY >= limit/8 && window.scrollY < limit/2) {
  //     setPage("about")
  //   } else if (window.scrollY >= limit/2 && window.scrollY < limit/4 + limit/2) {
  //     setPage("about2")
  //   } else if (window.scrollY >= limit/4 + limit/2 && window.scrollY < limit) {
  //     setPage("projects")
  //   } else if (window.scrollY >= limit) {
  //     setPage("contact")
  //   }
  // }

  const changeSec = () => {
    if (window.scrollY < limit * 0.2) {
      setPage("home")
    } else if (window.scrollY >= limit * 0.2 && window.scrollY < limit * 0.4) {
      setPage("about")
    } else if (window.scrollY >= limit * 0.4 && window.scrollY < limit * 0.6) {
      setPage("about2")
    } else if (window.scrollY >= limit * 0.6 && window.scrollY < limit * 0.8) {
      setPage("projects")
    } else if (window.scrollY >= limit * 0.8) {
      setPage("contact")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handlePlx()
      changeSec()
    })
    return () => window.removeEventListener("scroll", () => {
      handlePlx()
      changeSec()
    })
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
