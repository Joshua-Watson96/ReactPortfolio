import React, { useState } from "react";
import "./header.css"
import { nameText, socialprofiles  } from "../content_option";
import { Link } from "react-router-dom";

const Headermain = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return(
        <>
        <header className="fixed-top site__header">
         <div className="d-flex align-items-center justify-content-between">
            <Link className="navbar-brand nav_ac">
                {nameText}
            </Link>
            </div>

            <div className="bg__menu h-100">
                <div className="menu__wrapper">
                    <div className="menu__container p-3">
                        <ul className="the_menu">
                            <li className="menu_item">
                                <Link to="/ReactPortfolio" className="my-3">Home</Link>
                            </li>
                            <li className="menu_item">
                                <Link to="/" className="my-3">Portfolio</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/about" className="my-3">About</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/" className="my-3">Resume</Link>
                            </li>
                            <li className="menu_item">
                                <Link  to="/" className="my-3">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
                <a href={socialprofiles.github}>Github</a>
                <a href={socialprofiles.linkedin}>Linkedin</a>
            </div>
            </div>

        </header>
        </>
    );
};

export default Headermain
