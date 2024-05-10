import React from 'react'; 
import philly from "../assets/philly.png"

const Footer = () => {
    return (
        <footer>
            <div className="skyline">
                <img src ={philly} alt="sky" />
            </div>
        </footer>
    ); 
}; 

export default Footer; 