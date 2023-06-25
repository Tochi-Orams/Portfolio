import { useEffect, useState } from "react";

const Nav = ({handleNav, page, prev, setCHov}) => {
    const [hov, setHov] = useState(false)
    const headings = ["home", "about", "projects", "contact", "about2"]

    const pg = {
        home: document.getElementById("homePg"),
        about: document.getElementById("aboutPg"),
        proj: document.getElementById("projectPg"),
        cont: document.getElementById("contactPg")
    }
    const actives = {
        allSecs: document.getElementById("allSecs"),
        hLink: document.getElementById("hLink"),
        aLink: document.getElementById("aLink"),
        pLink: document.getElementById("pLink"),
        cLink: document.getElementById("cLink")
    }
    const navs = [actives.hLink, actives.aLink, actives.pLink, actives.cLink]


    // Handling hovering
    const bracs = [
        document.querySelectorAll(".hBrac"),
        document.querySelectorAll(".aBrac"),
        document.querySelectorAll(".pBrac"),
        document.querySelectorAll(".cBrac"),
    ]

    const handleHover = (x) => {
        if (headings[x] !== page) {
            bracs[x]?.forEach(element => {
                element?.classList.add("active")
            });
            navs[x]?.classList.add("active")
        }
    }
    let y
    const handleUnHover = (x) => {
        if (page === "about2") {
            y = x + 3
        } else {
            y = x
        }
        if (headings[y] !== page) {
            bracs[x]?.forEach(element => {
                element?.classList.remove("active")
            });
            navs[x]?.classList.remove("active")
        }
    }

    // Showing active page
    const reset = () => {
        actives.allSecs?.classList.remove(...actives.allSecs.classList)
        for (let elem in pg) {
            if (pg[elem]) {
                pg[elem]?.classList.remove("active")
                pg[elem].style.marginLeft = "2rem"
            }
        }
        for (let elem in navs) {
            if (navs[elem]) {
                navs[elem].style.fontSize = "1.75rem"
                navs[elem].style.fontWeight = "400"
                navs[elem].style.marginLeft = "0"
                navs[elem].style.opacity = "0.5"
            }
        }
        for (let i = 0; i < 4; i++) {
            bracs[i]?.forEach(element => {
                element?.classList.remove("active")
            });
            navs[i]?.classList.remove("active")
        }
    }

    const transition = () => {
        document.querySelector(".secName")?.classList.add("hide")
        setTimeout(() => {
            document.querySelector(".secName")?.classList.remove("hide")
            document.querySelector(".secName")?.classList.add("transition")
        }, 1000);
        setTimeout(() => {
            document.querySelector(".secName")?.classList.remove("transition")
        }, 1500);
    }

    useEffect(() => {
        reset()
        if (page === "about") {
            if (prev !== "about2") {
                transition()
            }
            document.querySelector(".secName")?.classList.remove("projects", "contact")
            document.getElementById("sec")?.classList.remove("contact", "projects")
            document.getElementById("sec")?.classList.add("about")
            actives.allSecs?.classList.add("about")
            pg.about?.classList.add("active")
            actives.aLink.style.fontSize = "2rem"
            actives.aLink.style.marginLeft = "-1.5rem"
            actives.aLink.style.opacity = "1"
            actives.aLink.style.fontWeight = "bold"
            pg.about.style.marginLeft = "3.5rem"
            bracs[1]?.forEach(element => {
                element.classList.add("active")
            });
        } else if (page === "about2") {
            if (prev !== "about") {
                transition()
            }
            document.querySelector(".secName")?.classList.remove("projects", "contact")
            document.getElementById("sec")?.classList.remove("contact", "projects")
            document.getElementById("sec")?.classList.add("about")
            actives.allSecs?.classList.add("about")
            pg.about?.classList.add("active")
            actives.aLink.style.fontSize = "2rem"
            actives.aLink.style.marginLeft = "-1.5rem"
            actives.aLink.style.opacity = "1"
            actives.aLink.style.fontWeight = "bold"
            pg.about.style.marginLeft = "3.5rem"
            bracs[1]?.forEach(element => {
                element?.classList.add("active")
            });
        } else if (page === "projects") {
            transition()
            document.querySelector(".secName")?.classList.remove("contact", "about")
            document.getElementById("sec")?.classList.remove("about", "contact")
            document.getElementById("sec")?.classList.add("projects")
            document.querySelector(".secName")?.classList.add("projects")
            actives.allSecs?.classList.add("projects")
            pg.proj?.classList.add("active")
            actives.pLink.style.fontSize = "2rem"
            actives.pLink.style.opacity = "1"
            actives.pLink.style.fontWeight = "bold"
            bracs[2]?.forEach(element => {
                element?.classList.add("active")
            });
        } else if (page === "contact") {
            transition()
            document.querySelector(".secName")?.classList.remove("projects", "about")
            document.getElementById("sec")?.classList.remove("about", "projects")
            document.getElementById("sec")?.classList.add("contact")
            actives.allSecs?.classList.add("contact")
            pg.cont?.classList.add("active")
            actives.cLink.style.fontSize = "2rem"
            actives.cLink.style.marginLeft = "-1.5rem"
            actives.cLink.style.opacity = "1"
            actives.cLink.style.fontWeight = "bold"
            pg.cont.style.marginLeft = "3.5rem"
            bracs[3]?.forEach(element => {
                element?.classList.add("active")
            });
        } else if (page === "home") {
            transition()
        }
    // eslint-disable-next-line
    }, [page])

    useEffect(() => {
        if (hov) {
            setCHov(true)
        } else {
            setCHov(false)
        }
    // eslint-disable-next-line
    }, [hov])

    return (
        <nav id="navBar">
            <div id="sec" >
                <div className="secName" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
                    <h3 id="secTag1">{"<section>"}</h3>
                    <div id="allSecs">
                        <div
                          className="pgs"
                          id="homePg"
                          onMouseEnter={() => handleHover(0)}
                          onMouseLeave={() => handleUnHover(0)}
                        >
                            <h3 className="bracs hBrac">{"{/* "}</h3>
                            <div id="linkH" onClick={() => handleNav("home")}>
                                {page === "home" ? <h3 id="hLink">{"Home"}</h3>
                                : <h3 id="hLink">{"<Home />"}</h3>}
                            </div>
                            <h3 className="bracs hBrac">{" */}"}</h3>
                        </div>
                        <div
                          className="pgs"
                          id="aboutPg"
                          onMouseEnter={() => handleHover(1)}
                          onMouseLeave={() => handleUnHover(1)}
                        >
                            <h3 className="bracs aBrac">{"{/* "}</h3>
                            <div id="linkA" onClick={() => handleNav("about")}>
                                <h3 id="aLink">{"<About />"}</h3>
                            </div>
                            <h3 className="bracs aBrac">{" */}"}</h3>
                        </div>
                        <div
                          className="pgs"
                          id="projectPg"
                          onMouseEnter={() => handleHover(2)}
                          onMouseLeave={() => handleUnHover(2)}
                        >
                            <h3 className="bracs pBrac">{"{/* "}</h3>
                            <div id="linkP" onClick={() => handleNav("projects")}>
                                <h3 id="pLink">{"<Projects />"}</h3>
                            </div>
                            <h3 className="bracs pBrac">{" */}"}</h3>
                            <div id="grad"></div>
                        </div>
                        <div
                          className="pgs"
                          id="contactPg"
                          onMouseEnter={() => handleHover(3)}
                          onMouseLeave={() => handleUnHover(3)}
                        >
                            <h3 className="bracs cBrac">{"{/* "}</h3>
                            <div id="linkC" onClick={() => handleNav("contact")}>
                                <h3 id="cLink">{"<Contact />"}</h3>
                            </div>
                            <h3 className="bracs cBrac">{" */}"}</h3>
                        </div>
                    </div>
                    <h3 id="secTag">{"</section>"}</h3>
                </div>
            </div>
            <div id="navItems">
                <img src="" alt=""/>
                <div id="navLinks">
                    <div id="hm" onClick={() => handleNav("home")}><h2>Home</h2></div>
                    <div id="ab" onClick={() => handleNav("about")}><h2>About</h2></div>
                    <div id="pj" onClick={() => handleNav("projects")}><h2>Projects</h2></div>
                    <div id="ct" onClick={() => handleNav("contact")}><h2>Contact</h2></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;