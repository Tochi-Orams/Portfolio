import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import GHO from "../assets/GHO.png"

const Projects = ({page, VW}) => {
    const [go, setGo] = useState(false)
    const [tog, setTog] = useState(0)
    const [proj, setProj] = useState("PR")
    const [AP, setAP] = useState(false)
    const [title, setTitle] = useState("none")
    const [activeProj, setActiveProj] = useState(title)
    const [projLink, setProjLink] = useState("pixelpraise")

    const elems = [
        document.getElementById("track"),
        document.getElementById("pContent"),
        document.querySelector(".VP"),
        document.querySelector(".aProj"),
    ]

    useEffect(() => {
        if (page === "projects") {
            elems.forEach(x => {
                x?.classList.add("active")
            })
            setTimeout(() => {
                elems[2]?.classList.add("norm")
                elems[3]?.classList.add("norm")
                elems[2]?.classList.remove("active")
                elems[3]?.classList.remove("active")
                document.getElementById("allProj")?.classList.add("norm")
            }, 2500);
        } else {
            elems.forEach(x => {
                x?.classList.remove("active")
            })
            elems[2]?.classList.remove("norm")
            elems[3]?.classList.remove("norm")
            document.getElementById("allProj")?.classList.remove("norm")
        }
    // eslint-disable-next-line
    }, [page])

    useEffect(() => {
        if (page === "projects") {
            setTimeout(() => {
                setGo(true)
            }, 300);
        } else {
            setGo(false)
        }

    }, [page])

    const conts = {
        GS: document.getElementById("GS"),
        LL: document.getElementById("LL"),
        PR: document.getElementById("PR"),
    }
    const imgs = {
        GS: document.querySelectorAll(".I1"),
        LL: document.querySelectorAll(".I2"),
        PR: document.querySelectorAll(".I3"),
    }

    let start, progress, stopID, GS, LL, PR
    const step = (timestamp) => {
        if (!start || progress > 20000) {
            start = timestamp
        }

        stopID = window.requestAnimationFrame(step)

        progress = timestamp - start
        LL = (-45 + (progress * 21) / 2000)
        PR = (25 + (progress * 21) / 2000)
        GS = (95 + (progress * 21) / 2000)

        if (LL < -10) {
            setProj("PR")
        } else if (LL > -10 && LL < 60) {
            setProj("LL")
        } else if (LL > 130) {
            setProj("PR")
        }else {
            setProj("GS")
        }

        if (PR < 57) {
            setTog("PR")
        } else if (PR > 57 && PR < 127) {
            setTog("LL")
        } else if (PR > 197) {
            setTog("PR")
        } else {
            setTog("GS")
        }

        if (LL > 150) {
            conts.LL.style.right = `${LL - 210}%`
        } else {
            conts.LL.style.right = `${LL}%`
        }
        if (PR > 150) {
            conts.PR.style.right = `${PR - 210}%`
        } else {
            conts.PR.style.right = `${PR}%`
        }
        if (LL > 20) {
            conts.GS.style.right = `${GS - 210}%`
        } else {
            conts.GS.style.right = `${GS}%`
        }

        imgs.LL.forEach(elem => {
            if (100 - ((LL + 45) / 2.1) - 5 < 0) {
                elem.style.objectPosition = `${100 - ((LL + 45) / 2.1) + 95}% center`
            } else {
                elem.style.objectPosition = `${100 - ((LL + 45) / 2.1) - 5}% center`
            }
        });
        imgs.PR.forEach(elem => {
            if (100 - ((PR - 25) / 2.1) + 50 > 100) {
                elem.style.objectPosition = `${100 - ((PR - 25) / 2.1) - 50}% center`
            } else {
                elem.style.objectPosition = `${100 - ((PR - 25) / 2.1) + 50}% center`
            }
        });
        imgs.GS.forEach(elem => {
            if (100 - ((GS - 95) / 2.1) - 95 < 0) {
                elem.style.objectPosition = `${100 - ((GS - 95) / 2.1) + 5}% center`
            } else {
                elem.style.objectPosition = `${100 - ((GS - 95) / 2.1) - 95}% center`
            }
        });
    }

    useEffect(() => {
        if (go && VW > 1700) {
            requestAnimationFrame(step)
        }
        if (VW < 1700) {
            cancelAnimationFrame(stopID)
        }
    // eslint-disable-next-line
    }, [go, VW])

    const pics = [
        document.querySelectorAll(".I1"),
        document.querySelectorAll(".I2"),
        document.querySelectorAll(".I3"),
    ]
    const borders = [
        document.querySelectorAll(".B1"),
        document.querySelectorAll(".B2"),
        document.querySelectorAll(".B3"),
    ]

    useEffect(() => {
        pics.forEach(x => {
            x.forEach(i => {
                i?.classList.remove("active")
            })
        })
        borders.forEach(x => {
            x.forEach(i => {
                i?.classList.remove("active")
            })
        })

        if (proj === "GS") {
            pics[0].forEach(x => x?.classList.add("active"))
            borders[0].forEach(x => x?.classList.add("active"))
            setProjLink("greenstreak-website")
        } else if (proj === "LL") {
            pics[1].forEach(x => x?.classList.add("active"))
            borders[1].forEach(x => x?.classList.add("active"))
            setProjLink("little-lemon-reservations")
        } else {
            pics[2].forEach(x => x?.classList.add("active"))
            borders[2].forEach(x => x?.classList.add("active"))
            setProjLink("pixelpraise")
        }
    // eslint-disable-next-line
    }, [proj])

    useEffect(() => {
        if (go) {
            document.getElementById("projName")?.classList.add("active")
            document.getElementById("pDesc")?.classList.add("active")
            document.querySelector(".VP")?.classList.add("toggle")
            setTimeout(() => {
                document.getElementById("projName")?.classList.remove("active")
                document.getElementById("pDesc")?.classList.remove("active")
                document.querySelector(".VP")?.classList.remove("toggle")
            }, 350);
        }
    // eslint-disable-next-line
    }, [tog])

    // Showing all projects
    useEffect(() => {
        if (AP) {
            document.getElementById("allProj")?.classList.add("active")
            document.getElementById("APB")?.classList.add("active")
        } else {
            document.getElementById("allProj")?.classList.remove("active")
            document.getElementById("APB")?.classList.remove("active")
        }
        if (page !== "projects") {
            setAP(false)
            document.getElementById("allProj")?.classList.remove("active")
            document.getElementById("APB")?.classList.remove("active")
        }
    }, [AP, page])

    useEffect(() => {
        if (VW < 1700 && page === "projects") {
            document.getElementById("allProj")?.classList.add("active")
            setTitle("hover")
        } else {
            document.getElementById("allProj")?.classList.remove("active")
            setTitle("none")
        }
    }, [VW, page])

    return (
        <section id="projects-section">
            <h1 id="pSecTitle">Projects</h1>
            <div id="pContent">
                {proj === "PR" ?
                <div>
                    <span className="titleContainer2">
                        <span id="projName"><h1>PixelPraise</h1></span>
                    </span>
                    <div id="UL"></div>
                    <span className="descContainer">
                        <h4 id="pDesc">PixelPraise is a simplistically stylish web app where photographers can upload and get feedback on their pictures from a community of fellow photography enthusiasts</h4>
                    </span>
                </div>
                : proj === "LL" ?
                <div>
                    <span className="titleContainer">
                        <span id="projName"><h1>Little Lemon Reservations</h1></span>
                    </span>
                    <div id="UL"></div>
                    <span className="descContainer">
                        <h4 id="pDesc">The Little Lemon reservation page aesthetically packages all the features you would want to see when making a table reservation, including dynamically updating availability slots</h4>
                    </span>
                </div>
                :
                <div>
                    <span className="titleContainer2">
                        <span id="projName"><h1>GSEL Website</h1></span>
                    </span>
                    <div id="UL"></div>
                    <span className="descContainer">
                        <h4 id="pDesc">The GreenStreak Energies Ltd. website goes beyond the typical corporate websites, featuring satisfying interactivity and a responsive layout for seamless use across devices</h4>
                    </span>
                </div>}
            </div>
            <div id="track">
                <div id="GS">
                    <span className="pCont">
                        <img className="projImg I1" alt="" src={require("../assets/GS1.png")}/>
                        <div className="brdr B1"></div>
                    </span>
                    <span className="pCont">
                        <img className="projImg I1 stag" alt="" src={require("../assets/GS2.png")}/>
                        <div className="brdr B1 stag"></div>
                    </span>
                    <span className="pCont">
                        <img className="projImg I1" alt="" src={require("../assets/GS3.png")}/>
                        <div className="brdr B1"></div>
                    </span>
                </div>
                <div id="LL">
                    <span className="pCont">
                        <img className="projImg I2" alt="" src={require("../assets/LL1.png")}/>
                        <div className="brdr B2"></div>
                    </span>
                    <span className="pCont">
                        <img className="projImg I2 stag" alt="" src={require("../assets/LL2.png")}/>
                        <div className="brdr B2 stag"></div>
                    </span>
                    <span className="pCont">
                        <img className="projImg I2" alt="" src={require("../assets/LL3.png")}/>
                        <div className="brdr B2"></div>
                    </span>
                </div>
                <div id="PR">
                    <span className="pCont">
                        <img className="projImg I3 stag" alt="" src={require("../assets/PR1.png")}/>
                        <div className="brdr B3 stag"></div>
                    </span>
                    <span className="pCont">
                        <img className="projImg I3" alt="" src={require("../assets/PR2.png")}/>
                        <div className="brdr B3"></div>
                    </span>
                    <span className="pCont">
                        <img className="projImg I3 stag" alt="" src={require("../assets/PR3.png")}/>
                        <div className="brdr B3 stag"></div>
                    </span>
                </div>
            </div>
            <Link to={projLink}>
                <button type="button" className="button VP">
                    <span>
                        <h3>View Project</h3>
                        <FontAwesomeIcon id="rArrow" icon={faArrowRight} size="2x" />
                    </span>
                </button>
            </Link>
            <button type="Button" className="button aProj" onClick={() => setAP(!AP)}>
                {AP ?
                <span>
                    <h4>Back</h4>
                    <FontAwesomeIcon id="dChev" icon={faChevronUp} size="2x" />
                </span>
                :
                <span>
                    <h4>All Projects</h4>
                    <FontAwesomeIcon id="dChev" icon={faChevronDown} size="2x" />
                </span>}
            </button>
            <a href="google.com" target="_blank" rel="noreferrer" id="port">
                <img src={GHO} alt="GitHub"/>
                <p>This Portfolio</p>
            </a>
            <div id="APB">
                <div id="allProj">
                    {activeProj === "PR" ? <h1>PixelPraise</h1>
                    : activeProj === "LL" ? <h1>Little Lemon Reservations</h1>
                    : activeProj === "GS" ? <h1>GSEL Website</h1>
                    : activeProj === "hover" ? <div id="hovT"><h2>Hover over a project to see more details</h2></div>
                    : <h1>All Projects</h1>}
                    <div id="projs">
                        <Link to="pixelpraise">
                            <div className="projCard" onMouseEnter={() => setActiveProj("PR")} onMouseLeave={() => setActiveProj(title)}>
                                <img alt="" src={require("../assets/PR1.png")}/>
                                <h2 id="APPR">PixelPraise</h2>
                            </div>
                        </Link>
                        <Link to="little-lemon-reservations">
                            <div className="projCard" onMouseEnter={() => setActiveProj("LL")} onMouseLeave={() => setActiveProj(title)}>
                                <img alt="" src={require("../assets/LL2.png")}/>
                                <h2 id="pTop">Little Lemon Reservations</h2>
                            </div>
                        </Link>
                        <Link to="greenstreak-website">
                            <div className="projCard" onMouseEnter={() => setActiveProj("GS")} onMouseLeave={() => setActiveProj(title)}>
                                <img alt="" src={require("../assets/GS1.png")}/>
                                <h2 id="pTop2">GSEL Website</h2>
                            </div>
                        </Link>
                    </div>
                    <div id="apDesc">
                        {activeProj === "PR" ?
                        <h4 id="pcDesc">PixelPraise is a simplistically stylish web app where photographers can upload and get feedback on their pictures from a community of fellow photography enthusiasts</h4>
                        : activeProj === "LL" ?
                        <h4 id="pcDesc">The Little Lemon reservation page aesthetically packages all the features you would want to see when making a table reservation, including dynamically updating availability slots</h4>
                        : activeProj === "GS" ?
                        <h4 id="pcDesc">The GreenStreak Energies Ltd. website goes beyond the typical corporate websites, featuring satisfying interactivity and a responsive layout for seamless use across devices</h4>
                        : <h4> </h4>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;