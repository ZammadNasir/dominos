import React, { useEffect, useState } from "react";
import { UseShoppingCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart, addToCart, decreaseQuantity } = UseShoppingCart();
  const [orderSteps, setOrederSteps] = useState(1);
  const [deliveryTime, setDeliveryTime] = useState("");
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  //calculating the total price
  const totatlArr = []
  cartItems.map(item => {
    totatlArr.push(parseFloat(item.price))
  })
  const total = totatlArr.reduce((x, y) => x + y, 0).toFixed(2)

  const handleSteps = () => {
    setOrederSteps(orderSteps + 1);
  };
  return (
    <>
      <div className="container-fluid">
        <section className="cart-section">
          <div className="cart-comp">
            <div className="container">
              <div className="cart-inner">
                {cartItems.length > 0 ? (
                  cartItems.map((x, index) => {
                    return (
                      <div id={index} className="cart-item" key={index}>
                        <div className="cart-item-desc">
                          <img src={x.img} />
                          <div className="cart-item-details">
                            <h4>{x.title}</h4>
                            <div className="quantity-comp">
                              <button className="decrease-quantity"
                                style={{
                                  backgroundColor:
                                    x.quantity == 1 ?
                                      '#c5c5c5' : '#d2112c'
                                }}
                                onClick={() => decreaseQuantity(x.id)}
                              >
                                -
                              </button>
                              <p className="quantity">{x.quantity}</p>
                              <button className="icrease-quantity" onClick={() => addToCart(x.id)}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="delete-btn">
                          <img
                            onClick={() => removeFromCart(index)}
                            src="../assets/icons/clode.png"
                          />
                          <p className="cart-item-price">{x.price}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="cart-empty">
                    <h3>Your cart is empty</h3>
                  </div>
                )}
                {cartItems.length > 0 ?
                  <div className="total-price">
                    <p>Your total: &nbsp; $ {total}</p>
                  </div> : null}
              </div>
            </div>
          </div>

          <div className="delivery">
            <div className="container">
              <div className="delivery-inner">
                <ul className="delivery-list">
                  <li>
                    <p
                      className={orderSteps >= 1 ? "active" : null}
                    >
                      1
                    </p>
                    <span
                      style={{
                        color: orderSteps >= 1 ? "#0078ac" : "#c6c6c6",
                      }}
                    >
                      Serivce <br /> Type
                    </span>
                  </li>
                  <li className={orderSteps >= 2 ? "active-dots" : "dots"}>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </li>
                  <li>
                    <p
                      className={orderSteps >= 2 ? "active" : null}
                    >
                      2
                    </p>
                    <span
                      style={{
                        color: orderSteps >= 2 ? "#0078ac" : "#c6c6c6",
                      }}
                    >
                      Delivery <br /> Time
                    </span>
                  </li>
                  <li className={orderSteps >= 3 ? "active-dots" : "dots"}>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </li>
                  <li>
                    <p className={orderSteps >= 3 ? "active" : null}>3</p>
                    <span
                      style={{
                        color: orderSteps >= 3 ? "#0078ac" : "#c6c6c6",
                      }}
                    >
                      Delivery <br /> Address
                    </span>
                  </li>
                  <li className={orderSteps >= 4 ? "active-dots" : "dots"}>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </li>
                  <li>
                    <p className={orderSteps >= 4 ? "active" : null}>4</p>
                    <span
                      style={{
                        color: orderSteps >= 4 ? "#0078ac" : "#c6c6c6",
                      }}
                    >
                      Store <br /> Details
                    </span>
                  </li>
                  <li className={orderSteps >= 5 ? "active-dots" : "dots"}>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </li>
                  <li>
                    <p className={orderSteps >= 5 ? "active" : null}>5</p>
                    <span
                      style={{
                        color: orderSteps >= 5 ? "#0078ac" : "#c6c6c6",
                      }}
                    >
                      Note
                    </span>
                  </li>
                  <li className={orderSteps === 6 ? "active-dots" : "dots"}>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </li>
                  <li>
                    <p className={orderSteps === 6 ? "active" : null}>6 </p>
                    <span
                      style={{
                        color: orderSteps === 6 ? "#0078ac" : "#c6c6c6",
                      }}
                    >
                      Payment <br /> Methods
                    </span>
                  </li>
                </ul>

                <div className="order-steps">
                  {orderSteps === 1 ? (
                    <div className="step-1">
                      <img
                        src="../assets/icons/oven.png"
                        onClick={handleSteps}
                        width={40}
                      />
                      <img
                        src="../assets/icons/motorbike.png"
                        onClick={handleSteps}
                        width={40}
                      />
                    </div>
                  ) : orderSteps === 2 ? (
                    <div className="step-2">
                      <form>
                        <div>
                          <input
                            onChange={(e) => setDeliveryTime(e.target.value)}
                            type="radio"
                            name="later"
                            id="now"
                            value="now"
                          />
                          <label for="now">Now</label>
                        </div>
                        <div>
                          <input
                            onChange={(e) => setDeliveryTime(e.target.value)}
                            type="radio"
                            name="later"
                            id="now"
                            value="later"
                          />
                          <label for="later">Later</label>
                          <br />
                        </div>
                      </form>
                      {deliveryTime === "later" ? (
                        <div className="date-picker">
                          <input type="date" />
                        </div>
                      ) : null}
                      <div className="btn-wrapper">
                        <button
                          onClick={deliveryTime !== "" ? handleSteps : null}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  ) : orderSteps === 3 ? (
                    <div className="step-3">
                      <div>
                        <div>
                          <p>Delivery to: Home</p>
                          <span>
                            First Floor, Near ABC Building, XYZ Road.{" "}
                          </span>
                        </div>
                        <span className="change-address">Change</span>
                      </div>
                      <div>
                        <div>
                          <p>Delivery to: Office</p>
                          <span>
                            First Floor, Near ABC Building, XYZ Road.{" "}
                          </span>
                        </div>
                        <span className="change-address">Change</span>
                      </div>
                      <div className="btn-wrapper">
                        <button onClick={handleSteps}>Continue</button>
                      </div>
                    </div>
                  ) : orderSteps === 4 ? (
                    <div>
                      <div className="step-4">
                        <div>
                          <p>Nearest store is 00 KM away</p>
                          <table>
                            <tr>
                              <td>Store Name</td>
                              <td>Opening</td>
                            </tr>
                            <tr>
                              <td>Contact Number</td>
                              <td>Closing</td>
                            </tr>
                          </table>
                        </div>
                        <div className="btn-wrapper">
                          <button onClick={handleSteps}>Continue</button>
                        </div>
                      </div>

                    </div>
                  ) : orderSteps === 5 ? (
                    <div className="step-5">
                      <div>
                        <textarea placeholder="Note..."></textarea>
                      </div>
                      <div className="btn-wrapper">
                        <button onClick={handleSteps}>Continue</button>
                      </div>
                    </div>
                  ) : orderSteps === 6 ? (
                    <div className="step-6">
                      <form>
                        <div>
                          <img src="../assets/icons/cash2.png" width={80} />
                          <label for="cash">Cash on Delivery</label>
                          <input type="radio" name="cash" id="cash" value="cash" />
                        </div>
                        <div>
                          <img
                            src="../assets/icons/cash-delivery.png"
                            width={80}
                          />
                          <label for="debit-card">Credit or Debit Card</label>
                          <input
                            type="radio"
                            name="debit-card"
                            id="debit-card"
                            value="debit-card"
                          />
                        </div>
                        <div>
                          <img
                            src="../assets/icons/debit-card.png"
                            width={80}
                          />
                          <label for="card">Card on Delivery</label>
                          <input
                            type="radio"
                            name="card"
                            id="card"
                            value="card"
                          />
                        </div>
                      </form>
                      {/* <button>LOGIN TO CONTINUE</button> */}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
