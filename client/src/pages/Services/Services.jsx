import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/Services.css";

// Array of service data with icon, title, description, and route path
const services = [
  {
    title: "Same-Day Delivery",
    icon: "fas fa-bolt",
    path: "same-day",
    description: "Fast and reliable same-day deliveries across the GTA.",
  },
  {
    title: "Scheduled & Recurring",
    icon: "fas fa-calendar-alt",
    path: "scheduled",
    description: "Flexible scheduling for daily, weekly, or monthly deliveries.",
  },
  {
    title: "E-Commerce Parcel Delivery",
    icon: "fas fa-shopping-cart",
    path: "ecommerce",
    description: "Seamless delivery for your online store orders.",
  },
  {
    title: "Retail & B2B Distribution",
    icon: "fas fa-store",
    path: "retail",
    description: "Direct-to-store and business distribution across the GTA.",
  },
  {
    title: "Medical & Pharmacy Delivery",
    icon: "fas fa-briefcase-medical",
    path: "medical-delivery",
    description: "Secure and compliant delivery for medical goods and prescriptions.",
  },
  {
    title: "Warehousing & Sorting",
    icon: "fas fa-warehouse",
    path: "warehousing",
    description: "Short-term storage and smart package sorting services.",
  },
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <Container>
        {/* Animated Section Heading */}
        <motion.div
          className="text-center fw-bold mb-5 text-success heading-gradient"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="fw-bold text-success heading-gradient">
            Comprehensive &amp; Sustainable Delivery Solutions
          </h1>
          <p className="lead subheading">
            At FRG Logistics, we pride ourselves on offering a wide range of reliable and environmentally conscious delivery services:
          </p>
        </motion.div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card p-4 text-center bg-white shadow rounded h-100"
              >
                {/* Icon for the service */}
                <i className={`${service.icon} fa-3x text-success mb-3`}></i>
                {/* Title and Description */}
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.description}</p>
                
                {/* Link to service detail page */}
                <Link to={service.path} className="btn btn-outline-success btn-sm mt-2">
                  Learn More
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

