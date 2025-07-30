import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Layout/UI components
import { motion } from "framer-motion";  // For scroll and hover animations
import "../../styles/Testimonials.css";  // Custom styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Icon rendering
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";  // Quote icon

// Array of testimonial objects
const testimonials = [
  {
    name: "Sarah L.",
    title: "E-commerce Manager",
    quote:
      "FRG has transformed our logistics with consistent, eco-conscious deliveries. A perfect partner.",
  },
  {
    name: "Jason M.",
    title: "Retail Operations Lead",
    quote:
      "Their EV fleet ensures every delivery is not only fast but also environmentally responsible.",
  },
  {
    name: "Emily T.",
    title: "Pharmacy Director",
    quote:
      "Reliable, sustainable, and always on time — FRG Logistics is our go-to for medical deliveries.",
  },
  {
    name: "Michael R.",
    title: "Supply Chain Analyst",
    quote:
      "We’ve seen cost savings and faster deliveries since partnering with FRG. Highly recommend!",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0); // Track start index of current testimonials shown

  const visibleCards = 3; // Number of cards visible at once

  // Automatically update index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + visibleCards) % testimonials.length);
    }, 5000); // Slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

   // Returns 3 visible testimonials, loops back if index exceeds array length
  const getVisibleTestimonials = () => {
    const start = index;
    const end = index + visibleCards;
    return testimonials
      .slice(start, end)
      .concat(end > testimonials.length ? testimonials.slice(0, end - testimonials.length) : []);
  };

  return (
    <section className="testimonial-section py-5">
      <Container>
        {/* Section heading with scroll animation */}
        <motion.h2
          className="text-center mb-5 section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // trigger only once when 50% in view
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          What Our Clients Are Saying
        </motion.h2>
        {/* Display testimonial cards in rows */}
        <Row className="justify-content-center">
          {getVisibleTestimonials().map((testimonial, i) => (
            <Col
              key={i}
              md={4}
              className="d-flex justify-content-center align-items-stretch mb-4"
            >
              {/* Card with hover animation */}
              <motion.div
                className="testimonial-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-sm">
                  <div className="cut-corner-wrapper">
                    <Card.Body>
                      <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                      <Card.Text>"{testimonial.quote}"</Card.Text>
                      <Card.Title className="mt-4 testimonial-name">{testimonial.name}</Card.Title>
                      <Card.Subtitle className="text-muted">{testimonial.title}</Card.Subtitle>
                    </Card.Body>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialCarousel;
