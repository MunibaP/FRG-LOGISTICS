import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Layout components
import { motion } from "framer-motion"; // For animations
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Icon rendering
import {
  faLeaf,
  faTruck,
  faClock,
  faBolt,
} from "@fortawesome/free-solid-svg-icons"; // Icons used in features
import aboutImg from "../../assets/HomeAbout2.png"; // About section image
import "../../styles/HomeAbout.css"; // Custom styles

// Features to highlight with icons and labels
const features = [
  { icon: faLeaf, label: "Eco-Friendly Fleet" },
  { icon: faTruck, label: "Last-Mile Experts" },
  { icon: faClock, label: "Timely Deliveries" },
  { icon: faBolt, label: "Speed & Efficiency" },
];

const HomeAbout = () => {
  return (
    <section className="home-about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center mb-5">
          {/* Image */}
          <Col md={6}>
            <motion.img
              src={aboutImg}
              alt="About FRG Logistics"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.7 }}
              viewport={{ once: true }}
            />
          </Col>

          {/* Text */}
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold text-success mb-3">
                About FRG Logistics
              </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
            >
              <p className="text-muted fs-5 mb-2">
                FRG Logistics is your trusted, eco-friendly delivery partner in the GTA.
                With a fleet of electric vehicles and expert drivers, we prioritize both
                sustainability and speed in every last-mile delivery.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Feature Icon Row */}
        <Row className="gy-4 justify-content-center align-items-center text-center">
          {features.map((feature, index) => (
            <Col key={index} xs={6} sm={6} md={3} className="text-center d-flex flex-column align-items-center justify-content-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={feature.icon} className="feature-icon mb-2 fs-2 text-success" />
                <h6 className="fw-semibold mt-2">{feature.label}</h6>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;
