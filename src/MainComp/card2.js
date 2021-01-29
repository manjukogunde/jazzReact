import React from "react";
import GroupIcon from "../assetsMain/group-6@2x.png"
import Modal from "../JSComponents/Modal.js"

function CARD2(){
    return(
        <div className="card2">
                <div className="envi-text">
                    <img src={GroupIcon} alt=""/>
                    <p>4 new environments have been added. Let's configure them!</p>
                </div>
                <Modal />
                
                
            </div>
    )
}

export default CARD2