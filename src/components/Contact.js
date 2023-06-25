import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import { FormControl } from "@chakra-ui/react";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

const Contact = ({page, cHov}) => {
    const [blurs, setBlurs] = useState({
        FN: false,
        LN: false,
        EM: false,
        TOP: false,
        MSG: false
    })
    const [focs, setFocs] = useState({
        FN: false,
        LN: false,
        EM: false,
        MSG: false
    })
    const [run1, setRun1] = useState(false)
    const [run2, setRun2] = useState(false)
    const [run3, setRun3] = useState(false)
    const [run4, setRun4] = useState(false)
    const [valid, setValid] = useState(false)

    // Load animation
    const elems = [
        document.getElementById("cTitle"),
        document.getElementById("fields"),
        document.getElementById("socials"),
        document.getElementById("nvLine"),
        document.getElementById("emL"),
        document.getElementById("ghL"),
        document.getElementById("liL"),
    ]

    useEffect(() => {
        if (page === "contact") {
            elems.forEach(x => {
                x?.classList.add("active")
            })
            setTimeout(() => {
                elems[2].classList.add("norm")
                elems[3].classList.add("norm")
                elems[2].classList.remove("active")
                elems[3].classList.remove("active")
            }, 2500);
        } else {
            elems.forEach(x => {
                x?.classList.remove("active")
            })
            elems[2]?.classList.remove("norm")
            elems[3]?.classList.remove("norm")
        }
    // eslint-disable-next-line
    }, [window.scrollY])


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            topic: "",
            message: ""
        },
        onSubmit: (values) => {
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            topic: Yup.string().required("Required"),
            message: Yup.string().required("Required"),
        })
    })

    // Visualizing validation
    useEffect(() => {
        if (blurs.FN && formik.values.firstName.length === 0) {
            document.getElementById("firstName").placeholder = "FIRST NAME: Required"
            document.getElementById("firstName").style.boxShadow = "0 0 5px 2px red"
        } else {
            document.getElementById("firstName").style.boxShadow = "none"
        }
        if (blurs.LN && formik.values.lastName.length === 0) {
            document.getElementById("lastName").placeholder = "LAST NAME: Required"
            document.getElementById("lastName").style.boxShadow = "0 0 5px 2px red"
        } else {
            document.getElementById("lastName").style.boxShadow = "none"
        }
        if (blurs.EM && (formik.values.email.length === 0 || formik.errors.email)) {
            document.getElementById("email").placeholder = "EMAIL: Required"
            document.getElementById("email").style.boxShadow = "0 0 5px 2px red"
        } else {
            document.getElementById("email").style.boxShadow = "none"
        }
        if (blurs.TOP && formik.values.topic === "") {
            document.getElementById("topic").style.boxShadow = "0 0 5px 2px red"
        } else {
            document.getElementById("topic").style.boxShadow = "none"
        }
        if (blurs.MSG && formik.values.message.length === 0) {
            document.getElementById("message").placeholder = "Message: Required"
            document.getElementById("message").style.boxShadow = "0 0 5px 2px red"
        } else {
            document.getElementById("message").style.boxShadow = "none"
        }

        let vld = 0
        for (let x in formik.values) {
            if (formik.values[x] !== "") {
                vld += 1
            }
        }
        if (Object.keys(formik.errors).length === 0) {
            vld += 1
        }
        if (vld === 6) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [blurs, formik.values, formik.errors])

    useEffect(() => {
        if (valid) {
            document.querySelector(".button2")?.classList.add("enabled")
            document.querySelector(".button2").disabled = false
        } else {
            document.querySelector(".button2")?.classList.remove("enabled")
            document.querySelector(".button2").disabled = true
        }
    }, [valid])


    // Text effect
    const tex = {
        FN: document.getElementById("FN"),
        LN: document.getElementById("LN"),
        EM: document.getElementById("EM"),
        MSG: document.getElementById("MSG"),
    }

    useEffect(() => {
        if (focs.FN) {
            tex.FN?.classList.add("active1")
            if (formik.values.firstName.length > 0 && !run1) {
                setRun1(true)
                setTimeout(() => {
                    setRun1(false)
                }, 6000);
                tex.FN?.classList.add("active2")
            }
        }
        if (focs.LN) {
            tex.LN?.classList.add("active1")
            if (formik.values.lastName.length > 0 && !run2) {
                setRun2(true)
                setTimeout(() => {
                    setRun2(false)
                }, 6000);
                tex.LN?.classList.add("active2")
            }
        }
        if (focs.EM) {
            tex.EM?.classList.add("active1")
            if (formik.values.email.length > 0 && !run3) {
                setRun3(true)
                setTimeout(() => {
                    setRun3(false)
                }, 6000);
                tex.EM?.classList.add("active2")
            }
        }
        if (focs.MSG) {
            tex.MSG?.classList.add("active1")
            if (formik.values.message.length > 0 && !run4) {
                setRun4(true)
                setTimeout(() => {
                    setRun4(false)
                }, 30000);
                tex.MSG?.classList.add("active2")
            }
        }
    // eslint-disable-next-line
    }, [focs, formik.values])

    useEffect(() => {
        if (!run1) {
            tex.FN?.classList.remove("active1")
            tex.FN?.classList.remove("active2")
        }
    // eslint-disable-next-line
    }, [run1])
    useEffect(() => {
        if (!run2) {
            tex.LN?.classList.remove("active1")
            tex.LN?.classList.remove("active2")
        }
    // eslint-disable-next-line
    }, [run2])
    useEffect(() => {
        if (!run3) {
            tex.EM?.classList.remove("active1")
            tex.EM?.classList.remove("active2")
        }
    // eslint-disable-next-line
    }, [run3])
    useEffect(() => {
        if (!run4) {
            tex.MSG?.classList.remove("active1")
            tex.MSG?.classList.remove("active2")
        }
    // eslint-disable-next-line
    }, [run3])

    // expand border on nav hover
    useEffect(() => {
        if (cHov === true) {
            document.getElementById("nvLine").classList.add("expand")
        } else {
            document.getElementById("nvLine").classList.remove("expand")
        }
    }, [cHov])

    // Sending the email
    const form = useRef()
    const [notif, setNotif] = useState("none")

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
              "service_4rqg94i",
              "template_5f0cgy1",
              form.current,
              "-jCWlXcu5lJRjfhgx"
            )
            .then((result) => {
                for (let x in formik.values) {
                    formik.values[x] = ""
                }
                setBlurs({
                    FN: false,
                    LN: false,
                    EM: false,
                    TOP: false,
                    MSG: false
                })
                console.log(result.text)
                setNotif("success")
            }, (error) => {
                console.log(error.text)
                setNotif("fail")
            })
    }

    const bubble = document.getElementById("notif")
    useEffect(() => {
        if (notif !== "none") {
            bubble?.classList.add("active")
            setTimeout(() => {
                bubble?.classList.add("open")
                setTimeout(() => {
                    bubble?.classList.remove("active")
                    bubble?.classList.add("out")
                }, 5600);
                setTimeout(() => {
                    bubble?.classList.remove("open")
                    bubble?.classList.remove("out")
                    setNotif("none")
                }, 6200);
            }, 600);
        }
    // eslint-disable-next-line
    }, [notif])


    return (
        <section id="contact-section">
            <div>
                <h1 id="cTitle">GET IN TOUCH</h1>
                <div id="contactForm">
                    <form id="fields" ref={form} onSubmit={sendEmail}>
                        <div id="names">
                            <FormControl>
                                <input
                                className="input"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="FIRST NAME"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onFocus={() => setFocs({...focs, FN: true})}
                                    onBlur={() => {setBlurs({...blurs, FN: true})
                                    setFocs({...focs, FN: false})}}
                                />
                            </FormControl>
                            <FormControl>
                                <input
                                    className="input"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="LAST NAME"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onFocus={() => setFocs({...focs, LN: true})}
                                    onBlur={() => {setBlurs({...blurs, LN: true})
                                    setFocs({...focs, LN: false})}}
                                />
                            </FormControl>
                        </div>
                        <FormControl>
                            <input
                                className="input"
                                id="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onFocus={() => setFocs({...focs, EM: true})}
                                onBlur={() => {setBlurs({...blurs, EM: true})
                                setFocs({...focs, EM: false})}}
                            />
                            <div id="inUnder">
                                {formik.errors.email && blurs.EM &&
                                <p style={{color: "red", margin: 0}}>Please enter a valid email address</p>}
                            </div>
                        </FormControl>
                        <FormControl>
                            <select
                                className="input"
                                id="topic"
                                name="topic"
                                value={formik.values.topic}
                                onChange={formik.handleChange}
                                onBlur={() => setBlurs({...blurs, TOP: true})}
                            >
                                <option value="" disabled>TOPIC</option>
                                <option value="Job">Job Opportunity</option>
                                <option value="Freelance">Freelance project porposal</option>
                                <option value="Networking">Networking connection</option>
                                <option value="Other">Other</option>
                            </select>
                            <div id="inUnder">
                                {formik.values.topic === "" && blurs.TOP &&
                                <p style={{color: "red", margin: 0}}>Please select a topic for your message</p>}
                            </div>
                        </FormControl>
                        <FormControl>
                            <textarea
                                className="input"
                                id="message"
                                name="message"
                                placeholder="MESSAGE"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onFocus={() => setFocs({...focs, MSG: true})}
                                onBlur={() => {setBlurs({...blurs, MSG: true})
                                setFocs({...focs, MSG: false})}}
                            />
                        </FormControl>
                        <button className="button2" disabled>SUBMIT</button>
                    </form>
                    <div id="socials">
                        <a id="EMl" href="mailto: tochi.orams@gmail.com" target="_blank" rel="noreferrer">
                            <span id="emL">
                                <FontAwesomeIcon icon={faEnvelope} size="3x" />
                            </span>
                            <h2>Email</h2>
                        </a>
                        <a id="GHl" href="https://github.com/Tochi-Orams" target="_blank" rel="noreferrer">
                            <span id="ghL">
                                <FontAwesomeIcon  icon={faGithub} size="3x" />
                            </span>
                            <h2>GitHub</h2>
                        </a>
                        <a id="LIl" href="https://www.linkedin.com/in/tochi-oramasionwu/" target="_blank" rel="noreferrer">
                            <span id="liL">
                                <FontAwesomeIcon  icon={faLinkedin} size="3x" />
                            </span>
                            <h2>LinkedIn</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div id="text">
                <h1 id="FN">{formik.values.firstName}</h1>
                <h1 id="LN">{formik.values.lastName}</h1>
                <h1 id="EM">{formik.values.email}</h1>
                <h1 id="MSG">{formik.values.message}</h1>
            </div>
            <div className="cBkg"></div>
            <div id="nvLine"></div>
            {notif === "success" ?
            <div id="notif" style={{borderColor: "green"}}>
                <p>Your message was sent successfully.</p>
            </div>
            : notif === "fail" ?
            <div id="notif" style={{borderColor: "red"}}>
                <p>Your message failed to send. Please try again.</p>
            </div>
            :
            <div id="notif" style={{borderColor: "white"}}></div>
            }
        </section>
    )
}

export default Contact