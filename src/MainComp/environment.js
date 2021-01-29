import React from "react"
import GridIcon from "../assetsMain/grid-three-up-32.png"
import ServicesIcon from "../assetsMain/services-32.png"
import SearchIcon from "../assetsMain/search-2-32.png"
import ListIcon from "../assetsMain/list-32.png"

function Environment(){
    return(
        <div className="environment">
        <div className="envi1">
            ENVIRONMENTS
            <img className="services" src={ServicesIcon} alt=""/>
            <div className="hover1"> Edit environment settings </div>
        </div>

        <div className="envi2">
            <div className="create-environment">
                CREATE ENVIRONMENT
            </div>
            <img  src={SearchIcon} alt=""/>
            <img src={GridIcon} alt=""/>
            <img src={ListIcon} alt=""/>
        </div>
        

    </div>
    )
}

export default Environment