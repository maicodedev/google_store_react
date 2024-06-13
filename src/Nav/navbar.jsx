import React from 'react';
import {Link} from "react-router-dom"
import "./navbar.css";
const navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-menu'>
               <li>
               <Link to="/"> <img src="src/assets/images/google-logo.png" alt="Logo" className='navbar-logo' /></Link>
               </li>
                <li>
                  <Link to="/phones">Phones</Link>
                </li>
                <li>
                   <Link to="/earbuds" >Earbuds</Link>
                </li>   
                <li>
                   <Link to="/watches">Watches</Link>
                </li>
                <li>
                   <Link to="/smarthome">Smart Home</Link>
                </li>
                <li>
                   <Link to="/accesories">Accesories</Link>
                </li>
                <li>
                   <Link to="/subscriptions">Subscriptions</Link>
                </li>
            </ul>
            <div className="navbar-icons">
                  <a className="icono1" href="#">
                       <img alt="search" src="src/assets/images/icons/Search.svg"/>
                  </a>
                  <a className="icono2" href="#">
                       <img alt="help" src="src/assets/images/icons/Help.svg"/>
                  </a>
                  <Link to="/cart">
                       <img alt="cart" src="src/assets/images/icons/Cart.svg"/>
                  </Link>
                  <a className="icono4" href="#">
                       <img alt="search" src="src/assets/images/icons/Avatar.svg"/>
                  </a>     
            </div>
        </nav>
    );
};

export default navbar;