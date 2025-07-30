import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/HeroSection.css";
import heroImg from "../../assets/EVFleet.jpg"; // Background image for hero section

const Home = () => {
  return (
    // Hero section with background image and overlay
    <div className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="overlay">
        <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
          
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="display-4 fw-bold"
          >
            Efficient. Reliable. Green.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h4 fw-semibold mt-2"
          >
            Your Trusted GTA Delivery Partner
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lead"
          >
            Providing customized, eco-friendly logistics and last-mile delivery solutions across the Greater Toronto Area with our advanced electric vehicle fleet.

          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="d-flex gap-3 mt-3 flex-wrap justify-content-center"
          >
            <Button variant="success" size="lg" href="/quote">Get a Free Quote</Button>
            <Button variant="outline-light" size="lg" href="/services">Learn More</Button>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
