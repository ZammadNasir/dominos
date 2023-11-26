import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer-inner">
          <ul className="about-us">
            <li>
              <img src="../assets/icons/food-serving.png" />
              <span>100% Original Products</span>
            </li>
            <li>
              <img src="../assets/icons/plant.png" />
              <span>Fresh Products</span>
            </li>
            <li>
              <img src="../assets/icons/oven.png" />
              <span>Baked in Oven</span>
            </li>
            <li>
              <img src="../assets/icons/motorbike.png" />
              <span>Fast Delivery</span>
            </li>
          </ul>
          <ul className="footer-navigation">
            <li>
              <a href="/">About Dominos</a>
            </li>
            <li className="line"></li>
            <li>
              <a href="/">Suggestions and Compliment</a>
            </li>
            <li className="line"></li>

            <li>
              <a href="/">Terms of service and order</a>
            </li>
            <li className="line"></li>

            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li className="line"></li>

            <li>
              <a href="/">Contact Us</a>
            </li>
            <li className="line"></li>

            <li>
              <a href="/">Join Us</a>
            </li>
          </ul>
          <ul className="methods">
            <ul className="apps">
              <li><img src="../assets/icons/play-store.png" /></li>
              <li><img src="../assets/icons/app-store.svg" /></li>
              <li><img src="../assets/icons/app-gallery.png" /></li>
            </ul>
            <li className="line"></li>

            <ul className="social-icons">
              <li>
                <img src="../assets/icons/facebook.png" />
              </li>
              <li>
                <img src="../assets/icons/instagram.png" />
              </li>
              <li>
                <img src="../assets/icons/youtube.png" />
              </li>
            </ul>
            <li className="line"></li>

            <ul className="payment-methods">
                <li><img src="../assets/icons/visa.png"/></li>
                <li><img src="../assets/icons/cash.png"/></li>
                <li><img src="../assets/icons/card.png"/></li>
            </ul>
          </ul>
          <div className="copy-right">
          <p>Copyright © 2019 - 2023 Domino’s Pizza Azerbaijan | Developed by HiTech Prime</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
