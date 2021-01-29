import React from "react"
import TitleT from "../RepeatingComp/TitleText.js"
import GenIcon from "../assetsMain/general@2x.png"
import AppIcon from "../assetsMain/approvals@2x.png"
import PlatformIcon from "../assetsMain/platform@2x.png"
import SnapIcon from "../assetsMain/photograph-clipart-snapshot-original.png"
import GeneralRow from "../RepeatingComp/GenRows.js"
import GeneralData from "../RepeatingComp/genDataArray.js"
import RefIcon from "../assetsMain/PngItem_194483.png"

function card1()
{
    const genArray = GeneralData.map(data =>  <GeneralRow key={data.id} Left={data.Left} Right={data.Right}/>)
    return(
        <div className="card1">
                <div className="general">
                    <TitleT  icon1URL={GenIcon} name="General"/>
                    <div className="general-2">
                        {genArray}
                    </div>
                </div>
                <div className="approval">
                    <div className="approval-1">
                        <TitleT icon1URL={AppIcon} name="Approval" />
                    </div>
                    <div className="approval-2">
                        <div className="app-line">
                        {/* <GeneralRow Left="Status" Right="Active"/> */}
                            <p className="app-line-L">Status</p>
                            <p className="app-line-R">Active</p>
                        </div>
                        
                        <div className="app-line-last">
                            {/* <GeneralRow Left="Status" Right="Active"/> */}
                            <p className="app-line-L">Domain</p>
                            <p className="app-line-R">tmo.com</p> 
                        </div>
                    </div>
                    <div className="approval-3">
                        <TitleT icon1URL={PlatformIcon} name="Platform"/>
                    </div>
                    <div className="approval-4">
                        <div className="app-line">
                            <p className="app-line-L">Provider</p>
                            <p className="app-line-R">AWS</p>
                        </div>
                        
        
                        <div className="app-line-last">
                            <p className="app-line-L">Subscription ID</p>
                            <p className="app-line-R">00975-OC1</p>
                        </div>
                    </div>
                </div>

                <div className="snapshot">
                    <div className="snapshot-1">
                        <TitleT icon1URL={SnapIcon} name="Snapshot"/>
                    </div>

                    <div className="snapshot-2">
                        
                        <div className="fivee">
                            <div className="five1">
                                5
                            </div>
        
                            <div className="five-captions">
                                <p>Total number of</p>
                                <p>Deployments</p>
                                <p>(Last 24 hours)</p>
                            </div>
                        </div>
        
                        <div className="twelve">
                            <div className="five1">
                                12
                            </div>
        
                            <div className="five-captions">
                                <p>Total number of</p>
                                <p>Environments</p>
                                <p>(Last 24 hours)</p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="snapshot-3">
                        <div className="references-logo">
                            <TitleT icon1URL={RefIcon} name="References"/>
                        </div>
                        
                        <div className="references">
                            <ul>
                                <a className="reflink" href="http://localhost:3000/">How to build a website on jazz</a>
                                <a className="reflink" href="http://localhost:3000/">About jazz Environments</a> 
                                <a className="reflink" href="http://localhost:3000/">Jazz CI/CD</a>
                            </ul>
                            
                        </div> 
        
                    </div>
                </div>

        </div>
    )
}

export default card1