import React from "react";
import "../home/home.css"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { introdata } from "../../content_option";
import Typewriter from "typewriter-effect";

export const Home = () => {
    return(
        <HelmetProvider className="bcktst">
            <Helmet>
                <title>Home </title>
            </Helmet>
        <body id="background">
        
            <div className ="intro">
                {/* Shows introdata title from content-options */}
                <h2 className="align-self-center"> {introdata.title}</h2>
                <h3 className="animateText">
                <Typewriter options={{
                    strings: [
                        // shows the animated text on screen
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                }} />
                </h3>
            </div>
            </body>
        </HelmetProvider>
    )
}