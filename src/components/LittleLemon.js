import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const LittleLemon = ({setPage, setSec, handleNav}) => {
    const [reset, setReset] = useState(false)
    const [VW, setVW] = useState(document.documentElement.clientWidth)

    // Listen for changes in window size
    useEffect (() => {
      window.addEventListener("resize", () => setVW(document.documentElement.clientWidth))
    })

    setTimeout(() => {
        setSec("projects")
    }, 100);

    const goBack = () => {
        setPage("projects")
        setTimeout(() => {
            handleNav("projects")
        }, 100);
    }

    // Slideshow
    useEffect(() => {
        setTimeout(() => {
            document.getElementById("PImg1")?.classList.add("inactive")
        }, 5000);
        setTimeout(() => {
            document.getElementById("PImg2")?.classList.add("inactive")
        }, 10000);
        setTimeout(() => {
            document.getElementById("PImg1")?.classList.remove("inactive")
            setTimeout(() => {
                document.getElementById("PImg2")?.classList.remove("inactive")
            }, 1000);
            setReset(!reset)
        }, 15000);
    }, [reset])

    return (
        <article>
            <Link to="/" id="backBTN" onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <div id="pHeading">
                <div id="hLeft">
                    <h1>Little Lemon Reservations</h1>
                    <span>
                        <a href="https://little-lemon-reservations.web.app/" target="_blank" rel="noreferrer" className="pButton">Live Demo</a>
                        <a href="https://github.com/Tochi-Orams/Little-Lemon-App" target="_blank" rel="noreferrer" className="pButton">View Code</a>
                    </span>
                </div>
                <div id="PImgs">
                    <img className="PImg" id="PImg1" src={require("../assets/LL1.png")} alt="Little Lemon screenshot"></img>
                    <img className="PImg" id="PImg2" src={require("../assets/LL2.png")} alt="Little Lemon screenshot"></img>
                    <img className="PImg" id="PImg3" src={require("../assets/LL3.png")} alt="Little Lemon screenshot"></img>
                </div>
            </div>
            <div id="pBG">
                <div id="top" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                    <h3>Scroll to top</h3>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            </div>
            <div id="ppCont">
                <div id="pDetails">
                    <div id="pInfo">
                        <h3>{`.Little-Lemon-Reservations {`}</h3>
                        <h3 id="dItem">project-type<i>:</i> <em>course project</em><i>;</i></h3>
                        <h3 id="dItem">for-client<i>:</i> <em>no</em><i>;</i></h3>
                        <h3 id="dItem">role<i>:</i> <em>front-end developer</em><i>;</i></h3>
                        <h3 id="dItem">status<i>:</i> <em>completed</em><i>;</i></h3>
                        <h3>{`}`}</h3>
                    </div>
                    <div id="pTech">
                        <h4>{`// Tech Stack`}</h4>
                        <div id="tStack">
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Node.js</p>
                            <p>Git</p>
                            <p>CSS</p>
                            <p>HTML</p>
                            <p>Firebase</p>
                        </div>
                    </div>
                </div>
                <div id="deets">
                    <div>
                        <h2>Summary</h2>
                        <p>
                            The Little Lemon reservations page boasts a robust table booking system
                            through which restaurant visitors can customize their dining experience.
                            In addition to simply specifying the date and time of their visit, customers
                            can include their seating preferences, and request for additional services
                            if they are planning on celebrating a special occasion.
                        </p>
                    </div>
                    <div className="gif">
                        <img src={require("../assets/LL Demo 1.gif")} alt="Little Lemon Demo" />
                        <p>Preview of the restaurant's landing page</p>
                    </div>
                    <div>
                        <h2>Project Goal</h2>
                        <p>
                            The goal of this project was to create a web presence for a fictitious
                            restaurant. This included designing an attractive landing page and
                            implementing a dynamically updating table booking page, where users can
                            enter their dining preferences and get feedback on table availability in
                            real time.
                        </p>
                    </div>
                    <div className="gif">
                        <img src={require("../assets/LL Demo 2.gif")} alt="Little Lemon Demo" />
                        <p>Table booking walkthrough</p>
                    </div>
                    <div id="WF">
                        <h2>Workflow</h2>
                        {VW > 1040 && <div id="flowSecs">
                            <h3>Discovery</h3>
                            <h3>Development</h3>
                            <h3>Delivery</h3>
                        </div>}
                        <div id="flow">
                            {VW <= 1040 && <h3>Discovery</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Planning</h4>
                                    <ul>
                                        <li>Review the project requirements</li>
                                        <li>Study the style guide</li>
                                        <li>Create Figma prototype</li>
                                    </ul>
                                </div>
                            </div>
                            {VW <= 1040 && <h3>Development</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Landing page</h4>
                                    <ul>
                                        <li>Design an attractive landing page based on Figma mockup</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Reservations</h4>
                                    <ul>
                                        <li>Develop API to update availability in real time</li>
                                        <li>Cerate intuitive user interface</li>
                                    </ul>
                                </div>
                            </div>
                            {VW <= 1040 && <h3>Delivery</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Testing</h4>
                                    <ul>
                                        <li>Conduct unit and integration tests</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Submit</h4>
                                    <ul>
                                        <li>Submit course project</li>
                                        <li>Receive peer feedback</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <video autoPlay muted loop id="background2">
                    <source src={require("../assets/BKG.mp4")} type="video/mp4" />
                </video>
            </div>
            <div id="slantContainer">
                <div id="slant"></div>
            </div>
        </article>
    )
}

export default LittleLemon;