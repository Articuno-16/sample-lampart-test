import "./style.css"
import { Logo } from './Images'
import React from "react";
import Navbar from "./Navbar";

function Header() {
    // console.log('...log from Header')
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="left" style={{marginLeft:"3%"}}></img>
            <Navbar />           
            <div className="clear-float"></div>
        </div>
    )
}

export default Header