import React from 'react'; 
import logo from "../assets/retrocomp.gif"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src ={logo} alt="logoo" />
            </div>
            <h1>
                Andrew Kallmeyer
            </h1>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Resume
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>
        </header>
    ); 
}; 

export default Header; 