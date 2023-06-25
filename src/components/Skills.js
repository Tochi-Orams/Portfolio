import { useEffect, useState } from "react"
import HTML from "../assets/Logos/HTML.png"
import CSS from "../assets/Logos/CSS.png"
import JS from "../assets/Logos/JS.png"
import TS from "../assets/Logos/TS.png"
import node from "../assets/Logos/node.png"
import react from "../assets/Logos/React.png"
import Sass from "../assets/Logos/Sass.png"
import boot from "../assets/Logos/Bootstrap.png"
import git from "../assets/Logos/Git.png"
import VS from "../assets/Logos/VS.png"
import FB from "../assets/Logos/Firebase.png"
import CL from "../assets/Logos/CL.png"
import SQL from "../assets/Logos/SQL.png"
import py from "../assets/Logos/PY.png"
import JPNB from "../assets/Logos/Jupyter.png"

import fig from "../assets/Logos/Fig.png"
import PS from "../assets/Logos/PS.png"
import AE from "../assets/Logos/AE.png"
import blend from "../assets/Logos/Blend.png"

const Skills = ({page}) => {
    const [logo, setLogo] = useState("none")
    const [logo2, setLogo2] = useState("none")
    const [tch, setTch] = useState(false)
    const [oth, setOth] = useState(false)

    // load animation
    const elems = [
        document.getElementById("tSkills"),
        document.getElementById("oSkills"),
        document.getElementById("otherLogos"),
        document.getElementById("techLogos"),
        document.getElementById("techName"),
        document.getElementById("otherName"),
        document.getElementById("skTitle"),
    ]

    useEffect(() => {
        if (page === "about2") {
            elems.forEach(x => {
                x?.classList.add("intro")
            })
            setTimeout(() => {
                elems.forEach(x => {
                    x?.classList.add("norm")
                })
            }, 4000);
        } else {
            elems.forEach(x => {
                x?.classList.remove("intro")
                x?.classList.remove("norm")
            })
        }
    // eslint-disable-next-line
    }, [window.scrollY])

    //  icon hover effects
    const handelHover = (x) => {
        setLogo(x)
        document.getElementById("tName").textContent = x
    }

    const handelHover2 = (x) => {
        setLogo2(x)
        document.getElementById("oName").textContent = x
    }

    useEffect(() => {
        if (logo === "none") {
            document.getElementById("tName").textContent = "Hover over an icon"
        }
        if (logo2 === "none") {
            document.getElementById("oName").textContent = "Hover over an icon"
        }
    }, [logo, logo2])

    useEffect(() => {
        if (tch) {
            document.getElementById("techLogos").classList.add("active")
            document.getElementById("tName").classList.add("active")
        } else {
            document.getElementById("techLogos").classList.remove("active")
            document.getElementById("tName").classList.remove("active")
        }
        if (oth) {
            document.getElementById("otherLogos").classList.add("active")
            document.getElementById("oName").classList.add("active")
        } else {
            document.getElementById("otherLogos").classList.remove("active")
            document.getElementById("oName").classList.remove("active")
        }

    }, [tch, oth])

    return (
        <section id="skills-section">
            <h1 id="skTitle">My Skills</h1>
            <div id="tSkills" onMouseOver={() => setTch(true)} onMouseLeave={() => setTch(false)}>
                <h2>Technical Skills</h2>
                <div id="techLogos">
                    <img src={HTML} alt="HTML5" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={CSS} alt="CSS3" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={JS} alt="JavaScript" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={TS} alt="Typescript" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={node} alt="Node JS" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={react} alt="React" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={Sass} alt="Sass" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={boot} alt="Bootstrap" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={git} alt="Git" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={VS} alt="Visual Studio Code" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={FB} alt="Firebase" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={CL} alt="Command Line" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={SQL} alt="MySQL" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={py} alt="Python" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                    <img src={JPNB} alt="Jupyter Notebook" onMouseOver={(e) => handelHover(e.target.alt)} onMouseLeave={() => setLogo("none")}/>
                </div>
                <div id="techName">
                    <h4 id="tName">Hover over an icon</h4>
                </div>
            </div>
            <div id="oSkills" onMouseOver={() => setOth(true)} onMouseLeave={() => setOth(false)}>
                <h2>Creative Skills</h2>
                <div id="otherLogos">
                    <img src={fig} alt="Figma" onMouseOver={(e) => handelHover2(e.target.alt)} onMouseLeave={() => setLogo2("none")}/>
                    <img src={PS} alt="Adobe Photoshop" onMouseOver={(e) => handelHover2(e.target.alt)} onMouseLeave={() => setLogo2("none")}/>
                    <img src={AE} alt="Adobe After Effects" onMouseOver={(e) => handelHover2(e.target.alt)} onMouseLeave={() => setLogo2("none")}/>
                    <img src={blend} alt="Blender 3D" onMouseOver={(e) => handelHover2(e.target.alt)} onMouseLeave={() => setLogo2("none")}/>
                </div>
                <div id="otherName">
                    <h4 id="oName">Hover over an icon</h4>
                </div>
            </div>
            <div className="sBkg"></div>
        </section>
    )
}

export default Skills;