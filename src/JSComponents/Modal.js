import React from "react"

class Modal extends React.Component{
    constructor(){
        super()
        this.state={
            ModalState:false
        }
        this.openModal=this.openModal.bind(this)
        this.closeModal=this.openModal.bind(this)

    }

    openModal(){
        
        this.setState(prevState => ({
            ModalState:!prevState.ModalState
          }));
          
    }

    closeModal(){
        this.setState(prevState => ({
            ModalState:!prevState.ModalState
          }));

    }

    render(){
        return(
            <div>
                <button onClick={this.openModal} className="envi-create">
                            CONFIGURE
                            {/* {<!-- <img src="./assets/right.png" alt=""> -->} */}
                </button>
                <div className="modal" style={this.state.ModalState? {display:"block"}:{display:"none"}}>
                    <div className="modal-content">
                        <h1 onClick={this.closeModal} className="close1">&times;</h1>
                        <p>Environment Configured.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal