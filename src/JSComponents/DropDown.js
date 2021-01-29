import React from "react"
import bellImg from "../assetsMain/icon-notifcation.png"
class DropDown extends React.Component{
    
    constructor(){
        super()
        this.state={
            Drop:false,
            ClassA:{}
        }
        this.dropdown=this.dropdown.bind(this)
        this.dropUp=this.dropUp.bind(this)
    }
    dropdown(){
        this.setState(prevState => ({
            Drop: !prevState.Drop,
            ClassA:{display: "block",width:"80px",height:"200px",maxHeight:"100px",overflow: "auto"}

          }));
    }
    dropUp(){
        this.setState(prevState => ({
            Drop: !prevState.Drop,
            ClassA:{}
          }));
    }

    render(){
        return(
            <div className="drop">
                <div className="dropDown" style={this.state.ClassA}>
                    <div>
                        <a href="http://localhost:3000/www.google.com">ADD</a> 
                        <a href="http://localhost:3000/www.google.com">TIMER</a>
                        <a href="http://localhost:3000/www.google.com">FIND</a>
                    </div>
                </div>
                    
                
                <img onClick={this.state.Drop? this.dropUp : this.dropdown} className="bell" src={bellImg} alt=""/>
                </div>
                )
    }
   
       
    }
export default DropDown