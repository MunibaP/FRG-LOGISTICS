import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faGlobe, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  // Local state for form inputs and feedback
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false); // Show success message
  const [error, setError] = useState(null);          // Optional: handle error feedback

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);           // Show confirmation message
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setError(result.errors?.[0]?.msg || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Error submitting the form");
    }
  };

  return (
    <motion.div
      className="contact-page py-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="mb-4">
          <Col>
            <motion.h2
              className="text-center fw-bold text-success mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Partner with FRG Logistics Today
            </motion.h2>
            <motion.p
              className="custom-contact-paragraph text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Reach out to discuss your delivery needs, request a quote, or schedule a pilot.
            </motion.p>
          </Col>
        </Row>

        <Row>
          {/* Contact Info */}
          <Col md={5} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="contact-info p-4 border rounded-3"
            >
              <h5 className="mb-4 text-success fw-semibold">Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-center text-muted">
                  <FontAwesomeIcon icon={faUser} className="me-2 icon-muted" />
                  <span><strong>Name:</strong> FRG Logistics</span>
                </li>
                <li className="mb-3 d-flex align-items-center text-muted">
                  <FontAwesomeIcon icon={faPhone} className="me-2 icon-muted" />
                  <span><strong>Main:</strong> +1 (123) 456-7890</span>
                </li>
                <li className="mb-3 d-flex align-items-center text-muted">
                  <FontAwesomeIcon icon={faMobileAlt} className="me-2 icon-muted" />
                  <span><strong>Mobile:</strong> +1 (987) 654-3210</span>
                </li>
                <li className="mb-3 d-flex align-items-center text-muted">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2 icon-muted" />
                  <span><strong>Email:</strong> contact@frglogistics.ca</span>
                </li>
                {/* <li className="mb-3 d-flex align-items-center text-muted">
                  <FontAwesomeIcon icon={faGlobe} className="me-2 icon-muted" />
                  <span><strong>Website:</strong> www.frglogistics.ca</span>
                </li> */}
              </ul>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="contact-form p-4 border rounded-3"
            >
              {/* Success Message */}
              {submitted && (
                <Alert variant="success" className="fw-semibold text-center">
                  Message sent successfully! We’ll get back to you shortly.
                </Alert>
              )}

              {/* Error Message */}
              {error && (
                <Alert variant="danger" className="fw-semibold text-center">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Full name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Email address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone"
                    placeholder="Phone number (optional)" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea"
                    name="message" 
                    rows={4} placeholder="Write your message..." 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                  <Button variant="success" type="submit" className="w-100 fw-semibold">
                    Send Message
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
