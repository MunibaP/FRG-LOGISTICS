import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBoxesPacking,
  faTruckMoving,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import retailBg from "../../assets/retail.jpg";  // Retail-themed background image
import "../../styles/Retail.css";

const retailFeatures = [
  {
    icon: faStore,
    title: "Reliable Retail Distribution",
    description:
      "Efficient delivery and inventory management tailored for retail businesses across the GTA.",
  },
  {
    icon: faBoxesPacking,
    title: "B2B Parcel Handling",
    description:
      "Specialized handling and timely distribution for business-to-business shipments.",
  },
  {
    icon: faTruckMoving,
    title: "Scalable Fleet Services",
    description:
      "Flexible vehicle options to handle your growing delivery demands seamlessly.",
  },
  {
    icon: faHandshake,
    title: "Dedicated Client Partnerships",
    description:
      "Personalized account management ensuring your logistics needs are met with excellence.",
  },
];

const Retail = () => {
  return (
    <section
      className="retail-section py-5"
      style={{
        backgroundImage: `url(${retailBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      <Container>
        {/* Hero Row: Intro text and image side by side */}
        <Row className="align-items-center mb-5">
          {/* Left column: Animated intro text */}
          <Col md={6}>
            <motion.div
              className="retail-hero-text"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="retail-heading mb-4">Retail & B2B Distribution</h2>
              <p className="retail-subheading mb-4">
                Delivering excellence and reliability for retail and business-to-business logistics with a commitment to sustainability and professionalism.
              </p>

               {/* Button linking to the quote request page */}
              <div className="quote-button-wrapper">
                    <Button href="/quote" variant="success" size="lg" className="rounded-pill px-5 mb-4">
                        Request a Free Quote
                    </Button>
                </div>
            </motion.div>
          </Col>

          {/* Right column: Retail-themed image with animation */}
          <Col md={6}>
            <motion.img
              src={retailBg}
              alt="Retail & B2B Delivery"
              className="img-fluid retail-hero-img rounded-4 shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
        </Row>

        {/* Features Row: Highlights key retail logistics features */}
        <Row className="retail-features-row">
          {retailFeatures.map((feature, i) => (
            <Col
              key={i}
              md={6}
              className="mb-4 retail-feature-col"
            >
            
              {/* Feature box with fade & slide up animation and hover scale effect */}
              <motion.div
                className="retail-feature-box p-4 rounded-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #198754" }}
              >
                {/* Feature icon */}
                <FontAwesomeIcon
                  icon={feature.icon}
                  size="3x"
                  className="retail-feature-icon text-success mb-3"
                />
                {/* Feature title */}
                <h4 className="mb-3">{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Retail;
