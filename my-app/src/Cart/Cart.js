import React from 'react'
import './cart.css'

import { ProductConsumer } from '../Contextapi';
import { Link } from 'react-router-dom';
import Modal from './Modal';
function Cart() {
 
  
    return (
        <div className="cart">
            <ProductConsumer>
              {(value)=>{
                if(value.Cart.length > 0){
                return  <div className="cart__container">
            <h3 style={{textAlign:"center",background:"#DC143C",color:"white",padding:"5px"}}>Order Summary</h3>
            <div className="main__splitter">
               <table >
                <tr >
                  <th style={{textAlign:"center"}}>Products</th>
                  <th style={{textAlign:"center"}}>Price</th>
                  <th style={{textAlign:"center"}}>Quantity</th>
                  <th style={{textAlign:"center"}}>Remove</th>
                  <th style={{textAlign:"center"}}>Total</th>
                </tr>
                
                {value.Cart.map(cartData => {
                  return <tr>
                  <td style={{textAlign:"center"}}>{cartData.productname}</td>
                <td style={{textAlign:"center"}}>{cartData.price}</td>
                         <td style={{textAlign:"center"}}>
                         <button onClick={()=>value.decrement(cartData.id)} className="cart__button__increment__decrement"><strong>-</strong></button> <strong>{cartData.quantity}</strong> <button onClick={()=>value.increment(cartData.id)} className="cart__button__increment__decrement"><strong>+</strong></button>
                           
                         
                          </td>
                          <td style={{textAlign:"center"}}>
                            <button onClick={()=>{value.removeItem(cartData.id)}} className="cart__button__remove">Remove</button>
                          </td>
                <td style={{textAlign:"center"}}>{cartData.total}</td>
                 </tr>
                })}  
                
                
                
             
              </table>
             
              
            </div>
            <Modal total={value.CartSubTotal}/>
             
            
            </div>
                } else {
                  return (
                    <div>
                      <h3>Currently your cart is empty </h3>
                      <Link to="/">
                      <button style={{marginLeft:"70px",marginTop:"20px"}} className="cart__button">Go to products</button>
                      </Link>
                    </div>
                  )
                }
              }}
            </ProductConsumer>
            {/* modal */}
            
        </div>
    )
}

export default Cart
