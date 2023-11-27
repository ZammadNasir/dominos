import React, { useState, useContext } from "react";
import { UseShoppingCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Categories = () => {
  const { cartItems } = UseShoppingCart();

  const [isShowingCategories, setIsShowingCategories] = useState(false);
  window.onscroll = function () {
    var scrollPosition = window.scrollY;
    scrollPosition > 300
      ? setIsShowingCategories(true)
      : setIsShowingCategories(false);
  };
  return (
    <div
      className="categories"
      style={{
        top: isShowingCategories ? "0px" : "-100px",
        boxShadow: isShowingCategories ? "0px 2px 6px 2px #d1d1d1" : "none",
      }}
    >
      <div className="container">
        <div className="categories-inner"
          style={{
            width: isShowingCategories ? "auto" : "80%",
            display: isShowingCategories ? "grid" : "block",
            
          }}
        >
          {isShowingCategories ? (
            <Link to={'/'}>
              <div className="category-logo">
                <img src="../assets/dominos-logo2.png" width={60} />
              </div>
            </Link>
          ) : null}

          <ul className="categories-list">
            <li className="list-item offers">
              <Link to={"/offers"}>
                <img src="../assets/icons/offers.webp" alt="offers" />
                <span>Offers</span>
              </Link>
            </li>
            <li className="list-item">
              <Link to={'/pizza'}>
                <img src="../assets/icons/pizza.png" alt="pizza" />
                <span>Pizza</span>
              </Link>
            </li>
            <li className="list-item">
              <Link to={'/bread'}>
                <img src="../assets/icons/bread.png" alt="bread" />
                <span>Bread</span>
              </Link>
            </li>
            <li className="list-item">
              <img src="../assets/icons/chicken-leg.png" alt="chicken" />
              <span>Chicken</span>
            </li>
            <li className="list-item">
              <img src="../assets/icons/pizza.png" alt="sandwich" />
              <span>Sandwich</span>
            </li>
            <li className="list-item">
              <img src="../assets/icons/salad.png" alt="wrap" />
              <span>Wrap</span>
            </li>
            <li className="list-item">
              <img src="../assets/icons/soup.png" alt="load potato" />
              <span>Load Potato</span>
            </li>
            <li className="list-item">
              <img src="../assets/icons/cupcake.png" alt="dessert" />
              <span>Dessert</span>
            </li>
            <li className="list-item">
              <img src="../assets/icons/soda.png" alt="drink" />
              <span>Drinks</span>
            </li>
            <li className="list-item">
              <img src="../assets/icons/soup.png" alt="soup" />
              <span>Sauce</span>
            </li>
          </ul>
          {isShowingCategories ? (
            <div className="nav-right"
              style={{
                marginLeft: "auto"
              }}
            >
              <Link to="/cart">
                <div className="cart">
                  <img src="../assets/icons/cart-icon.webp" width={30} />
                  <div className="cart-count">{cartItems.length}</div>
                </div>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Categories;
