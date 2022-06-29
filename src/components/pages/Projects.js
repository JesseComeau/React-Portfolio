// import React, { useState } from 'react';
import TacoBoutHoppinessImg from '../../images/TacoBoutHoppiness.jpg'
import workdayScheduleImg from '../../images/WordaySchedule.jpg'
import WeatherDashboardImg from '../../images/WeatherDashboard.jpg'
import ManyFestImg from '../../images/ManyFest.jpg'
import TechBlogImg from '../../images/TechBlog.jpg'


function Projects() {

    return (

        <section className="container2">

            <div className="sectionProjects h2">Projects</div>

            <div className="phase1 h3 pt-5 mx-auto" id='Phase1'>
                <a href="Projects">
                </a>Phase 1
            </div>

            <section className="project1 h-50" >
                <div className="card" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={TacoBoutHoppinessImg} alt="Taco Bout Hoppiness"></img>
                        <div className="card-body h-25">
                            <h5 className="card-title">Taco Bout Hoppinesss</h5>
                            <h6>Group Project - Project 1</h6>
                            <p className="card-text">The team used three different APIs(Open Weather, Open
                                brewey
                                DB,
                                and Documenu) to convert the user's Zipcode to Latitude/Longitude coordinates, then
                                retreive
                                nearby breweries and Mexican restaurants. Each of the returned results displays the
                                business
                                name, address, website(if available) in addition to brewery categories and restaurant
                                menus.
                            </p>
                            <p>
                                Personal Contribution - Owned and implemented the Javascript API integration of the OpenBrewery
                                API. Assisted with the initial implementation of the HTML and CSS, along with generating the
                                template literal.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-around my-3">
                                    <i className="text-danger fa-xl fa-brands fa-html5"></i>
                                    <i className="text-primary fa-brands fa-css3-alt fa-xl"></i>
                                    <i className="fa-brands fa-js fa-xl text-success"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body h-50">
                            <a href="https://github.com/JesseComeau/Taco-bout-Hoppiness" className="card-link">Repo</a>
                            <a href="https://jessecomeau.github.io/Taco-bout-Hoppiness/" className="card-link">Deployed
                                link</a>
                        </div>
                </div>
            </section>


            <article className="homework1">
                <div className="card h-100" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={workdayScheduleImg} alt="Homework 1"></img>
                        <div className="card-body h-75">
                            <h5 className="card-title">Workday Schedule</h5>
                            <p className="card-text">Created an application utilizing Moment.JS to create a workday
                                scheduler
                                that
                                saves to local storage.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-around my-3">
                                    <i className="text-danger fa-xl fa-brands fa-html5"></i>
                                    <i className="text-primary fa-brands fa-css3-alt fa-xl"></i>
                                    <i className="fa-brands fa-js fa-xl text-success"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/JesseComeau/Workschedule" className="card-link">Repo</a>
                            <a href="https://jessecomeau.github.io/Workschedule/" className="card-link">Deployed link</a>
                        </div>
                </div>
            </article>

            <article className="homework2">
                <div className="card h-100" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={WeatherDashboardImg} alt="Homework 2"></img>
                        <div className="card-body h-75">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">Created an application that displays a forecast of the weather using
                                the
                                OpenWeather API.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-around my-3">
                                    <i className="text-danger fa-xl fa-brands fa-html5"></i>
                                    <i className="text-primary fa-brands fa-css3-alt fa-xl"></i>
                                    <i className="fa-brands fa-js fa-xl text-success"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/JesseComeau/WeatherApp" className="card-link">Repo</a>
                            <a href="https://jessecomeau.github.io/WeatherApp/" className="card-link">Deployed link</a>
                        </div>
                </div>
            </article>

            <div className="phase2 h3 pt-5 mx-auto" id='Phase2'>
                <a href="Projects">
                </a>Phase 2
            </div>

            <section className="project2 h-50">
                <div className="card" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={ManyFestImg} alt="Taco Bout Hoppiness"></img>
                        <div className="card-body h-25">
                            <h5 className="card-title">ManyFest</h5>
                            <h6>Group Project - Project 2</h6>
                            <p className="card-text">The team used three different APIs(Open Weather, Open
                                brewey
                                DB,
                                and Documenu) to convert the user's Zipcode to Latitude/Longitude coordinates, then
                                retreive
                                nearby breweries and Mexican restaurants. Each of the returned results displays the
                                business
                                name, address, website(if available) in addition to brewery categories and restaurant
                                menus.
                            </p>
                            <p>
                                Personal Contribution - Owned and implemented the Javascript API integration of the OpenBrewery
                                API. Assisted with the initial implementation of the HTML and CSS, along with generating the
                                template literal.
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-around my-3">
                                    <i className="text-success fa-xl fa-brands fa-node"></i>
                                    <i className="text-primary fa-brands fa-css3-alt fa-xl"></i>
                                    <i className="fa-brands fa-js fa-xl text-success"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body h-50">
                            <a href="https://github.com/JesseComeau/ManyFest" className="card-link">Repo</a>
                            <a href="https://manyfestapp.herokuapp.com/" className="card-link">Deployed
                                link</a>
                        </div>
                </div>
            </section>

            <article className="homework3">
                <div className="card h-100" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={WeatherDashboardImg} alt="Homework 3"></img>
                        <div className="card-body h-75">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">Created an application that displays a forecast of the weather using
                                the
                                OpenWeather API.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-around my-3">
                                    <i className="text-danger fa-xl fa-brands fa-html5"></i>
                                    <i className="text-primary fa-brands fa-css3-alt fa-xl"></i>
                                    <i className="fa-brands fa-js fa-xl text-success"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/JesseComeau/Refactor" className="card-link">Repo</a>
                            <a href="https://jessecomeau.github.io/Refactor/" className="card-link">Deployed link</a>
                        </div>
                </div>
            </article>

            <article className="homework4">
                <div className="card h-100" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={TechBlogImg} alt="Homework 4"></img>
                        <div className="card-body h-75">
                            <h5 className="card-title">Tech Blog</h5>
                            <p className="card-text">Created a wordpress style site utilizing Node, Express, and a sql database incorporating user signup/login and cookies.</p>
                            <p className="card-text">Deployed to Heroku utilizing Jaws DB for the backend database.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex justify-content-around my-3">
                                    <i className="text-danger fa-xl fa-brands fa-html5"></i>
                                    <i className="text-primary fa-brands fa-css3-alt fa-xl"></i>
                                    <i className="fa-brands fa-js fa-xl text-success"></i>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body">
                            <a href="https://github.com/JesseComeau/Tech_Blog" className="card-link">Repo</a>
                            <a href="https://techblog-jc.herokuapp.com/" className="card-link">Deployed link</a>
                        </div>
                </div>
            </article>

        </section>
    )
}

export default Projects;