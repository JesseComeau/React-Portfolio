// import React, { useState } from 'react';
import me from '../../images/Me.jpg';

import BootstrapIcon from "../../images/skills/bootstrap.svg";
import CSS3Icon from "../../images/skills/CSS3.svg";
import ExpressIcon from "../../images/skills/express.svg";
import GraphQLIcon from "../../images/skills/graphql.svg";
import HerokuIcon from "../../images/skills/heroku.svg";
import HTML5Icon from "../../images/skills/html5.svg";
import JavascriptIcon from "../../images/skills/javascript.svg";
import MongoDBIcon from "../../images/skills/mongodb.svg";
import mysqlIcon from "../../images/skills/mysql.svg";
import nodeIcon from "../../images/skills/nodejs.svg";
import reactIcon from "../../images/skills/react.svg";
import tailwindIcon from "../../images/skills/tailwindcss.svg";

function Aboutme() {

    return (

        <main className="container1" id="aboutMe">
            <header className="sectionAboutMe h2" >
                About Me
            </header>
            <div className="aboutMeIMG d-flex flex-column align-items-center">
                <img src={me} className="rounded-circle Personal Image mx-auto aboutmepic" alt='Jesse'></img>

                <p className="font-weight-bold mt-2">Full Stack Web Development</p>


            </div>




            <div className="aboutInterests mx-auto">


                <ul type="none">
                    <li className="h5">Interests:</li>
                    <ul type="square">
                        <li>Python</li>
                        <li>AWS</li>
                        <li>Ruby</li>
                        <li>Front End Development</li>
                        <li>Back End Development</li>
                        <li>MERN Stack</li>
                        <li>Learning new frameworks</li>
                    </ul>
                </ul>

            </div>
            <section className="item aboutMe">
                <div>
                    <p>Hi, I'm Jesse Comeau.</p>
                    <p>I am currently a student in the Northwestern University Full Stack Web Development
                        Bootcamp. I have a Bachlors degrees in Finance and Economics, along with a certificate in
                        international business from the University of Wisconsin-Milwaukee</p>
                    <p>I previously worked as a fraud supervisor at FIS, leading a team of 7 direct reports, while assisting
                        with an offshore team comprising of more than 30 individuals in monitoring our hundreds of client's
                        EPP transaction for potentially fraudulent activity. While working closely with our devops, service
                        delivery, product managers, and development teams, I recognized a passion for development and needed
                        to explore a new opportunity.</p>
                </div>
            </section>

            <section className="aboutInterests">

            </section>
            <section className="aboutEducation">
                <ul type="none">
                    <li className="h5">Education:</li>
                    <li className="school">
                        <i className="fa-solid fa-building-columns text-dark"></i>
                        University of Wisconsin - Milwaukee</li>
                    <ul type="none">
                        <li className="degree">
                            <i className="fa-solid fa-graduation-cap text-dark fa-sm"></i>
                            Lubar School of Business - Finance
                        </li>
                        <li className="degree">
                            <i className="fa-solid fa-graduation-cap text-dark fa-sm"></i>
                            College of Letters & Science -
                            Economics</li>
                    </ul>
                    <li className="school">
                        <i className="fa-solid fa-building-columns text-dark"></i>
                        Northwestern University</li>
                    <ul type="none">
                        <li className="degree">
                            <i className="fa-solid fa-graduation-cap text-dark fa-sm"></i>
                            Full Stack Web Development Certificate</li>
                    </ul>
                </ul>
            </section>

            <section className="aboutSkills ">
                <div className="h5">Skills:</div>
                <div className="d-flex justify-content-around pt-3 pb-5">
                    <a className=""
                        href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={HTML5Icon} alt="HTML5" />
                    </a>
                    <a
                        href="https://www.w3.org/TR/CSS/#css"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={CSS3Icon} alt="CSS3" />
                    </a>
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={JavascriptIcon} alt="Javascript" />
                    </a>
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={reactIcon} alt="react" />
                    </a>
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={tailwindIcon} alt="Tailwind" />
                    </a>
                    <a
                        href="https://getbootstrap.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={BootstrapIcon} alt="BootStrap" />
                    </a>
                </div>
                <div className="d-flex justify-content-around">
                    <a
                        href="https://nodejs.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={nodeIcon} alt="Node.JS" />
                    </a>
                    <a
                        href="https://expressjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={ExpressIcon} alt="Express" />
                    </a>
                    <a
                        href="https://www.mysql.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={mysqlIcon} alt="MySQL" />
                    </a>
                    <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={MongoDBIcon} alt="MongoDB" />
                    </a>
                    <a
                        href="https://graphql.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={GraphQLIcon} alt="GraphQL" />
                    </a>
                    <a
                        href="https://www.heroku.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="aboutIcon" src={HerokuIcon} alt="Heroku" />
                    </a>
                    {/* </div> */}
                </div>
            </section>
        </main >
    )
}

export default Aboutme;