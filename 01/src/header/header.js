import React, { useState } from "react";
import "./header.css"
import { nameText, socialprofiles  } from "../content_option";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"

const Headermain = () => {
    const [isActive, setActive] = useState("false");

    

    return(
        <>
        <header className="header">
        
            <div className="fixed-header">
                <div className="nameTitle">
                {nameText}
                </div> 
                <div>
                    <div>
                        <ul className="the_menu">
                            <li className="menu_item">
                                <Link to="/" className="link">Home</Link>
                            </li>
                            <li className="menu_item">
                                <Link to="/portfolio" className="link" >Portfolio</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/about" className="link" >About</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/resume" className="link" >Resume</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/contact"className="link"  >Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="menu_footer ">
            <div className="footer-icons">
                <a href={socialprofiles.github}><FaGithub /></a>
                <a href={socialprofiles.linkedin}><FaLinkedin /></a>
                <a href={socialprofiles.stackOverflow}><FaStackOverflow /></a>
            </div>
            </div>

        </header>
        </>
    );
};

export default Headermain
