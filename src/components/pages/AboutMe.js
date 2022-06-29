// import React, { useState } from 'react';
import me from '../../images/Me.jpg';

function Aboutme() {

    return (

        <main className="container1" id="aboutMe">
            <header className="sectionAboutMe h2" >
                About Me
            </header>

            <img src={me} className="rounded-circle Personal Image aboutMeIMG mx-auto aboutmepic" alt='Jesse'></img>

            <div className="aboutMeOverview mx-auto">
                <p>Full Stack Web Development</p>

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
                <ul type="none">
                    <li className="h5">Interests:</li>
                    <ul type="square">
                        <li>Front End Development</li>
                        <li>Back End Development</li>
                        <li>Python</li>
                        <li>MERN Stack</li>
                        <li>Learning new frameworks.</li>
                    </ul>
                </ul>
            </section>
            <section className="aboutEducation">
                <ul type="none">
                    <li className="h5">Education:</li>
                    <li> <i className="fa-solid fa-building-columns text-dark"></i>University of Wisconsin - Milwaukee</li>
                    <ul type="none">
                        <li> <i className="fa-solid fa-graduation-cap text-dark fa-sm"></i>Lubar School of Business - Finance
                        </li>
                        <li> <i className="fa-solid fa-graduation-cap text-dark fa-sm"></i>College of Letters & Science -
                            Economics</li>
                    </ul>
                    <li> <i className="fa-solid fa-building-columns text-dark"></i>Northwestern University</li>
                    <ul type="none">
                        <li> <i className="fa-solid fa-graduation-cap text-dark fa-sm"></i>Full Stack Web Development
                            Certificate (Current)</li>
                    </ul>
                </ul>
            </section>
        </main>
    )
}

export default Aboutme;