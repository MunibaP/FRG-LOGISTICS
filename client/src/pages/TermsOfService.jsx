// Import React core library
import React from "react";

// Import Bootstrap Container for responsive layout
import { Container } from "react-bootstrap";

// Import Framer Motion for entrance animation effects
import { motion } from "framer-motion";

// Import FontAwesome and the contract icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

// Import custom CSS styles for this page
import "../styles/TermsOfService.css";

// Define the TermsOfService component
const TermsOfService = () => {
  return (
    // Bootstrap container to center the content
    <Container className="terms-service">

      {/* Animated wrapper for fade-in and slide-up effect */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contract icon to represent the Terms of Service visually */}
        <FontAwesomeIcon icon={faFileContract} className="terms-icon" />

        {/* Page heading */}
        <h1 className="terms-title">Terms of Service</h1>

        {/* Placeholder message until full content is written */}
        <p className="terms-description">
          This page is under development. Please check back later for our full terms.
        </p>
      </motion.div>
    </Container>
  );
};

// Export component so it can be used in routes or other parts of the app
export default TermsOfService;
