import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Hero = ({handleNav, page, VW}) => {
    const [intro, setIntro] = useState(false)
    const [CTA, setCTA] = useState(false)

    useEffect(() => {
        if (page === "home") {
            setTimeout(() => {
                setIntro(true)
                setCTA(true)
                setTimeout(() => {
                    setIntro(false)
                    setCTA(false)
                }, 1500);
            }, 1000);
        }
    // eslint-disable-next-line
    }, [window.scrollY])

    useEffect(() => {
        if (CTA) {
            document.querySelector(".CTA").classList.add("active")
        } else {
            document.querySelector(".CTA").classList.remove("active")
        }
        if (intro) {
            document.getElementById("intro").classList.add("active")
        } else {
            document.getElementById("intro").classList.remove("active")
        }
    }, [intro, CTA])

    return (
        <section id="home-section">
            <div id="intro"
              onMouseEnter={() => setIntro(true)}
              onMouseLeave={() => setIntro(false)}
            >
                <h3>HEY! I'M</h3>
                <h1>TOCHI ORAMASIONWU</h1>
                <h4>
                    A Full-Stack Web Developer passionate about creating beautiful
                    and modern interactive web applications.
                </h4>
                {VW > 1750 ?
                <div id="underLinks">
                    <a className="resume" href="https://drive.google.com/file/d/1ceGHLdI4a7KpC8M3nw80dNa2fKFgIXIQ/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    <a href="https://github.com/Tochi-Orams" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a href="https://www.linkedin.com/in/tochi-oramasionwu/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                </div>
                :
                <div id="underLinks">
                    <a href="https://github.com/Tochi-Orams" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    <a className="resume" href="https://drive.google.com/file/d/1ceGHLdI4a7KpC8M3nw80dNa2fKFgIXIQ/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    <a href="https://www.linkedin.com/in/tochi-oramasionwu/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                </div>}
            </div>
            <button type="button" className="CTA"
              onClick={() => handleNav("projects")}
              onMouseEnter={() => setCTA(true)}
              onMouseLeave={() => setCTA(false)}
            >
                <h2>See My Work</h2>
                <FontAwesomeIcon id="dArrow" icon={faArrowDown} size="3x" />
            </button>
        </section>
    )
}

export default Hero;