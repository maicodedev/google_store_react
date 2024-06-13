import React from 'react';
import {Link} from "react-router-dom"

const navbar = () => {
    return (
        <nav>
            <Link to="/"></Link> src="../assets/google-logo.png"/
            <ul>
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
                   <Link to="/smart home">Smart Home</Link>
                </li>
                <li>
                   <Link to="/accesories">Accesories</Link>
                </li>
                <li>
                   <Link to="/subscriptions">Subscriptions</Link>
                </li>
            </ul>
            <div className="icons">
                  <a className="icono1" href="#">
                       <img alt="search" src="../assets/icons/Search.svg"/>
                  </a>
                  <a className="icono2" href="#">
                       <img alt="help" src="../assets/icons/Help.svg"/>
                  </a>
                  <a className="icono3" href="#">
                       <img alt="cart" src="../assets/icons/Cart.svg"/>
                  </a>
                  <a className="icono4" href="#">
                       <img alt="search" src="../assets/icons/Avatar.svg"/>
                  </a>     
            </div>
        </nav>
    );
};

export default navbar;