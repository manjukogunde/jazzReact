import React from "react"
import QuestionIcon from "../assetsMain/question-mark-16.png"
import ArrowUp from "../assetsMain/arrow up.png"
import ArrowDown from "../assetsMain/arrow down.png"
import MsgIcon from "../assetsMain/message-2-16.png"
import NoteIcon from "../assetsMain/note-2-16.png"
import GearIcon from "../assetsMain/gear-2-16.png"
import TableD from "../RepeatingComp/TableData.js"
import TDArray from "../RepeatingComp/TableDataArray.js"


function CARD4(){
    const TArray= TDArray.map(item => <TableD key={item.id}
    col1={item.col1}
    col2={item.col2}
    col3={item.col3}
    col4={item.col4}
    col5={item.col5}
    col6={item.col6}
    col7={item.col7}
    col2Data={item.col2Data}
     />)
    return(
        <div className="card4">
            <table >
                    
                    <tbody>
                        <tr className="row1"> 
                            <th> <div className="hover-holder"> <div className="branch"> BRANCH <img className="question" src={QuestionIcon} alt=""/> </div>  </div> </th>
                            <th><div className="arrow"> STATUS <div className="arrows"><img src={ArrowUp} alt=""/> <img src={ArrowDown} alt=""/></div> </div> </th>
                            <th><div className="arrow"> ACCOUNT <div className="arrows"><img src={ArrowUp} alt=""/> <img src={ArrowDown} alt=""/></div> </div> </th>
                            <th><div className="arrow"> REGION <div className="arrows"><img src={ArrowUp} alt=""/> <img src={ArrowDown} alt=""/></div> </div> </th>
                            <th><div className="arrow"> LAST DEPLOYMENT <div className="arrows"><img src={ArrowUp} alt=""/> <img src={ArrowDown} alt=""/></div> </div> </th>
                            <th><div className="arrow"> DEPLOYMENT STATUS <div className="arrows"><img src={ArrowUp} alt=""/> <img src={ArrowDown} alt=""/></div> </div> </th>
                            <th><div className="column-seven"><img src={MsgIcon} alt=""/><img src={NoteIcon} alt=""/><img src={GearIcon} alt=""/></div></th>
                            <th></th>
                        </tr>

                        {TArray} 
                            
                        


                            
                    </tbody>
            </table>

        </div>
    )
}

export default CARD4