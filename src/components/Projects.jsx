import React from 'react'

function Projects() {
   return (
      <div class="video">
        <h4 class="vidtext">
          This is a demonstration of a project that I did for my Object Oriented Design course this year. It uses structural, behavioral, and creational design patters to create a Oregon Trail-esque, Boston College-themed interactive game, coded entirely in Java. Go to my github to see the source code to this and other projects.  
        </h4>
    </div>
   )
};
export default Projects;


/*<ReactPlayer
            className='react-player fixed-bottom' 
            url= 'videos/backdrop.mp4'
            controls = {false}
            playing = {true}
            muted = {true}


        /> 
        
        <ReactPlayer
            url= 'videos/eagleexp.mov'
            className="react-player"
            loop={true}
            playing={true}
            playsinline={true}
            volume={0.5}
            muted={true}
            width = 'auto'
            onReady={(e) => {
                const player = e.getInternalPlayer();
                player.setAttribute('muted', 'true');
            }}
        />
        */