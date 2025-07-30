// Import core React functionality
import React from "react";

// Import Bootstrap Container component for layout structure
import { Container } from "react-bootstrap";

// Import Framer Motion for animation effects
import { motion } from "framer-motion";

// Import FontAwesome and lock icon for visual design
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

// Import custom CSS styles for the Privacy Policy page
import "../styles/PrivacyPolicy.css";

// Define the PrivacyPolicy component
const PrivacyPolicy = () => {
  return (
    // Use Bootstrap container to center and pad the content
    <Container className="privacy-policy">
       {/* Animate the content using Framer Motion */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Display a lock icon to represent privacy */}
        <FontAwesomeIcon icon={faLock} className="privacy-icon" />

        {/* Page title */}
        <h1 className="privacy-title">Privacy Policy</h1>

         {/* Temporary message while content is being developed */}
        <p className="privacy-description">
          This page is under development. A detailed privacy policy will be available soon.
        </p>
      </motion.div>
    </Container>
  );
};

// Export the component so it can be used in routing
export default PrivacyPolicy;
