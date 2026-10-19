import Navbar from "../components/Navbar";
import ShopHero from "../components/ShopHero";
import ShopProducts from "../components/ShopProducts";
import ShopDelivery from "../components/ShopDelivery";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

 function Shop() {
  return (
    <>
      <Navbar />
      <ShopHero />
      <ShopProducts />
      <ShopDelivery />
      <CTA />
      <Footer />
    </>
  );
}

export default Shop;
