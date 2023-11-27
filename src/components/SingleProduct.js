import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/data";
import { UseShoppingCart } from "../contexts/CartContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const { addToCart, message } = UseShoppingCart();
  const product = productsData.filter((item) => item.title == productId);

  return (
    <div className="container">
      {product.map((item) => {
        return (
          <>
            <div className="single-product" style={{ marginTop: "20px" }}>
              <div>
                <img
                  src={item.img}
                  width="100%"
                  style={{ borderRadius: "12px" }}
                />
              </div>
              <div
                style={{
                  padding: "30px",
                }}
              >
                <h1>{item.title}</h1>
                <p
                  style={{
                    color: "#616161",
                    marginTop: "30px",
                    fontSize: "18px",
                  }}
                >
                  {item.description}
                </p>
                <ul style={{ marginTop: "30px", color: "#616161" }}>
                  <li>100% Chicken</li>
                  <li>100% Mozarella</li>
                </ul>
                <button
                  style={{
                    background: "#0078ac",
                    border: "none",
                    padding: "8px 34px",
                    cursor: "pointer",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    marginTop: "80px",
                  }}
                  onClick={() =>
                    addToCart(item.id, item.title, item.img, item.price)
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="grid" style={{marginTop: "20px"}}>
              <div className="left">
              <div className="step-1">
                <h2 style={{color: "#0078ac"}}>Step 1</h2>
                <span style={{fontSize: "14px", color: "#616161"}}>Select size</span>
                <ul className="options" style={{display: "flex",
                 color: "gray",
                 textAlign: "center",
                 gap: "1rem",
                 marginTop: "12px",
                 fontWeight: "bold"}}>
                  <li>
                    <p
                    style={{
                      background: "#ededed",
                      padding: "12px 44px",
                      borderRadius: "8px"
                    }}
                    >Small</p>
                    <span style={{
                      fontSize: "12px"
                    }}>$ 10.90</span>
                  </li>
                  <li>
                    <p
                     style={{
                      background: "#ededed",
                      padding: "12px 44px",
                      borderRadius: "8px"
                    }}
                    >Medium</p>
                    <span style={{
                      fontSize: "12px"
                    }}>$ 16.50</span>
                  </li>
                  <li>
                    <p
                     style={{
                      background: "#ededed",
                      padding: "12px 44px",
                      borderRadius: "8px"
                    }}
                    >Large</p>
                    <span style={{
                      fontSize: "12px"
                    }}>$ 20.90</span>
                  </li>
                </ul>
              </div>
              <div className="step-1" style={{marginTop: "12px"}}>
                <h2 style={{color: "#0078ac"}}>Step 2</h2>
                <span style={{fontSize: "14px", color: "#616161"}}>Select size</span>
                <ul className="options" style={{display: "flex",
                 color: "gray",
                 textAlign: "center",
                 gap: "1rem",
                 marginTop: "12px",
                 fontWeight: "bold"}}>
                  <li>
                    <p
                    style={{
                      background: "#ededed",
                      padding: "12px 44px",
                      borderRadius: "8px"
                    }}
                    >Small</p>
                    <span style={{
                      fontSize: "12px"
                    }}>$ 10.90</span>
                  </li>
                  <li>
                    <p
                     style={{
                      background: "#ededed",
                      padding: "12px 44px",
                      borderRadius: "8px"
                    }}
                    >Medium</p>
                    <span style={{
                      fontSize: "12px"
                    }}>$ 16.50</span>
                  </li>
                  <li>
                    <p
                     style={{
                      background: "#ededed",
                      padding: "12px 44px",
                      borderRadius: "8px"
                    }}
                    >Large</p>
                    <span style={{
                      fontSize: "12px"
                    }}>$ 20.90</span>
                  </li>
                </ul>
              </div>
              </div>
              <div className="right"></div>
            </div>
          </>
        );
      })}

      <div
        className="message"
        style={{
          right: message === "" ? "-238px" : "0px",
        }}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
