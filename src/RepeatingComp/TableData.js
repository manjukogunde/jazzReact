import React from "react"

function TableData(props){
 
    
    function letsTry(){
        return(<h1>Hello</h1>)
    }


    let col2Class;
    if(props.col2Data==='1') col2Class="greenT";
    else if(props.col2Data==='2')col2Class="orangeT";
    else if(props.col2Data==='3') col2Class="blueT";
    else{col2Class=""}
    let h
    if(props.col6==="Succesful") h={color:"green",fontWeight:"bold"}
    else if(props.col6==="Pending Approval")h={color:"orange",fontWeight:"bold"}
    let m={borderSpacing: "0%"}

    return(
       
        <tr className="row">
            
            <td>{props.col1}</td>
            <td> <p className={col2Class}>{props.col2}</p></td>
            <td >{props.col3}</td>
            <td>{props.col4}</td>
            <td>{letsTry}{props.col5}</td>
            <td style={h}>{props.col6}</td>
            <td style={m}><img className="pink-gear" src={props.col7}/></td>
        </tr>
    )
}

export default TableData