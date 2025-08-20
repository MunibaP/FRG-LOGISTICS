import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faLeaf,
  faShieldAlt,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/GetQuote.css";

// Main Quote component
const Quote = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "",
    DeliveryDetails: "",
  });

  // State to show success or error messages after form submission
  const [successMessage, setSuccessMessage] = useState("");

  // Handles form field changes and updates the form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("✅ Quote submitted successfully!");
        
        // Optionally reset the form fields after successful submission
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          serviceType: "",
          DeliveryDetails: "",
        });
      } else {
        // Handles potential validation or server errors
        setSuccessMessage(`❌ Error: ${data.error || data.errors?.[0]?.msg || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSuccessMessage("❌ Submission failed. Please try again later.");
    }
  };

  return (
    <div className="quote-page">
      {/* Hero Section - Top banner with heading and CTA */}
      <section className="quote-hero text-white d-flex align-items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="display-5 fw-bold">Get a Custom Quote</h1>
            <p className="lead">
              Tell us about your delivery needs and we'll get back to you with a tailored solution.
            </p>
            <Button variant="light" href="#quoteForm" className="mt-3">
              Start Now
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Quote Form Section */}
      <section id="quoteForm" className="form-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-center mb-4 text-success fw-bold">Request a Quote</h2>
                {/* Success or Error message display */}
                {successMessage && (
                  <div className="alert alert-info text-center mb-4" role="alert">
                    {successMessage}
                  </div>
                )}

                {/* Form Starts Here */}
                <Form onSubmit={handleSubmit} className="quote-form p-4 shadow-lg rounded bg-white">
                  {/*Name */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" name="name" required value={formData.name} onChange={handleChange} />
                  </Form.Group>

                  {/*Email */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type="email" name="email" required value={formData.email} onChange={handleChange} />
                  </Form.Group>

                  {/*Company */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Company (Optional)</Form.Label>
                    <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} />
                  </Form.Group>

                  {/*Phone */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone</Form.Label>
                    <Form.Control type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                  </Form.Group>

                  {/*Services */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Service Type</Form.Label>
                    <Form.Select name="serviceType" required value={formData.serviceType} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Same-Day Delivery</option>
                      <option>Scheduled & Recurring</option>
                      <option>Medical Delivery</option>
                      <option>E-Commerce Parcel</option>
                      <option>Retail & B2B</option>
                      <option>Warehousing & Sorting</option>
                    </Form.Select>
                  </Form.Group>

                  {/* <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Service Type</Form.Label>
                    <Form.Select
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="">Select a Service</option>
                      <option value="Same-Day Delivery">Same-Day Delivery</option>
                    </Form.Select>
                  </Form.Group> */}

                  {/*Delivery Details */}
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Delivery Details</Form.Label>
                    <Form.Control as="textarea" rows={4} name="DeliveryDetails" value={formData.DeliveryDetails} onChange={handleChange} />
                  </Form.Group>
                  
                   {/* Submit Button */}
                  <Row className="justify-content-center mt-4">
                    <Col xs="auto">
                      <Button 
                        type="submit" 
                        className="quote-submit-btn d-inline-flex align-items-center justify-content-center"
                        style={{ display: "block" }}
                      >
                        Submit Quote Request
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section - Highlights benefits of the service */}
      <section className="trust-features py-5 bg-light">
        <Container>
          <Row className="text-center g-4">
            <Col md={3}>
              <FontAwesomeIcon icon={faLeaf} size="2x" className="text-success mb-2" />
              <h5>Eco-Friendly Fleet</h5>
              <p>Reduce your carbon footprint with 100% electric vehicles.</p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-primary mb-2" />
              <h5>Insured & Certified</h5>
              <p>Fully compliant with Ontario delivery & insurance standards.</p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faTruckFast} size="2x" className="text-info mb-2" />
              <h5>Fast Turnaround</h5>
              <p>Same-day and scheduled services with a 98% on-time record.</p>
            </Col>
            <Col md={3}>
              <FontAwesomeIcon icon={faClipboardCheck} size="2x" className="text-warning mb-2" />
              <h5>Custom Solutions</h5>
              <p>Get tailored delivery options for your unique business needs.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Quote;
