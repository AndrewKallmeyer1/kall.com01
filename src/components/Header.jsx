import React from 'react'; 
import { HashLink as Link } from 'react-router-hash-link'; 
import logo from "../assets/retrocomp.gif"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src ={logo} alt="logoo" />
            </div>
            <h1>
                ANDREW KALLMEYER
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="#about" className="link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="#projects" className="link">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="#resume" className="link">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link to="#contact" className="link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    ); 
}; 

export default Header; 