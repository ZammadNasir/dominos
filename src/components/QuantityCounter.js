import React, { useState } from "react";
import { UseShoppingCart } from "../contexts/CartContext";

const QuantityCounter = (props) => {
    const {
        setCartItems,
        addToCart,
        cartItems,
        count,
        setCount
    } = UseShoppingCart();

    const handleQuantityIncrease = () => {
        setCount(count + 1)
    };
    const handleQuantityDecrease = () => {
        if (count !== 1) {
            setCount((prev) => prev - 1);
        }
    };


    return (
        <div className="quantity-comp">
            <button className="decrease-quantity"
                style={{
                    backgroundColor:
                        count == 1 ?
                            '#c5c5c5' : '#d2112c'
                }}
                onClick={handleQuantityDecrease}
            >
                -
            </button>
            <p className="quantity">{count}</p>
            <button className="icrease-quantity" onClick={handleQuantityIncrease}>
                +
            </button>
        </div>
    );
};
export default QuantityCounter