/*import React from 'react'; 
import resume from "../assets/resume.png"; 
import clogo from "../assets/clogo.png";
import cpluslogo from "../assets/cplus.png";
import pythonlogo from "../assets/pythonlogo.png";
import javalogo from "../assets/javalogo.png";
import sqllogo from "../assets/sqllogo.jpg";
import nodejs from "../assets/nodejs.png";

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Resume = () => {
    return (
        <resume>
            <div class="rescontainer">
                <div class="resleftside">
                    <div class="resumetext">
                        You can view my resume in full screen by clicking on the image. This website is built in React, which is listed below in a collection of languages and tools that I have experience in. 
                    </div>
                    <div class="backend">
                        <div class="betoolcontainer">
                            <a href="https://www.linkedin.com/in/andrew-kallmeyer/">
                                <img src={javalogo} width="100"/>
                            </a>
                        </div>
                        <div class="betoolcontainer">
                            <a href="https://github.com/AndrewKallmeyer1">
                                <img src={pythonlogo} width="100"/>
                            </a>
                        </div>
                        <div class="betoolcontainer">
                            <a href="https://github.com/AndrewKallmeyer1">
                                <img src={clogo} width="100"/>
                            </a>
                        </div>
                        <div class="betoolcontainer">
                            <a href="https://github.com/AndrewKallmeyer1">
                                <img src={cpluslogo} width="100"/>
                            </a>
                        </div>
                        <div class="betoolcontainer">
                            <a href="https://github.com/AndrewKallmeyer1">
                                <img src={sqllogo} width="100"/>
                            </a>
                        </div>
                        <div class="betoolcontainer">
                            <a href="https://github.com/AndrewKallmeyer1">
                                <img src={nodejs} width="100"/>
                            </a>
                        </div>
                    </div>
                    <div class="photoviewer">
                        <PhotoProvider>
                            <PhotoView src={resume}>
                                <img src={resume} alt="hello" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
                
            </div>
        </resume>
    ); 
}; 



export default Resume; 
*/

import React from 'react'; 
import resume from "../assets/resume.png"; 
import clogo from "../assets/clogo.png";
import cpluslogo from "../assets/cplus.png";
import pythonlogo from "../assets/pythonlogo.png";
import javalogo from "../assets/javalogo.png";
import nodejs from "../assets/nodejs.png";
import sqllogo from "../assets/sqllogo.jpg";
import reactlogo from "../assets/reactlogo.webp";
import csslogo from "../assets/csslogo.png";
import bootstrap from "../assets/bootstraplogo.png";
import htmllogo from "../assets/htmllogo.png";
import jslogo from "../assets/jslogo.png";
import figmalogo from "../assets/figmalogo.png";
import gitlogo from "../assets/gitlogo.png";
import notionlogo from "../assets/notionlogo.png";
import jiralogo from "../assets/jiralogo.png";





import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Resume = () => {
    return (
        <div className="rescontainer">
            <div className="resleftside">
                <div className="resumetext">
                    You can view my resume in full screen by clicking on the image. This website is built in React, which is listed below in a collection of languages and tools that I have experience in. 
                </div>
                <h4 class="backendtitle">
                    Backend
                </h4>
                <div className="backend">
                    <div className="betoolcontainer">
                        <a href="https://www.linkedin.com/in/andrew-kallmeyer/">
                            <img src={javalogo} width="100"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={pythonlogo} width="100"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={clogo} width="100"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={cpluslogo} width="100"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={sqllogo} width="100"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={nodejs} width="100"/>
                        </a>
                    </div>
                </div>
                <h4 class="frontendtitle">
                    Frontend
                </h4>
                <div className="frontend">
                    <div className="fetoolcontainer">
                        <a href="https://www.linkedin.com/in/andrew-kallmeyer/">
                            <img src={htmllogo} width="100"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={jslogo} width="100"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={csslogo} width="100"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={reactlogo} width="100"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={bootstrap} width="100"/>
                        </a>
                    </div>
                </div>
                <h4 class="othertoolstitle">
                    Other Tools
                </h4>
                <div className="othertools">
                    <div className="ottoolcontainer">
                        <a href="https://www.linkedin.com/in/andrew-kallmeyer/">
                            <img src={gitlogo} width="100"/>
                        </a>
                    </div>
                    <div className="ottoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={figmalogo} width="100"/>
                        </a>
                    </div>
                    <div className="ottoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={notionlogo} width="100"/>
                        </a>
                    </div>
                    <div className="ottoolcontainer">
                        <a href="https://github.com/AndrewKallmeyer1">
                            <img src={jiralogo} width="100"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="photoviewer">
                <PhotoProvider>
                    <PhotoView src={resume}>
                        <img src={resume} alt="Resume" />
                    </PhotoView>
                </PhotoProvider>
            </div>
        </div>
    ); 
}; 

export default Resume; 

