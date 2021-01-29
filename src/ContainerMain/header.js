import React from "react"
import jazzLogo from "../assetsMain/jazz-text-3.png"
import DropD from "../JSComponents/DropDown.js"
import SideBar from "../JSComponents/sidebar.js"



function MyInfo()
{
    
    return(
        <div className="title-bar">
            
    
            <div className="title-wrap">
                <div className="jazz-logo">
                    <img src={jazzLogo} alt="jazz-logo"/>
                </div>

                <div className="notifications">
                <DropD />
                <SideBar />
                    
                </div>
            </div>
        </div>

    )
    }  

export default MyInfo