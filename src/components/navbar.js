// import React, { useState } from 'react';

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navColor">
                <a className="navbar-brand navText">Jesse Comeau</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navText"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link navText" href="#aboutMe">About Me</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navText" href="#Projects" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#Projects">Bootcamp Projects</a>
                                </li>
                                <li>
                                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                                <li>
                                    <a className="dropdown-item ms-4" href="#Phase1">Phase 1</a>
                                </li>
                                <li>
                                    <a className="dropdown-item ms-4" href="#Phase2">Phase 2</a>
                                </li>
                                <li>
                                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                                <li><a className="dropdown-item disabled" href="#Projects">Personal Projects</a></li>
                                <li>
                                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navText" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navText" href="#contact">Contact</a>
                        </li>

                    </ul>
                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                    <a href="mailto:jesseC262@gmail.com">
                        <i className="bi bi-envelope-fill h4 px-2"></i>
                    </a>
                    <a href="https://github.com/JesseComeau" target="_blank">
                        <i className="bi bi-github h4 px-2"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jessecomeau/" target="_blank">
                        <i className="bi bi-linkedin h4 px-2"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;