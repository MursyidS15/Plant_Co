import React from "react";
import AboutUs from "./AboutUs/page";
import HeroSection from "./hero/page";
import Header from "./components/header/page";
import ProductSection from "./products/page";
import Testimonials from "./testimonial/page";

const Homepage = () => {
  return (
    <div className="h-full w-full bg-gray-50 text-gray-900 font-sans">
      
      <Header />

      
      <HeroSection />

      
      <AboutUs />
      

      
      <ProductSection />
      

      
      <Testimonials />


      
      <footer className=" text-black py-4 text-center">
        <p>&copy; 2025 Plant Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
