import React, { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

const CartContextProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [viewedProduct, setviewedProduct] = useState([]);
  const [message, setMessage] = useState("");

  function getItemsQuantity(id) {
    let cart = cartItems
    return cart.find(item => item.id == id)?.quantity || 0
  }

  //addding items to cart
  async function addToCart(id, title, img, price) {
    let cart = cartItems;
    if (cart.find((item) => item.id == id) == undefined) {
      cart.push({ id, title, img, price, quantity: 1 });
      setCartItems(cart)
      await localStorage.setItem("cart", JSON.stringify(cartItems));
      setIsOpen(false);
      setTimeout(() => { setMessage("product added to cart") }, 100);
    } else {
      return cart.map(item => {
        if (item.id === id) {
          let findItemIndex = cart.findIndex(item => item.id === id)
          cart[findItemIndex].quantity = item.quantity + 1
          setCartItems(cart)
          localStorage.setItem("cart", JSON.stringify(cartItems));
          setIsOpen(false);
          setviewedProduct([]);
        }
      })
    }

    setviewedProduct([]);
    setTimeout(() => { setMessage("") }, 2000);
  }

  function decreaseQuantity(id) {
    let cart = cartItems;
    cart.map(item => {
      if (item.id === id) {
        let findItemIndex = cart.findIndex(item => item.id === id)
        if (item.quantity === 1) return
        cart[findItemIndex].quantity = item.quantity - 1
        setCartItems(cart)
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    })
  }
  function decreaseBreadQuantity(id, index) {
    let cart = cartItems;
    cart.map(item => {
      if (item.id === id) {
        let findItemIndex = cart.findIndex(item => item.id === id)
        if (item.quantity < 2) {
            cart.splice(findItemIndex, 1)
            setCartItems(cart)
            localStorage.setItem("cart", JSON.stringify(cartItems));
            return
        }
        cart[findItemIndex].quantity = item.quantity - 1
        setCartItems(cart)
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    })
  }

  //removing items from cart
  function removeFromCart(index) {
    let cart = cartItems;
    cart.splice(index, 1);
    setCartItems(cart);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        isOpen,
        setIsOpen,
        message,
        viewedProduct,
        setviewedProduct,
        decreaseQuantity,
        getItemsQuantity,
        decreaseBreadQuantity
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

const UseShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
export { ShoppingCartContext, CartContextProvider, UseShoppingCart };
