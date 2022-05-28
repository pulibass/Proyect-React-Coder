import React from 'react';
import "../../css/App.css";
import logo from '../../img/logos/LOGO.png';
import homeIcon from '../../img/iconos/home.png';
import productIcon from '../../img/iconos/producto.png';
import contactoIcon from '../../img/iconos/email.png';
import usuarioIcon from '../../img/iconos/usuario2.png';
import cartIcon from '../../img/iconos/cart.png';
export default function Header() {

    return (

        <div>

            <header>

                <a className="logo" href="/inicio"><img src={logo} alt="lOGO PAGINA" /></a>

                <input type="checkbox" id="checkbtn" />
                <label className="menu-hamb" htmlFor="checkbtn">
                    <i className="fas fa-bars fa-2x"></i>
                </label>

                <label className="cruz-boton" htmlFor="checkbtn">
                    <i className="far fa-times-circle fa-2x"></i>
                </label>

                <nav>
                    <ul>

                        <li>
                            <a href="/index"><img className="img-iconos" src={homeIcon}
                                alt="icono-productos" />Inicio</a>
                        </li>
                        <li>
                            <a href="/productos"><img className="img-iconos" src={productIcon}
                                alt="icono-productos" />Productos</a>
                        </li>
                        <li>
                            <a href="/contacto"><img className="img-iconos" src={contactoIcon}
                                alt="icono-contacto" />Contacto</a>
                        </li>
                        <li>
                            <a href="/usuarios"><img className="img-iconos" src={usuarioIcon}
                                alt="icono-usuario" />Usuarios</a>
                        </li>
                    </ul>
                </nav>
                <div className="cart">
                    <a href="/cart"><span className='countcart' id='countcart'>0</span><img className="img-iconos" src={cartIcon}
                        alt="icono-cart" /></a>
                </div>

            </header>
        </div>

    );

}