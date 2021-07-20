import React from 'react';
import '../index.css';
import '../App.css';
import Resume1 from '../assets/resume/Tech-Resume.pdf'
import { Document, Page } from 'react-pdf'
import ResumeScreenshot from '../assets/images/resume-screenshot.jpg'
import TechResume from '../assets/resume/Tech-Resume.pdf'

export default function Resume() {
    return (
        <div className="resume" id="Resume">
            <div className="col-12 col-lg-8">
                <h2>Resume</h2>
               
                <p>View my progress on my <a className="github" href="https://github.com/jamtrip7" target="_blank" rel="noreferrer">GitHub.</a>
                </p>
                <p>Check out my <a className="resume1" href="../assets/images/resume-screenshot.jpg" target="_blank" rel="noreferrer">
                    <a href={TechResume}>
                    <img src={ResumeScreenshot} width="100px" height="100px" alt="Resume." />
                    {/* <Document file={Resume1}><Page pageNumber={1} /></Document> */}
                    </a>
                    </a>
                </p>
            </div>
        </div>
    
    )
}