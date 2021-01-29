import React from "react"
import leftArrow from "../assetsMain/shape-copy-2.png"
function navBar(){
    return(
        <div className="nav-bar">
        <img src={leftArrow} alt=""/>
        <div className="nav-links">
            <a className="home" href="www.google.com">Home</a>
            <div className="bar">/</div>
            <a className="home" href="www.google.com">Services</a>
            <div className="bar">/</div>
            <a className="home-2" href="www.google.com">Service One(API-Python)</a>
        </div> 
    </div>
    )
}



export default navBar