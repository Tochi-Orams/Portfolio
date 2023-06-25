import { useEffect } from "react";

import tochi from "../assets/Nzu.jpg"
import detail from "../assets/Detail.png"
import creative from "../assets/Creative.png"
import team from "../assets/teamwork.png"

const About = ({page, VW}) => {
    const elems = [
        document.getElementById("tochi"),
        document.getElementById("nameTXT"),
        document.getElementById("aContent"),
        document.getElementById("sSkills"),
    ]

    useEffect(() => {
        if (page === "about") {
            elems.forEach(x => {
                x?.classList.add("active")
            })
            setTimeout(() => {
                elems.forEach(x => {
                    x?.classList.add("norm")
                    x?.classList.remove("active")
                })
            }, 2500);
        } else {
            elems.forEach(x => {
                x?.classList.remove("active")
            })
            elems.forEach(x => {
                x?.classList.remove("norm")
            })
        }
    // eslint-disable-next-line
    }, [page])


    return (
        <section id="about-section">
            <div id="aboutMain">
                <div id="name">
                    <img id="tochi" src={tochi} alt="Tochi" />
                    <div id="nameTXT">
                        <h1>Tochi Oramasionwu</h1>
                        <p id="phon"><em>(Toe·chee Oh·ram·ass·ee·on·woo)</em></p>
                    </div>
                </div>
                <div id="aContent">
                    <p>
                        Hi there! I'm Tochi, a passionate Full-Stack web developer with a
                        flair for creativity and a strong technical background. I combine my
                        love for design and coding to bring visually stunning and highly
                        functional websites to life. <br/> <br/>
                        My goal is to deliver seamless user experiences that captivate and
                        inspire, while ensuring the highest standards of usability and
                        accessibility. <br/> <br/>
                        Outside of coding and design, my hobbies include music production,
                        playing sports and video games, learning new recipes, and hanging out
                        with friends.
                    </p>
                    {VW <= 1470 ? <div id="sSkills">
                        <div>
                            <img src={detail} alt="Detail Oriented"/>
                            <h3>Detail Oriented</h3>
                        </div>
                        <div>
                            <img src={creative} alt="Creative"/>
                            <h3>Creative</h3>
                        </div>
                        <div>
                            <img src={team} alt="Team Player"/>
                            <h3>Team Player</h3>
                        </div>
                    </div>
                    :
                    <div></div>}
                </div>
                {VW > 1470 ? <div id="sSkills">
                    <div>
                        <img src={detail} alt="Detail Oriented"/>
                        <h3>Detail Oriented</h3>
                    </div>
                    <div>
                        <img src={creative} alt="Creative"/>
                        <h3>Creative</h3>
                    </div>
                    <div>
                        <img src={team} alt="Team Player"/>
                        <h3>Team Player</h3>
                    </div>
                </div>
                :
                <div></div>}
            </div>
            <div className="aBkg"></div>
        </section>
    )
}

export default About;