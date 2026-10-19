 import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Usmin from "../components/Usmin";
import Ayanpitan from "../components/Ayanpitan";
import Pricing from "../components/Pricing";   
import Testimonials from "../components/Testimonials";
import Quote from "../components/Quote";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
 



function Home() {
  return (
    <>
      <Navbar />
        <Hero />
        <Usmin />
        <Ayanpitan />
        <Pricing />
        <Testimonials />
        <Quote />
        <FAQ />
        <CTA />
        <Footer />
        
        
    </>
  );
}

export default Home;