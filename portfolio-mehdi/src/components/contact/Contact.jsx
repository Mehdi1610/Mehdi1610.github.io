import React, { useState } from "react";
import './styleContact.css';

function Contact(){
        return(
            <>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title-container">
                        <h2 className="section-title">Contact</h2>
                        <p className="section-subtitle">Get in touch with me & Connect with me</p>
                    </div>
                    <div className="section-content">
                        <p>LinkedIn</p>
                        <p>mail</p>
                        <p>Location</p>
                        <div className="downloader">
                            <p>You can Download my Curriculum vitae for More details :</p>
                            <p>CV</p> 
                        </div>
                    
                    </div>
                </div>
            </section>
            
            </>
        );
    }

export default Contact