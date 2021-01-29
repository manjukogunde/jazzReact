import React from "react"
import Layer1 from "../MainComp/layer1.js";
import CARD1 from "../MainComp/card1.js"
import ENVI from "../MainComp/environment.js"
import CARD2 from "../MainComp/card2.js"
import CARD4 from "../MainComp/card4.js"




function Main(){
    


    return(
        <div className="main">
            <Layer1 />
            <CARD1 />
            <ENVI />
            <CARD2 />
            <CARD4 />
        </div>
    )
}

export default Main