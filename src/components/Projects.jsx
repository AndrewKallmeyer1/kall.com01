import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

function Projects() {
   return (
    <div id="projects" className="proj-section">
      <h3 className="section-title">Projects</h3>

      <div className="project-row">
        <img src={project1} alt="Project 1" className="project-image hover-zoom" />
        <div className="project-description">
          <a 
            href="https://github.com/CSCI3356-Fall2024/Joaks" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            <h4>Green2Go Boston College</h4>
          </a>
          <p>
            Green2Go Boston College was a project that I worked on in a 5 person team to provide a solution to Boston College's sustainable dining problem. BC's sustainable dining program has historically been underutilized, and Green2Go solves this by providing students with an incentive-based earn and redeem platform to earn points through using sustainable dining options to later be redeemed for various incentives, such as food or merchandise. This project uses Django, a Python framework, that connects to a Postrges database, and uses common framework components such as object models, front-end templates, and form handling.
          </p>
        </div>
      </div>

      <div className="project-row">
        <img src={project2} alt="Project 2" className="project-image hover-zoom" />
        <div className="project-description">
          <a 
              href="https://github.com/AndrewKallmeyer1/EagleExpedition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <h4>Eagle Expedition</h4>
            </a>
          <p>
            Eagle Expedition was a project that I built for my Object-Oriented Design class, which uses OOP principles to create an interactive, Oregon Trail-style game based on Boston College. The user has the ability to traverse the map of the BC area, encountering various locations represented by ASCII art, and needs to manage the resources and health of their group in order to get to their final destination. This project was built in Java, and is run through the user's local terminal. OOP designs such as factory, iterator, and proxy helped me to organize this project efficiently, and led to the end result you see here. 
          </p>
        </div>
      </div>

      <div className="project-row">
        <img src={project3} alt="Project 3" className="project-image hover-zoom" />
        <div className="project-description">
          <a 
                href="https://github.com/bccss/hacktheheights" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                <h4>Hack the Heights</h4>
              </a>          
          <p>
            Hack the Heights is a hackathon run by the Boston College Computer Science Society, gathering hundreds of students to participate in competition-based coding over two days to win prizes. The website shown here is built in React, and was updated frequently to communicate scheduling, events, and other hackathon-related information. I participated in the development of this site to create some of these components, including the photo carousel and events widgets. In addition to this tech contribution, I also was an board member in BCCSS, where I ran coding workshops for underclassmen to teach development basics. 
          </p>
        </div>
      </div>
    </div>
   );
}

export default Projects;

