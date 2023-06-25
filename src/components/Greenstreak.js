import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Greenstreak = ({setPage, setSec, handleNav}) => {
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
                    <h1>GSEL Website</h1>
                    <span>
                        <a href="https://greenstreakenergies.com" target="_blank" rel="noreferrer" className="pButton">Live Demo</a>
                    </span>
                </div>
                <div id="PImgs">
                    <img className="PImg" id="PImg1" src={require("../assets/GS1.png")} alt="PixelPraise screenshot"></img>
                    <img className="PImg" id="PImg2" src={require("../assets/GS2.png")} alt="PixelPraise screenshot"></img>
                    <img className="PImg" id="PImg3" src={require("../assets/GS3.png")} alt="PixelPraise screenshot"></img>
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
                        <h3>{`.GSEL-website {`}</h3>
                        <h3 id="dItem">project-type<i>:</i> <em>freelance</em><i>;</i></h3>
                        <h3 id="dItem">for-client<i>:</i> <em>yes</em><i>;</i></h3>
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
                            The GreenStreak Energies Ltd. {"(GSEL)"} website is a simple, yet stylish
                            website through which GSEL's potential and prospective customers can find
                            all they need to know about the company. Complete with a modern design and
                            a custom-built interactive photo gallery, the GSEL website creates a strong
                            web presence for the company.

                        </p>
                    </div>
                    <div className="gif">
                        <img src={require("../assets/GS Demo 1.gif")} alt="GSEL Demo" />
                        <p>Overview of the GSEL website design</p>
                    </div>
                    <div>
                        <h2>Project Goal</h2>
                        <p>
                            The goal of this project was to design and build a robust website which is
                            simple to navigate and provides customers with an overview of the company
                            and their product and service offerings. The design of the website focused on
                            reflecting the company's operations in the clean energy sector, giving customers
                            an additional layer of confidence in the company's competence and professionalism.
                        </p>
                    </div>
                    <div className="gif">
                        <img src={require("../assets/GS Demo 2.gif")} alt="GSEL Demo" />
                        <p>Cutom-uilt interactive gallery</p>
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
                                        <li>Review client requirements</li>
                                        <li>Specify the project scope</li>
                                        <li>Create the style guide</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Research</h4>
                                    <ul>
                                        <li>Research partner and competitor websites</li>
                                    </ul>
                                </div>
                            </div>
                            {VW <= 1040 && <h3>Development</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Build</h4>
                                    <ul>
                                        <li>Develop key features and pages</li>
                                        <li>Style website according to the style guide</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Polishing</h4>
                                    <ul>
                                        <li>Curate content for the website</li>
                                        <li>Optimize responsiveness</li>
                                    </ul>
                                </div>
                            </div>
                            {VW <= 1040 && <h3>Delivery</h3>}
                            <div className="fColumn">
                                <div className="wBubble">
                                    <h4>Testing</h4>
                                    <ul>
                                        <li>Conduct unit testing</li>
                                        <li>Get feedback from client</li>
                                    </ul>
                                </div>
                                <div className="wBubble">
                                    <h4>Launch</h4>
                                    <ul>
                                        <li>Review hosting options</li>
                                        <li>Launch site and hand over to client</li>
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

export default Greenstreak;