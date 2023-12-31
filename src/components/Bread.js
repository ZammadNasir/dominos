import React, { useState, useEffect } from "react";
import productsData from "../data/data";
import { UseShoppingCart } from "../contexts/CartContext";

const Bread = () => {
    const bread = productsData.filter((item) => item.category === "bread")
    const {
        setCartItems,
        addToCart,
        setIsOpen,
        message,
        viewedProduct,
        setviewedProduct,
        cartItems,
        getItemsQuantity,
        decreaseQuantity,
        decreaseBreadQuantity
    } = UseShoppingCart();

    let quantity;

    const handleProduct = (id, img, title, desc, price) => {
        let ViewProductArr = viewedProduct;
        ViewProductArr.push({ id, img, title, desc, price, });
        setviewedProduct(ViewProductArr);
        setIsOpen(true);
    };

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    return (
        <>

            <main>
                <section className="products">
                    <div className="container">
                        <div className="products-inner">
                            {bread.map((item, index) => {
                                return (
                                    <div className="product" key={index} id={item.id}>
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            width={200}
                                            className="product-img"
                                            onClick={() =>
                                                handleProduct(
                                                    item.id,
                                                    item.img,
                                                    item.title,
                                                    item.description,
                                                    item.price
                                                )
                                            }
                                        />
                                        <div className="product-details">
                                            <div className="product-title">
                                                <h3 className="title">{item.title}</h3>
                                                <img src="../assets/icons/like.png" width={25} />
                                            </div>
                                            <span className="desc">{item.description}</span>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    gap: "2rem",
                                                    alignItems: "center"
                                                }}>
                                                <p className="price">$ {item.price}</p>
                                                <div style={{display: "none"}}>
                                                {
                                                    quantity = getItemsQuantity(item.id)
                                                }
                                                </div>
                                                {
                                                    quantity < 1 ?
                                                        <button
                                                            style={{
                                                                background: "#d2112c",
                                                                border: "none",
                                                                padding: "8px 14px",
                                                                cursor: "pointer",
                                                                borderRadius: "4px",
                                                                fontWeight: "bold"
                                                                }}
                                                            onClick={() => addToCart(
                                                                item.id,
                                                                item.title,
                                                                item.img,
                                                                item.price
                                                            )}
                                                        >Add to cart</button>
                                                        :
                                                        <div className="quantity-comp">
                                                            <button className="decrease-quantity"
                                                                style={{
                                                                    backgroundColor:
                                                                        quantity < 1 ?
                                                                            '#c5c5c5' : '#d2112c'
                                                                }}
                                                                onClick={() => decreaseBreadQuantity(item.id, index)}
                                                            >
                                                                -
                                                            </button>
                                                            <p className="quantity">{quantity}</p>
                                                            <button className="icrease-quantity" onClick={() => addToCart(
                                                                item.id,
                                                                item.title,
                                                                item.img,
                                                                item.price
                                                            )}>
                                                                +
                                                            </button>
                                                        </div>
                                                }



                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>



            
                <div
                    className="message"
                    style={{
                        right: message === "" ? "-238px" : "0px",
                    }}
                >
                    <p>{message}</p>
                </div>
            </main>
        </>
    );
};

export default Bread;
