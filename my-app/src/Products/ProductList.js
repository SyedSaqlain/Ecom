import React from 'react'
import '../Products/products.css'
import {ProductConsumer} from '../Contextapi';

function ProductList(props) {
    
  const {id,mrp,price,offertext,brandname,productname,image,quantity,incart} = props.product;
  
    return (
        <div>
           
                <ProductConsumer>
                    {(value)=>(
                        <div>
                            <div className="main_splitter">
                            <div className="products__left">
                               <img className="products__image" src={image} alt=""/>
                               <h3 style={{marginTop:"10px",textAlign:"left",marginLeft:"30px"}}>{offertext}</h3>
                            </div>

                            <div className="products__right">
                                <h2 style={{color:"green"}}>{brandname}</h2>
                                <p style={{color:"#DC143C"}}>{productname}</p>
                                <p>Quantity - {quantity}</p>
                                <h5>MRP - {mrp}</h5>
                                <h2>Price - ₹{price}</h2>
                                <button className="button_add_cart"  disabled={incart} onClick={()=> {value.addToCart(id)}}>
                                    {incart === true ? (<span>Incart</span>) : (<span>Add to cart</span>)}
                                </button>
                            </div>
                        </div>
                            <hr></hr>  
                        </div>
                        
                        
                    )}
                </ProductConsumer>
        </div>
        
    )
}

export default ProductList
