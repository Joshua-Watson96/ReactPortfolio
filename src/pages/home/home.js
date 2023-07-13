import React from "react";
import "../home/home.css"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <HelmetProvider>
            <Helmet>
                <title>test </title>
            </Helmet>
        </HelmetProvider>
    )
}