import React from "react"

class ActiveLinks extends React.Component{

    constructor(){
        super()
        this.state={
            StyleClass:[0,0,0],
            prevActive:-1,
            Active:{color: "#e20074", textDecoration:"underline",fontWeight:"bold"}
        }
    }

    SetActive(params){
        
        const newArr=this.state.StyleClass.splice()
        newArr[params]=1
        if(this.state.prevActive>-1){
            newArr[this.state.prevActive]=0
        }
        this.setState(prevState => ({
            StyleClass:newArr,
            prevActive:params
          }));
    }


    render(){
        return(
            <div className="snav">
                <p onClick={()=>{this.SetActive(0)}} className="clink" style={this.state.StyleClass[0]? this.state.Active:{}}>OVERVIEW</p>
                <p onClick={()=>{this.SetActive(1)}} className="clink" style={this.state.StyleClass[1]? this.state.Active:{}} >ACCESS CONTROL</p>
                <p onClick={()=>{this.SetActive(2)}} className="clink" style={this.state.StyleClass[2]? this.state.Active:{}} >COST</p>
            </div>
        )
    }

}

export default ActiveLinks