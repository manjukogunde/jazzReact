import React from "react"


function GenRows(props){
    return(
        
            <div className="gen-text">
                <p className="gen-text-L">{props.Left} </p>
                <p className="gen-text-R">{props.Right}</p>
         </div>

            
       
    )
}
export default GenRows