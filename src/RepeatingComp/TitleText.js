import React from "react"
import pencil from "../assetsMain/clipart945737.png"


function TitleText(props){
    console.log(props)
    return(
        
        
        <div className="general-title"> 
            <img className="gen-icon1" src={props.icon1URL} alt=""/>
             <h1 className="gen">{props.name}</h1> 
            <img className="gen-icon2" src={pencil} alt=""/>
        </div> 
    )
}

export default TitleText