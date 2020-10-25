import React , {Component} from 'react';
import {dataProducts,productDetails} from './appData';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    
    state={
        products : dataProducts,
        detailProduct:productDetails,
        Cart:[],
        CartSubTotal:0
        
    }

    getItem = (id)=>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    
    addToCart = (id) =>{
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.incart = true;
        product.quantity = 1;
        const price = product.price
        product.total = price
        this.setState(()=>{
            return {products: tempProducts,Cart:[...this.state.Cart,product]}
        },()=>{this.makeTotal()})
    }

    increment = (id) =>{
        let tempCart = [...this.state.Cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.quantity = product.quantity + 1;
        product.total = product.quantity * product.price;
        this.setState(()=>{
            return {Cart : [...tempCart]}
        },()=>{
            this.makeTotal();
        })
    }

    decrement = (id) =>{
        let tempCart = [...this.state.Cart];
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.quantity = product.quantity - 1;
        product.total = product.quantity * product.price;
        this.setState(()=>{
            return {Cart : [...tempCart]}
        },()=>{
            this.makeTotal();
        })
    }

    removeItem = (id)=>{
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.Cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removeProd = tempProduct[index];
        removeProd.incart = false;
        removeProd.total = 0;
        removeProd.quantity = 0;

        this.setState(()=>{
                return {
                    Cart:[...tempCart],
                    product : [...tempProduct]
                }
        },()=>{
            return this.makeTotal();
        })
    }

    makeTotal = () =>{
        let subTotal = 0;
        this.state.Cart.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(()=>{
            return {
                CartSubTotal : subTotal
            }
        })
    }
    render(){
        
        
        return (
            <ProductContext.Provider value={{
                ...this.state,
                addToCart:this.addToCart,
                increment : this.increment,
                decrement:this.decrement,
                makeTotal:this.makeTotal,
                removeItem:this.removeItem

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider , ProductConsumer};