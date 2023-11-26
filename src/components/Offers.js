import React from "react";
import offersData from "../data/offersdata";
import { UseShoppingCart } from "../contexts/CartContext";

export const Offers = () => {

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

  return (
    <>
      <div className="offers"
        style={{
          marginTop: "30px"
        }}
      >
        <div className="container">
          <div className="offers-inner products-inner">
            {offersData.map((item) => {
              return (
                <div className="offer-item"
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "1px 1px 10px 1px grey"
                  }}
                  onClick={() =>
                    handleProduct(
                      item.id,
                      item.img,
                      item.title,
                      item.description,
                      item.price
                    )
                  }
                >
                  <img src={item.img} width="100%" />
                  <div
                    className="offer-item-desc"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "10px"
                    }}
                  >
                    <h3
                      style={{
                        color: "#333333",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <img src="../assets/icons/like.png" width={30} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
    </>
  );
};
