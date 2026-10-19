 import {BrowserRouter as Router, Navigate, Routes, Route} from "react-router-dom";
 import { CartProvider } from "./context/CartContext";
 import { WishlistProvider } from "./context/WishlistContext";
 import { ThemeProvider } from "./context/ThemeContext";
 import ScrollToTop from "./components/ScrollToTop";
 import Home from "./pages/Home";
 import About from "./pages/About";
 import Shop from "./pages/Shop";
 import ProductDetail from "./pages/ProductDetail";
 import Cart from "./pages/Cart";
 import Checkout from "./pages/Checkout";
 import Wishlist from "./pages/Wishlist";

 const App = () => {
   return (
      <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
        </WishlistProvider>
      </CartProvider>
      </ThemeProvider>
   )
 }

 export default App
