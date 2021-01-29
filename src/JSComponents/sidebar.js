import React from "react"
import profileImg from "../assetsMain/profile.png"


class Side extends React.Component{

    constructor(){
        super()
        this.state={
            ClassB:{}
        }
        this.closeNav=this.closeNav.bind(this)
        this.openNav=this.openNav.bind(this)
    }

    closeNav() {
        this.setState(prevState => ({
            
            ClassB:{}

          }));
          console.log("band karo")
    }
    openNav() {
        this.setState(prevState => ({
            
            ClassB:{transform: "translateX(0px)"}

          }));
          console.log("open sim sim")
        }

render(){
    return(
        <div>
            <div id="mySidebar" class="sidebar" style={this.state.ClassB}>
                <button onClick={this.closeNav} className="closebtn">&times;</button> 
                <a href="http://localhost:3000/www.google.com" >About</a>
                <a href="http://localhost:3000/www.google.com" >Overview</a>
                <a href="http://localhost:3000/www.google.com">Access Control</a>
                <a href="http://localhost:3000/www.google.com">Cost</a>
        </div>
        <img onClick={this.openNav} className="profile" src={profileImg} alt=""/>
      </div>
    )
}
    

   
}

export default Side