import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UseShoppingCart } from '../contexts/CartContext'

const Navbar = () => {
    const { cartItems } = UseShoppingCart();

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-inner">
                    <div className="random"></div>
                    <div className="logo">
                        <Link to='/'>
                            <img src="../assets/domino-logo.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <i className="fa fa-user"></i>
                        <Link to='/cart'>
                            <div className="cart">
                                <img src='../assets/icons/cart-icon.webp' width={30}/>
                                <div className="cart-count">{cartItems.length}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
