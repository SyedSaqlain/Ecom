import React , { useEffect } from 'react'
import '../Products/products.css'
import ProductList from './ProductList'
import {ProductConsumer} from '../Contextapi';

function Products() {
    const [data,setData] = React.useState([]);
     
     
    useEffect(() => {
        fetch('data.json').then(function(response){
            return response.json();
        }).then(function (data) {
           setData(data);
           
        }).catch(function (error){
            console.error('Something went wrong')
            console.error(error)
        })
        
      },[]);

    return (
        
        <div className="products">
            <div className="products__container">   
             <ProductConsumer>
                {(value)=>{
                    return value.products.map(product =>{
                        return <ProductList key={product.id} product={product}/>
                    })
                }}
            </ProductConsumer> 
            </div> 
        </div>
    )
}

export default Products
