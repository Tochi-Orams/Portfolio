import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

const MobileNav = ({handleNav, page, VW, sec}) => {
    const [open, setOpen] = useState(false)

    const nav = document.getElementById("mNav")
    const burger = document.getElementById("hamburger")
    const menu = document.getElementById("menu")
    const overlay = document.getElementById("overlay")
    const bkg = document.getElementById("mBkg")

    const handleHover = () => {
        burger.classList.add("active")
        menu.classList.add("active")
        overlay.classList.add("active")
        bkg.classList.add("active")
        setOpen(true)
    }
    const handleUnHover = () => {
        burger.classList.remove("active")
        menu.classList.remove("active")
        overlay.classList.remove("active")
        bkg.classList.remove("active")
        setOpen(false)
    }

    useEffect(() => {
        if (page === "home") {
            nav?.classList.add("home")
            bkg?.classList.add("home")

        } else {
            nav?.classList.remove("home")
            bkg?.classList.remove("home")
        }
    // eslint-disable-next-line
    }, [page, VW])

    const burgerClick = () => {
        if (open) {
            handleUnHover()
        } else {
            handleHover()
        }
    }

    const doNav = (x) => {
        setTimeout(() => {
            handleNav(x)
        }, 100);
    }

    useEffect(() => {
        if (sec === "projects") {
            nav?.classList.add("proj")
            if (VW > 780) {
                menu?.classList.add("proj")
            } else {
                menu?.classList.remove("proj")
            }
        } else {
            nav?.classList.remove("proj")
        }
    }, [sec, VW])

    return (
        <nav id="mNav">
            <div id="mBkg"></div>
            {sec === "main" ?
            <div id="menu" onMouseEnter={handleHover} onMouseLeave={handleUnHover}>
                <div id="hm2" onClick={() => {handleNav("home")
                handleUnHover()}}><h4>Home</h4></div>
                <div id="ab2" onClick={() => {handleNav("about")
                handleUnHover()}}><h4>About</h4></div>
                <div id="pj2" onClick={() => {handleNav("projects")
                handleUnHover()}}><h4>Projects</h4></div>
                <div id="ct2" onClick={() => {handleNav("contact")
                handleUnHover()}}><h4>Contact</h4></div>
            </div>
            :
            <div id="menu" onMouseEnter={handleHover} onMouseLeave={handleUnHover}>
                <Link to="/" id="hm2" onClick={() => {doNav("home")
                handleUnHover()}}><h4>Home</h4></Link>
                <Link to="/" id="ab2" onClick={() => {doNav("about")
                handleUnHover()}}><h4>About</h4></Link>
                <Link to="/" id="pj2" onClick={() => {doNav("projects")
                handleUnHover()}}><h4>Projects</h4></Link>
                <Link to="/" id="ct2" onClick={() => {doNav("contact")
                handleUnHover()}}><h4>Contact</h4></Link>
            </div>}
            <div id="hamburger" onMouseEnter={handleHover} onMouseLeave={handleUnHover} onClick={burgerClick}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div id="overlay"></div>
        </nav>
    )
}

export default MobileNav;