// Import React library to use JSX and component features
import React from "react";

// Import custom components used on the homepage
import Hero from "../components/Home/Hero";                         // Top hero/banner section
import HomeAbout from "../components/Home/HomeAbout";               // Short about section
import ServicesPreview from "../components/Home/ServicesPreview";   // Brief overview of services
import WhyChooseUs from "../components/Home/WhyChooseUs";           // Reasons to choose FRG Logistics
// import Testimonials from "../components/Home/Testimonials";         // Client testimonials carousel
import HomeCTA from "../components/Home/HomeCTA";                    // Final call-to-action section

// Define the Home component that renders all imported sections
const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <ServicesPreview />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <HomeCTA />
    </>
  );
};

// Export the Home component so it can be used in routing
export default Home;
