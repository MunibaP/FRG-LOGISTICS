import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBoxOpen, 
  faShippingFast, 
  faReceipt, 
  faTruckLoading 
} from "@fortawesome/free-solid-svg-icons";
import ecommerceBg from "../../assets/ecommerce7.jpg"; //  background image 
import "../../styles/Ecommerce.css";

// Feature data for the E-commerce delivery section
const ecommerceFeatures = [
  {
    icon: faBoxOpen,
    title: "Seamless Last-Mile Delivery",
    description: "We provide smooth and timely delivery directly to your customers' doorsteps with real-time tracking."
  },
  {
    icon: faShippingFast,
    title: "Fast & Flexible Shipping Options",
    description: "Choose from multiple shipping plans tailored to your e-commerce business needs."
  },
  {
    icon: faReceipt,
    title: "Automated Proof of Delivery",
    description: "Get instant electronic delivery confirmations to keep your customers informed."
  },
  {
    icon: faTruckLoading,
    title: "Integrated Warehousing Support",
    description: "We offer efficient parcel sorting and warehousing to streamline your fulfillment process."
  },
];

const Ecommerce = () => {
  return (
    <section className="ecommerce-section py-5" style={{ backgroundImage: `url(${ecommerceBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Container>
        {/* Heading */}
        <motion.h2
          className="text-center mb-5 text-success ecommerce-heading"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          E-commerce Parcel Delivery
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-center mx-auto ecommerce-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ maxWidth: "650px" }}
        >
          At FRG Logistics, we offer specialized last-mile delivery services designed for e-commerce businesses. 
          Experience reliable, scalable, and eco-friendly solutions that keep your customers satisfied and your operations efficient.
        </motion.p>

        {/* Feature Blocks */}
        <div className="ecommerce-features mt-5">
          {ecommerceFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className={`feature-block d-flex flex-column flex-md-row align-items-center mb-5 ${i % 2 === 0 ? "left-block" : "right-block"}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.3 }}
              viewport={{ once: true, amount: 0.6 }}
            >
              <div className="feature-icon text-success mb-3 mb-md-0">
                <FontAwesomeIcon icon={feature.icon} size="4x" />
              </div>
              <div className="feature-text ms-md-4 text-center text-md-start" style={{ maxWidth: "500px" }}>
                <h4 className="mb-2">{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              href="/quote" 
              variant="success" 
              size="lg" 
              className="rounded-pill px-5"
            >
              Request a Free Quote
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Ecommerce;
