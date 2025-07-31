import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import warehouseImg from "../../assets/warehouse.jpg";  // Image for warehouse section
import sortingImg from "../../assets/sorting.jpg"; // Image for sorting section
import "../../styles/Warehousing.css"; // Custom styles for this page

// Warehousing component
const Warehousing = () => {
  return (
    <section className="warehousing-page">
      {/* Hero Section */}
      <div className="warehousing-hero text-white d-flex align-items-center justify-content-center">
        <div className="text-center">
          {/* Animated heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fw-bold display-5"
          >
            Warehousing & Sorting Support
          </motion.h1>

          {/* Animated subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-3 fs-5"
          >
            Secure, scalable, and eco-friendly storage solutions tailored to your business.
          </motion.p>
        </div>
      </div>

      {/* Main content container */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.img
              src={warehouseImg}
              alt="Warehouse operations"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </Col>
           {/* Right column with text */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-success fw-bold mt-4">Streamlined Warehousing Services</h3>
              <p className="mt-3 fs-5 text-center">
                FRG Logistics offers warehousing and sorting support to help you manage inventory with ease. Our
                eco-conscious facilities are designed to handle:
              </p>

              {/* Features list */}
              <ul className="custom-bullets text-center fs-5">
                <li><i className="fas fa-warehouse me-2 text-success"></i>Short & long-term storage</li>
                <li><i className="fas fa-box-open me-2 text-success"></i>Real-time inventory management</li>
                <li><i className="fas fa-sort me-2 text-success"></i>Parcel scanning & sorting</li>
                <li><i className="fas fa-barcode me-2 text-success"></i>Barcode labeling & repackaging</li>
              </ul>
            </motion.div>
          </Col>
        </Row>

         {/* Second Section - Sorting & logistics with image and description */}
        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}>
            {/* Right column with image */}
            <motion.img
              src={sortingImg}
              alt="Sorting operations"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </Col>

          {/* Left column with text */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-success fw-bold mt-4">Integrated Logistics Support</h3>
              <p className="mt-3 fs-5 text-center">
                We simplify your delivery workflow by integrating warehousing with our eco-friendly fleet:
              </p>

               {/* Features list */}
              <ul className="fancy-list fs-5">
                <li><i className="fas fa-truck"></i>Direct parcel handoff to delivery teams</li>
                <li><i className="fas fa-truck"></i>Improved delivery speed & accuracy</li>
                <li><i className="fas fa-truck"></i>Live order tracking & client notifications</li>
              </ul>
            </motion.div>
          </Col>
        </Row>

        {/* Call-to-action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5"
        >
          <h4 className="fw-bold mb-3 cta-heading">Ready to optimize your logistics workflow?</h4>
          <Button variant="success" size="lg" href="/quote">
            Get a Free Quote
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Warehousing;
