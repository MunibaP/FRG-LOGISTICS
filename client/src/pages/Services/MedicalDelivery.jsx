import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldAlt,
  faFileContract,
  faUserCheck,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import medicalBg from "../../assets/medicalDelivery.png"; // Background image for medical delivery section
import "../../styles/MedicalDelivery.css";

const Medical = () => {
  return (
    <section className="medical-section py-5">
      <Container>
        {/* Hero Section: Heading, intro text, CTA button and image side by side */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="medical-heading mb-4 text-success">
                Medical & Pharmacy Delivery (Time-Sensitive)
              </h2>
              <p className="medical-intro mb-4">
                Specialized, time-critical transportation for medical supplies and prescriptions,
                ensuring secure and prompt arrival across the GTA with our eco-friendly EV fleet.
              </p>

              {/* Call to action button linking to quote page */}
              <Button
                href="/quote"
                variant="success"
                size="lg"
                className="rounded-pill px-5"
              >
                Request a Free Quote
              </Button>
            </motion.div>
          </Col>

          {/* Right column: Medical delivery related image with animation */}
          <Col md={6}>
            <motion.img
              src={medicalBg}
              alt="Medical Delivery"
              className="img-fluid rounded-4 shadow"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
        </Row>

        {/* Compliance & Insurance Section */}
        <motion.div
          className="compliance-section p-4 rounded-4 mb-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-success mb-3 ">Your Peace of Mind is Our Priority</h3>
          <p className="mb-4 fw-bold">
            FRG Logistics is fully compliant with all Ontario transportation regulations. For your
            complete assurance, we carry:
          </p>

          {/* List of key compliance features with icons */}
          <ul className="list-unstyled compliance-list">
            <li>
              <FontAwesomeIcon icon={faShieldAlt} className="icon" />
              Commercial Auto Insurance
            </li>
            <li>
              <FontAwesomeIcon icon={faFileContract} className="icon" />
              General Liability Insurance
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCheck} className="icon" />
              Driver Background Checks and Training Certificates
            </li>
          </ul>
        </motion.div>

        {/* Client Commitment Section */}
        <motion.div
          className="client-commitment-section p-4 rounded-4 mb-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-success mb-3 text-center">Dedicated to Your Success</h3>
          <p style={{ fontWeight: "bold" }}>We are committed to delivering excellence through:</p>
          <ul className="list-unstyled commitment-list">
            <li>Personalized account management</li>
            <li>Proactive communication</li>
            <li>Weekly performance reporting</li>
          </ul>
        </motion.div>

        {/* Next Steps / Contact */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="mb-3 text-success">Partner with FRG Logistics Today!</h3>
          <p className="mb-4" style={{ fontSize: "1.1rem" }}>
            We would be happy to meet and discuss how FRG Logistics can seamlessly support your
            delivery operations. Reach out for a demo, a detailed rate card, or to schedule a pilot delivery.
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="me-2 moving-icon" />
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="me-2 moving-icon" />
            <strong>Email:</strong> info@frglogistics.com
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Medical;
