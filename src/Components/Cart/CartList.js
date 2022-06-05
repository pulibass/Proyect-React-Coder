import React from 'react';
import "../../css/App.css";
import cartIcon from '../../img/iconos/cart.png';


export default function CartList() {
    return (
        <div className="cart">
            <a href="/cart"><span className='countcart' id='countcart'>0</span><img className="img-iconos" src={cartIcon}
                alt="icono-cart" /></a>
        </div>
    )
}
