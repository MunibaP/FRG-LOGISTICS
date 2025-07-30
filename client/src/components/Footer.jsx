// Import necessary React and third-party libraries
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../styles/Footer.css"; // Custom styles for the footer

const Footer = () => {
  const location = useLocation();

   // Smoothly scroll to top if user clicks "Home" while already on the homepage
  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // Animated footer container using Framer Motion
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container>
        <Row className="mb-4 align-items-start">
          {/* Brand Logo & Tagline */}
          <Col md={3} sm={6} className="mb-3">
            <h3 className="footer-logo">FRG Logistics</h3>
            <p className="footer-tagline">Efficient. Reliable. Green.</p>
          </Col>

          {/* Navigation links for quick access to site pages */}
          <Col md={2} sm={6} className="mb-3">
            <h5 className="footer-heading">Quick Links</h5>
            <Link to="/" className="footer-link" onClick={handleHomeClick}>
              Home
            </Link>
            <br />
            <Link to="/about" className="footer-link">
              About Us
            </Link>
            <br />
            <Link to="/services" className="footer-link">
              Services
            </Link>
            <br />
            <Link to="/fleet" className="footer-link">
              Our Fleet
            </Link>
            <br />
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </Col>

          {/* Contact information with icons and social media links */}
          <Col md={3} sm={6} className="mb-3">
            <h5 className="footer-heading">Contact Us</h5>
            <p className="footer-contact">
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
              +1 (123) 456-7890
            </p>
            <p className="footer-contact">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              contact@frglogistics.ca
            </p>
            <p className="footer-contact">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              123 Logistics Ave, Toronto, ON
            </p>
            {/* Social media icon links */}
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/login.php/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://x.com/i/flow/login"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com/accounts/emailsignup/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>

           {/* Embedded Google Maps iframe showing business location */}
          <Col md={4} sm={6} className="mb-3">
            <h5 className="footer-heading">Our Location</h5>
            <div className="map-container">
              <iframe
                title="FRG Logistics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d739861.7769145344!2d-80.23542851262505!3d43.58394444152295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a1d7471156d%3A0x4ecad8e272e4c2a2!2sGreater%20Toronto%20Area%2C%20ON!5e0!3m2!1sen!2sca!4v1752766886866!5m2!1sen!2sca"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
         {/* Footer bottom row with copyright and policies */}
        <Row className="footer-bottom">
          <Col className="footer-copy">
            &copy; {new Date().getFullYear()} FRG Logistics. All rights reserved.
          </Col>
            {/* Privacy policy and terms of service links */}
            <Col md={6} className="footer-policy-links d-flex justify-content-end">
                <a href="/privacyPolicy" className="footer-policy-link">
                    Privacy Policy
                </a>
                <a href="/termsOfService" className="footer-policy-link">
                    Terms of Service
                </a>
            </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
