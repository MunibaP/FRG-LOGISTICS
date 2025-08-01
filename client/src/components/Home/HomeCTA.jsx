import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Layout and UI components
import { motion } from "framer-motion"; // Animation library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // For icons
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons"; // Icons used in contact info
import { Link } from "react-router-dom"; // Navigation link
import "../../styles/HomeCTA.css"; // Custom styles

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <Container fluid className="p-0">
        <Row className="no-gutters">
          {/* Left side with gradient + background image */}
            <Col md={6} className="contact-image-col position-relative">
            </Col>

          {/* Right side with content */}
          <Col md={6} className="contact-info-col d-flex align-items-center">
            <motion.div
              className="content-wrapper px-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading mb-4 text-success">Let’s Talk Logistics</h2>
              <p className="text-muted mb-4">
                Have questions or want a custom delivery plan? Contact FRG Logistics today and
                experience eco-friendly, reliable service.
              </p>
              <div className="contact-details mb-4">
                <p><FontAwesomeIcon icon={faPhoneAlt} className="text-success me-2" /> +1 (123) 456-7890</p>
                <p><FontAwesomeIcon icon={faMobileAlt} className="text-success me-2" /> +1 (987) 654-3210</p>
                <p><FontAwesomeIcon icon={faEnvelope} className="text-success me-2" /> contact@frglogistics.ca</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} className="text-success me-2" /> 123 Logistics Ave, Toronto, ON</p>
              </div>
              <Link to="/contact">
                <Button variant="success" size="lg" className="rounded-pill px-4">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
