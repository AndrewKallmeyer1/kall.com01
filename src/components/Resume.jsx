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
        <div id="resume" className="rescontainer">
            <div className="resleftside">
                <div className="resumetext">
                    You can view my resume in full screen by clicking on the image. This website is built in React, which is listed below in a collection of languages and tools that I have experience in. 
                </div>
                <h4 class="backendtitle">
                    Backend
                </h4>
                <div className="backend">
                    <div className="betoolcontainer">
                        <a href="https://www.java.com/en/">
                            <img src={javalogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://www.python.org">
                            <img src={pythonlogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                            <img src={clogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://cplusplus.com">
                            <img src={cpluslogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.">
                            <img src={sqllogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="betoolcontainer">
                        <a href="https://nodejs.org/en">
                            <img src={nodejs} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                </div>
                <h4 class="frontendtitle">
                    Frontend
                </h4>
                <div className="frontend">
                    <div className="fetoolcontainer">
                        <a href="https://www.w3schools.com/html/">
                            <img src={htmllogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://www.javascript.com">
                            <img src={jslogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://www.w3schools.com/css/">
                            <img src={csslogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://react.dev">
                            <img src={reactlogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="fetoolcontainer">
                        <a href="https://getbootstrap.com">
                            <img src={bootstrap} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                </div>
                <h4 class="othertoolstitle">
                    Other Tools
                </h4>
                <div className="othertools">
                    <div className="ottoolcontainer">
                        <a href="https://git-scm.com">
                            <img src={gitlogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="ottoolcontainer">
                        <a href="https://www.figma.com">
                            <img src={figmalogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="ottoolcontainer">
                        <a href="https://www.notion.so/personal">
                            <img src={notionlogo} width="100" className="hover-zoom"/>
                        </a>
                    </div>
                    <div className="ottoolcontainer">
                        <a href="https://www.atlassian.com/software/jira">
                            <img src={jiralogo} width="100" className="hover-zoom"/>
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

