import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup"; // For animated statistics
import "../../styles/WhyChoose.css";  // Custom styles

// Feature card images
import ecoFriendlyImg from "../../assets/EcoFriendly2.jpg";
import costEfficiencyImg from "../../assets/CostEfficiency.jpg";
import reliabilityImg from "../../assets/Reliability.jpg";
import gpsTrackingImg from "../../assets/GPSTracking.jpg";
import scalabilityImg from "../../assets/Scalability.jpg";
import driversImg from "../../assets/ProfessionalDrivers.jpg";
import phoneMockup from "../../assets/phone.png";
import { motion } from "framer-motion";

// Cards with hoverable titles and descriptions
const featureCards = [
  {
    title: "Eco-Friendly Fleet",
    description: "We reduce your carbon footprint by using only electric vehicles.",
    image: ecoFriendlyImg,
  },
  {
    title: "Cost-Efficiency",
    description: "Competitive pricing and customizable delivery plans.",
    image: costEfficiencyImg,
  },
  {
    title: "Reliability",
    description: "98% proven on-time delivery record you can trust.",
    image: reliabilityImg,
  },
  {
    title: "Technology Integration",
    description: "Live GPS tracking, instant proof of delivery, real-time updates.",
    image: gpsTrackingImg,
  },
  {
    title: "Scalability",
    description: "Our fleet and system grow seamlessly with your needs.",
    image: scalabilityImg,
  },
  {
    title: "Professional Drivers",
    description: "Experienced, uniformed, and trained delivery personnel.",
    image: driversImg,
  },
];

// Real-time statistics for the brand
const stats = [
  { label: "On-Time Delivery Rate", value: 98, suffix: "%" },
  { label: "E-Commerce Clients Served", value: 120 },
  { label: "Packages Delivered", value: 250000 },
  { label: "EV Kilometers Driven", value: 175000 },
];

const WhyChoose = () => {
  const [currentImage, setCurrentImage] = useState(featureCards[0].image); // Currently shown phone image
  const [phoneHeight, setPhoneHeight] = useState(0); // Sync phone height with cards
  const cardGroupRef = useRef(null); // Ref for measuring card group height

  // Set phone height dynamically on mount and resize
  useEffect(() => {
    if (cardGroupRef.current) {
      setPhoneHeight(cardGroupRef.current.offsetHeight);
    }
    // Optional: Update height on window resize for responsiveness
    const handleResize = () => {
      if (cardGroupRef.current) {
        setPhoneHeight(cardGroupRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="why-choose-section">
      <motion.h2
        className="why-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}        
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why Choose FRG Logistics?
      </motion.h2>

      <div className="phone-feature-wrapper">
        {/* Phone with dynamic height */}
        <div
          className="mockup-phone"
          style={{ height: phoneHeight ? `${phoneHeight}px` : "auto" }}
        >
          <img src={phoneMockup} alt="Phone Mockup" className="phone-image" />
          <div className="phone-screen">
            <img src={currentImage} alt="Feature Visual" />
          </div>
        </div>

        {/* Feature cards on right side */}
        <div className="feature-card-group" ref={cardGroupRef}>
          {featureCards.map((card, index) => (
            <div
              className="feature-hover-card"
              key={index}
              onMouseEnter={() => setCurrentImage(card.image)}
            >
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-background">
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div className="stat-box" key={index}>
              <h3>
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix || ""}
                  enableScrollSpy
                />
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
