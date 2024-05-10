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
            <div class="container">
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
                            <p className="legend">Presentation</p>
                        </div>
                    </Carousel>
                </div>
                <div class="text">
                    Hey! My name is Andrew Kallmeyer. I am a current junior, soon to be rising senior at Boston College in Chestnut Hill, MA. I'm majoring in Computer Science with a minor 
                    in Business, and I am working at FreedomPay as a Project Management intern this summer in Philadelphia, my home city. I am also in the Computer Science Society at BC, 
                    putting on educational and community engagement events for the CS community at BC. Outside of class, I am a huge basketball fan (Go Sixers), and I enjoy spending time 
                    with friends! This page is a host to my professional information as well as some personal projects I've done over the years and information to contact me. Thanks!  
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

