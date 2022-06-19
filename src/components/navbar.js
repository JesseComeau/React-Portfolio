import React, { useState } from 'react';

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navColor">
                <href className="navbar-brand navText">Jesse Comeau</href>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navText"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <href className="nav-link active navText" aria-current="page" href="#">Home</href>
                        </li>
                        <li className="nav-item">
                            <href className="nav-link navText" href="#aboutMe">About Me</href>
                        </li>
                        <li className="nav-item dropdown">
                            <href className="nav-link dropdown-toggle navText" href="#Projects" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </href>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><href className="dropdown-item" href="#Projects">Bootcamp Projects</href></li>
                                <li>
                                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                                <li><href className="dropdown-item ms-4" href="#Projects">Phase 1</href></li>
                                <li><href className="dropdown-item ms-4" href="#">Phase 2</href></li>
                                <li>
                                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                                <li><href className="dropdown-item disabled" href="#Projects">Personal Projects</href></li>
                                <li>
                                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <href className="nav-link navText" href="#contact">Contact</href>
                        </li>

                    </ul>
                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>

                    <href href="mailto:jesseC262@gmail.com">
                        <i className="bi bi-envelope-fill h4 px-2"></i>
                    </href>
                    <href href="https://github.com/JesseComeau" target="_blank">
                        <i className="bi bi-github h4 px-2"></i>
                    </href>
                    <href href="https://www.linkedin.com/in/jessecomeau/" target="_blank">
                        <i className="bi bi-linkedin h4 px-2"></i>
                    </href>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;