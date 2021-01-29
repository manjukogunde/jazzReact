import React from "react"
import backPng from "../assetsMain/shape-copy-13@3x.png"
import ElecPng from "../assetsMain/electricity-32.png"
import EndPoint from "../assetsMain/Endpoint.png"
import Test from "../assetsMain/test.png"
import Metrics from "../assetsMain/metrics.png"
import Logs from "../assetsMain/logs.png"
import Code from "../assetsMain/code-64.png"
import Delete from "../assetsMain/delete.png"
import PBar from "../JSComponents/ProgressBar.js"
import NavLinks from "../JSComponents/ActiveLink.js"



function layer1(){
    
    
    

    return (
        <div className="layer1">
                <img className="back-png" src={backPng} alt=""/> 
                <div className="service-one">
                    <div className="stext">
                        Service-one
                        <img src={ElecPng} alt=""/>
                    </div>
                    <NavLinks />
                </div>

                <div className="progress">
                    <PBar />
                    <div className="pbar-captions">
                        <p>Next Action : </p>
                        <p className="text2">Configure Environments</p>
                    </div>
                </div> 

                <div className="icons">
                    <figure1 className="icon1">
                        <img className="icon-pack" src={EndPoint} alt="ENDPOINT"/>
                        <figcaption>Endpoint</figcaption>
                    </figure1>
                    <figure1>
                        <img className="icon-pack" src={Test} alt="TEST"/>
                        <figcaption>Test</figcaption>
                    </figure1>
                    <figure1>
                        <img className="icon-pack" src={Metrics} alt="METRICS"/>
                        <figcaption>Metrics</figcaption>
                    </figure1>
                    <figure1>
                        <img className="icon-pack" src={Logs} alt="LOGS"/>
                        <figcaption>Logs</figcaption>
                    </figure1>
                    <figure1>
                        <img className="icon-pack" src={Code} alt="CODE"/>
                        <figcaption>Code</figcaption>
                    </figure1>
                    <figure1>
                        <img className="icon-pack" src={Delete} alt="DELETE"/>
                        <figcaption>Delete</figcaption>
                    </figure1>

                </div>
        </div>
    )
}

export default layer1