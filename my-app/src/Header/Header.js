import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import {ProductConsumer} from '../Contextapi';

function Header() {
    
    return (
        <div className="header">
            <div className="header__elements">
                <Link to="/">
                <h3 className="header__elements__h3">Ecom</h3>
                </Link>

                <ProductConsumer>
                    {(value)=>{
                        return <Link to="/cart">
                        <h3 className="header__elements__link__h3">MyCart <span>({value.Cart.length})</span></h3>
                        </Link>
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

export default Header
