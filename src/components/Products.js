import React, { useState, useEffect } from "react";
import productsData from "../data/data";
import Heading from "./Heading";
import { UseShoppingCart } from "../contexts/CartContext";
import Banner from "./Banner";

const Products = () => {

  const {
    setCartItems,
    addToCart,
    isOpen,
    setIsOpen,
    message,
    viewedProduct,
    setviewedProduct,
  } = UseShoppingCart();

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
      <Banner />

      <main>
        <section className="products">
          <div className="container">
            <Heading heading="New & Popular" />
            <div className="products-inner">
              {productsData.slice(0, 4).map((item, index) => {
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
                      <p className="price">$ {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <Heading heading="Pizza" />
            <div className="products-inner">
              {productsData.slice(4, 8).map((item, index) => {
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
                        )}
                    />
                    <div className="product-details">
                      <div className="product-title">
                        <h3 className="title">{item.title}</h3>
                        <img src="../assets/icons/like.png" width={25} />
                      </div>
                      <span className="desc">{item.description}</span>
                      <p className="price">$ {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <Heading heading="Chicken" />
            <div className="products-inner">
              {productsData.slice(8, 12).map((item, index) => {
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
                        )}
                    />
                    <div className="product-details">
                      <div className="product-title">
                        <h3 className="title">{item.title}</h3>
                        <img src="../assets/icons/like.png" width={25} />
                      </div>
                      <span className="desc">{item.description}</span>
                      <p className="price">$ {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <Heading heading="Dessert" />
            <div className="products-inner">
              {productsData.slice(12, 16).map((item, index) => {
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
                        )}
                    />
                    <div className="product-details">
                      <div className="product-title">
                        <h3 className="title">{item.title}</h3>
                        <img src="../assets/icons/like.png" width={25} />
                      </div>
                      <span className="desc">{item.description}</span>
                      <p className="price">$ {item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {
          <section
            className="view-product"
            style={{
              transform: isOpen ? "scale(1)" : "scale(0)",
            }}
            onClick={() => {
              setIsOpen(false);
              setviewedProduct([]);
            }}
          >
            <div
              className="view-product-inner"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {viewedProduct.map((item, index) => {
                return (
                  <div className="viewed-product" id={item.id} key={index}>
                    <div>
                      <img src={item.img} width="100%" height="100%" />
                    </div>
                    <div className="product-details">
                      <h2>{item.title}</h2>
                      <span>{item.desc}</span>
                      <p>{item.price}</p>
                      <button
                        className="cart-btn"
                        onClick={() =>
                          addToCart(
                            item.id,
                            item.title,
                            item.img,
                            item.price
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        }

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

export default Products;
