import React from "react"

class ProgressBar extends React.Component{

     constructor(){
         super()
         this.state={
             StyleClass:[0,0,0,0],
             ClassNum:''
         }
         this.LinkActive=this.LinkActive.bind(this)
         
     }

     LinkActive(params){
        const StyleClass1=this.state.StyleClass.splice()
        for(let i=0;i<this.state.StyleClass.length;i++)
        {   
            if(i<=params)
             {
                StyleClass1[i]=1
             }
             else if(i>params){
                
                StyleClass1[i]=0
             }
         }
         this.setState({
            StyleClass:StyleClass1
         }
         )
     }

render(){
    return(
        <div className="pbar">
                        <div onClick={()=>{this.LinkActive(0)}} style={this.state.StyleClass[0]? {background:"green"}:{}} className="ebar"></div>
                        <div onClick={()=>{this.LinkActive(1)}} style={this.state.StyleClass[1]? {background:"green"}:{}} className="ebar"></div>                
                        <div onClick={()=>{this.LinkActive(2)}} style={this.state.StyleClass[2]? {background:"green"}:{}} className="ebar"></div>
                        <div onClick={()=>{this.LinkActive(3)}} style={this.state.StyleClass[3]? {background:"green"}:{}} className="ebar"></div>
                    </div>
    )
}
}

export default ProgressBar