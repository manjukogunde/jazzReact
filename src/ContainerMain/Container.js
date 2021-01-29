import React from "react"
import TITLE_BAR from "./header.js"
import NavBar from "./nav-bar.js"
import Main from "./Main.js"
import Foot from "./footer.js"



function Container(){

    return(
        <div>

        <TITLE_BAR/>
        <NavBar />
        <Main />
        <Foot />
    </div>
    )
}
    
export default Container