import React from "react";
import { BrowserRouter as Router, useLocation} from "react-router-dom";
import Headermain from "../header/header";
import AppRoutes from "./routes";

function location() {
    const { pathname } = useLocation()
    pathname
}
export default function App() {
    return(
        
        <Router basename="ReactPortfolio">
        <Headermain/>
            <AppRoutes/>
        
        
        </Router>
    )
}


