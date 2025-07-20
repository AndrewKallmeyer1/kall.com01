import React from 'react'; 
import andrew from "../assets/andrew.png"
import tess from "../assets/tessapic.png"
import pres from "../assets/pres.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const About = () => {
    return (
        <about>
            <div id="about" class="container">
                <div className="box">
                    <Carousel showArrows={true}>
                        <div>
                            <img src={andrew} />
                            <p className="legend">Andrew Kallmeyer</p>
                        </div>
                        <div>
                            <img src={tess} />
                            <p className="legend">With my dog, Tessa</p>
                        </div>
                        <div>
                            <img src={pres} />
                            <p className="legend">Getting my degree</p>
                        </div>
                    </Carousel>
                </div>
                <h1 className="abouttitle">
                    About
                </h1>
                <div class="text">
                    My name is Andrew Kallmeyer. Born and raised in Philadelphia, I recently acheived my Bachelor's of Science in Computer Science and a minor in Business from Boston College in Chestnut Hill, MA. I've spent my academic career learning and executing full stack development, and have since combined this knowledge with my leadership and communication skills to work in project management at FreedomPay, a global payments securer and provider that works with some of the biggest hospitality, food service, and retail clients in the world. Currently, I am a PM intern at FP training to become a full-time Scrum Master in August 2025. 
                </div>
                <div class="links">
                    <div class="imgcontainer">
                        <a href="https://www.linkedin.com/in/andrew-kallmeyer/">
                            <img src={linkedin} width="100"/>
                        </a>
                    </div>
                    <div class="imgcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={github} width="100"/>
                        </a>
                    </div>
                </div>
            </div>
        </about>
    ); 
}; 



export default About; 

