// import React, { useState } from 'react';

function ContactForm() {

    return (

        <div className="container4">
        <a href="contact" content="contact form"></a>
        <div className="contactMeSection">
            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
            <h6 className="h6 text-center">JesseC262@gmail.com</h6>
                <h6 className="h6 text-center mt-2">(262) 236-6724</h6>


        </div>
        <div className="contactMeName">
            <input type="text" id="name" name="name" className="form-control"></input>
            <label for="name" className="">Your name</label>
        </div>

        <div className="contactMeEmail">
            <input type="text" id="email" name="email" className="form-control"></input>
            <label for="email" className="">Your email</label>
        </div>

        <div className="contactMeSubject">
            <input type="text" id="subject" name="subject" className="form-control"></input>
            <label for="subject" className="">Subject</label>
        </div>


        <div className="contactMeMessage">
            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
            <label for="message">Your message</label>
        </div>


        <div className="text-center text-md-left contactMeSubmit">
            <button className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</button>
        </div>

    </div>
    )
}

export default ContactForm;