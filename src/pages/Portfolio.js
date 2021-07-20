import React from 'react';
import '../index.css';
import '../App.css';
import MarsDaily from '../assets/images/largeLayoutMars.png';
import GroupMentality from '../assets/images/homepage-screenshot.jpg';
import FirstPortfolio from '../assets/images/portfolio1.jpg';


export default function Portfolio() {
    return (
        <div className="portfolio" id="Portfolio">
            <div className="col-12 col-lg-8">
                <h2>Portfolio</h2>
            
            
                <div>
                    <p>Mars Daily - Project 1</p>
                    <a href="https://bborumoore.github.io/mars-daily/" target="_blank" rel="noreferrer">
                    <img src={MarsDaily} width="100px" height="100px" alt="Mars Daily" />
                    </a>
                </div>

                <div>
                    <p className="Group-Mentality">Group Mentality - Project 2</p>
                    <a alt="Second Project" id="second"></a>
                    <a href="https://radiant-river-17780.herokuapp.com/" target="_blank">
                    <img src={GroupMentality} width="100px" height="100px" alt="Group Mentality" />
                    </a>
                </div>

                <div>
                    <p className="First-Portfolio">My First Portfolio - See my growth!</p>
                    <a alt="First Portfolio" id="third"></a>
                    <a href="https://jamtrip7.github.io/portfolio/index" target="_blank">
                    <img src={FirstPortfolio} width="100px" height="100px" alt="First Portfolio" />
                    </a>
                </div>
        
            </div>
        </div>
    )
}
