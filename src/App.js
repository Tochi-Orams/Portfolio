import './App.css';

import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Home from './components/Home';
import PixelPraise from './components/PixelPraise';
import LittleLemon from './components/LittleLemon';
import Greenstreak from './components/Greenstreak';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  const [page, setPage] = useState("home")
  const [VW, setVW] = useState(window.innerWidth)
  const prevRef = useRef("none")
  const [cHov, setCHov] = useState(false)
  const [sec, setSec] = useState("main")
  const [mHide, setMHide] = useState(false)

  // Listen for changes in window size
  useEffect (() => {
    window.addEventListener("resize", () => setVW(window.innerWidth))
  })

  // Animating the navigation transitions
  const NB = document.getElementById("navBar")
  const SN = document.querySelector(".secName")

  const lnk = [
      document.getElementById("hm"),
      document.getElementById("ab"),
      document.getElementById("pj"),
      document.getElementById("ct"),
  ]

  useEffect(() => {
    prevRef.current = page
    if (page !== "home") {
      NB?.classList.add("active")
      SN?.classList.add("active")
      document.getElementById("navItems")?.classList.add("inactive")
      for (let i in lnk) {
          lnk[i]?.classList.add("hidden")
      }
    } else {
      document.getElementById("navItems")?.classList.remove("inactive")
      NB?.classList.remove("active")
      SN?.classList.remove("active")
      for (let i in lnk) {
          lnk[i]?.classList.remove("hidden")
      }
    }
  // eslint-disable-next-line
  }, [page])

  // One-page scrolling on link click
  const handleNav = (x) => {
    setPage(x)
    const id = `${x}-section`;
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // change nav display if viewing a project
  useEffect(() => {
    if (sec === "projects") {
      document.getElementById("mNav")?.classList.add("pj")
      document.getElementById("sec")?.classList.add("pj")
      document.getElementById("navBar")?.classList.add("pj")
      document.getElementById("mBkg")?.classList.add("pj")
    } else {
      document.getElementById("mNav")?.classList.remove("pj")
      document.getElementById("sec")?.classList.remove("pj")
      document.getElementById("navBar")?.classList.remove("pj")
      document.getElementById("mBkg")?.classList.remove("pj")
    }
  }, [sec])


  // Music
  const [music, setMusic] = useState({show: false, play: false, wait: false})

  useEffect(() => {
    if (sec === "main" && page === "home") {
      setTimeout(() => {
        setMusic({...music, show: true})
        setTimeout(() => {
          setMusic({...music, show: false})
        }, 1500);
      }, 1000);
    }
    if (sec === "main" && page === "about2") {
      document.getElementById("music")?.classList.add("skl")
    } else {
      document.getElementById("music")?.classList.remove("skl")
    }
  // eslint-disable-next-line
  }, [page, sec])

  useEffect(() => {
    if (music.show) {
      document.getElementById("music")?.classList.add("active")
    } else {
      document.getElementById("music")?.classList.remove("active")
    }
    if (music.play) {
      document.getElementById("music")?.classList.add("playing")
      if (page !== "home") {
        document.getElementById("music")?.classList.add("travel")
      } else if (page === "home" && sec === "main") {
        document.getElementById("music")?.classList.remove("travel")
      }
    } else {
      document.getElementById("music")?.classList.remove("playing")
      if (page === "home" && sec === "main") {
        document.getElementById("music")?.classList.remove("travel")
      }
    }
    if (music.wait) {
      document.getElementById("music")?.classList.add("dis")
      setTimeout(() => {
        document.getElementById("music")?.classList.remove("dis")
        document.getElementById("music")?.classList.remove("travel")
        setMusic({...music, wait: false, play:false})
      }, 1000);
    }
}, [music, page])

useEffect(() => {
  if (sec !== "main") {
    document.getElementById("music")?.classList.add("travel")
    document.getElementById("music")?.classList.remove("skl")
  }
  if (sec !== "main" && !music.play) {
    setMHide(true)
  } else {
    setMHide(false)
  }
// eslint-disable-next-line
}, [sec])

  return (
    <Router>
      <ScrollToTop />
      <main>
        {!mHide && <div id="music"
          onMouseEnter={() => setMusic({...music, show:true})}
          onMouseLeave={() => setMusic({...music, show:false})}
        >
          <div>
            <FontAwesomeIcon id="mIcon" icon={faMusic} size="2x" />
              <audio controls
                onPlay={() => setMusic({...music, play: true})}
                onPause={() => setMusic({...music, play: false})}
                onEnded={() => setMusic({...music, wait: true})}
              >
                <source src={require("./assets/G8.mp3")} type="audio/mpeg" />
                  Audio not supported
              </audio>
          </div>
        </div>}
        <Nav handleNav={handleNav} page={page} prev={prevRef.current} setCHov={setCHov} />
        <MobileNav handleNav={handleNav} page={page} VW={VW} sec={sec} />
        <Routes>
          <Route path="/"
            element={<Home page={page} setPage={setPage} handleNav={handleNav}
            cHov={cHov} VW={VW} sec={sec} setSec={setSec} />}
          />
          <Route path="pixelpraise"
            element={<PixelPraise setPage={setPage} setSec={setSec}
            handleNav={handleNav} />}
          />
          <Route path="little-lemon-reservations"
            element={<LittleLemon setPage={setPage} setSec={setSec}
            handleNav={handleNav} />}
          />
          <Route path="greenstreak-website"
            element={<Greenstreak setPage={setPage} setSec={setSec}
            handleNav={handleNav} />}
          />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
