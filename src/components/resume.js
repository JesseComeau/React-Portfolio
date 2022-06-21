// import React, { useState } from 'react';
import resume from '../images/JesseComeauResume.pdf'

function Resume() {

    return (

        <section className="container3" id='resume'>
            <div className="sectionResume">
                <p className="h2">
                    Resume
                </p>
            </div>

            <embed src={resume} className='resume align-self-center' allowFullScreen={true} frameBorder="0" type="application/pdf"></embed>

        </section>
    )
}

export default Resume;