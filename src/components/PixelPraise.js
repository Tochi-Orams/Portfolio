import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const PixelPraise = ({setPage, setSec, handleNav}) => {
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
                    <h1>PixelPraise</h1>
                    <span>
                        <a href="https://github.com/Tochi-Orams/Photo-Rater" target="_blank" rel="noreferrer" className="pButton">View Code</a>
                    </span>
                </div>
                <div id="PImgs">
                    <img className="PImg" id="PImg1" src={require("../assets/PR1.png")} alt="PixelPraise screenshot"></img>
                    <img className="PImg" id="PImg2" src={require("../assets/PR2.png")} alt="PixelPraise screenshot"></img>
                    <img className="PImg" id="PImg3" src={require("../assets/PR3.png")} alt="PixelPraise screenshot"></img>
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
                        <h3>{`.PixelPraise {`}</h3>
                        <h3 id="dItem">project-type<i>:</i> <em>independent</em><i>;</i></h3>
                        <h3 id="dItem">for-client<i>:</i> <em>no</em><i>;</i></h3>
                        <h3 id="dItem">role<i>:</i> <em>full-stack developer</em><i>;</i></h3>
                        <h3 id="dItem">status<i>:</i> <em>work in progress</em><i>;</i></h3>
                        <h3>{`}`}</h3>
                    </div>
                    <div id="pTech">
                        <h4>{`// Tech Stack`}</h4>
                        <div id="tStack">
                            <p>Typescript</p>
                            <p>React</p>
                            <p>SCSS</p>
                            <p>Node.js</p>
                            <p>Express.js</p>
                            <p>MySQL</p>
                            <p>Git</p>
                            <p>CSS</p>
                            <p>HTML</p>
                        </div>
                    </div>
                </div>
                <div id="deets">
                    <div>
                        <h2>Summary</h2>
                        <p>
                            PixelPraise is a social web app which allows its users to share photos
                            and get feedback on them from other users. Users can leave feedback in
                            the form of star ratings and optional comments. The simple yet stylish
                            user interface makes it easy for users to navigate through the different
                            sections of the app to browse through photos, upload photos, leave feedback,
                            and view feedback from others.
                        </p>
                    </div>
                    <div className="gif">
                        <img src={require("../assets/PR Demo 1.gif")} alt="PixelPraise Demo" />
                        <p>Demo of the photo rating and feedback page</p>
                    </div>
                    <div>
                        <h2>Project Goal</h2>
                        <p>
                            My goal with PixelPraise was to launch a fully functional and scalable
                            full-stack web aplication that anyone can use. This involved extensively
                            planning the database so that user information could be stored securely.
                            Additionally, I carefully planned out the UX/UI design to ensure that
                            users would intuitively be able to navigate through the app to accomplish
                            all desired tasks.
                        </p>
                    </div>
                    <div className="gif">
                        <img src={require("../assets/PR Demo 2.gif")} alt="PixelPraise Demo" />
                        <p>Customizing the PicelPraise themes and accents</p>
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
                                        <li>Identify the key features of the app</li>
                                        <li>Create the style guide</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Research</h4>
                                    <ul>
                                        <li>Research similar platforms</li>
                                        <li>Choose tech stack</li>
                                    </ul>
                                </div>
                            </div>
                            {VW <= 1040 && <h3>Development</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Front End</h4>
                                    <ul>
                                        <li>Build pages and functionality</li>
                                        <li>Style app in line with the style guide</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Back End</h4>
                                    <ul>
                                        <li>Initialize database</li>
                                        <li>Create tables to store user data</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Integration</h4>
                                    <ul>
                                        <li>Connect user interface to database</li>
                                    </ul>
                                </div>
                            </div>
                            {VW <= 1040 && <h3>Delivery</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Testing</h4>
                                    <ul>
                                        <li>Conduct unit and integration tests</li>
                                        <li>Get feedback from users</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Launch</h4>
                                    <ul>
                                        <li>Launching soon...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="background">
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

export default PixelPraise;