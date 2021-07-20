import React from 'react';
import '../index.css';
import '../App.css';
import ProfilePic from '../assets/images/Profile-Pic-1.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="about" id="About">
            <div className="col-12 col-lg-8">
            <img src={ProfilePic} alt="profiePic" width="150px" height="200px" style={{borderRadius: "50%"}} />

                <h2>About Me</h2>
        
                <p>I'm a Full Stack Web Developer with MSU's Coding Bootcamp currently learning MongoDB, JSCompression, React, among many other things learned, including HTML, CSS, and Javascript.</p>
                <p>I have 15 years of operations management experience. I am also the small business owner of Northern Grill Seasonings.</p>
                <p>Let's dream the the future and make it reality!</p>
            </div>
        </div>
        
    )
}
