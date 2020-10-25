import React, {useState} from 'react'
import './cart.css'
function Modal(props) {
    const [modalState,setModalState] = useState(false);

    const manageState = () =>{
        setModalState(!modalState)
    }
    return (
        <div className="apps">
             <div className={`modal__background modal__showing-${modalState}`}>

                <div style={{display:"flex"}}>
                    <div style={{flex:0.5}}></div>
                    <div>
                    <div style={{marginTop:"300px",border:"1px solid",background:"white",height:"150px",padding:"20px"}}>
                        <button onClick={()=>manageState()} style={{background:"black",color:"white",marginLeft:"290px"}}> x </button>
                    <h4 style={{color:"red",marginTop:"20px"}}>Total Amount to be paid - {props.total}</h4>
                    <p style={{marginTop:"30px",color:"green"}}>Transaction Successful</p>
                    </div>
                    </div>
                </div>
            
             </div>
             <button className="cart__button" onClick={()=>manageState()}>Proceed To Checkout</button>
        </div>
        
    )
}

export default Modal
