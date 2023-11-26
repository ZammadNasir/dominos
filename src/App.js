import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';
import Products from "./components/Products";
import { CartContextProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Offers } from "./components/Offers";
import Pizza from "./components/Pizza";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <CartContextProvider>
      <TopBar />
      <Navbar />
      <Categories />
      <Routes>
        <Route path="/" exact element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/singleproduct/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
