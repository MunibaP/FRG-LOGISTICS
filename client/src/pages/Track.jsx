import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faBox,
  faTruck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Lottie from "lottie-react";
import trackingMap from "../assets/delivery.json";
import "../styles/Track.css";

const steps = [
  { id: 1, label: "Package Received", icon: faBox, status: "Package Received" },
  { id: 2, label: "In Transit", icon: faTruck, status: "In Transit" },
  { id: 3, label: "Out for Delivery", icon: faMapMarkedAlt, status: "Out for delivery"  },
  { id: 4, label: "Delivered", icon: faCheckCircle, status: "Delivered" },
];

export default function TrackSplit() {
  const [trackingId, setTrackingId] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(""); // Added state for error messages
  const [loading, setLoading] = useState(false); // Added state for loading indicator

  const handleSubmit = async (e) => {              // Changed to async function to call backend API
    e.preventDefault();
    setError("");                                         // Clear previous errors
    setLoading(true);                                     // Start Loading
    
    try {
      const res = await fetch(`/api/track/${trackingId.trim()}`);  // API call to backend
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Tracking failed");          // Throw error if not OK
      }
      const data = await res.json();

      // Find step index by matching status (case-insensitive)
      const step = steps.findIndex(
        (s) => s.status.toLowerCase() === data.status.toLowerCase()
      );

      setActiveStep(step + 1);                             // Set active step based on backend status
    } catch (err) {
      setActiveStep(0);                                   // Reset step on error
      setError(err.message);                              // Show error message
    }
    setLoading(false);                                    // Stop loading
  };

  return (
    <Container fluid className="track-split-page p-0">
      <Row className="gx-0 flex-column flex-md-row">
        {/* Left Side: Map / Illustration */}
        <Col md={6} className="map-side d-flex justify-content-center align-items-center">
          <motion.div
            className="map-placeholder"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={trackingMap} loop={true} />
          </motion.div>
        </Col>

        {/* Right Side: Form + Status */}
        <Col md={6} className="form-side d-flex flex-column justify-content-center p-5">
          <motion.h1
            className="text-center mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Track Your Delivery
          </motion.h1>
          <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group controlId="trackingId" className="mb-3">
              <Form.Label>Tracking Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your tracking ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                required
                disabled={loading}   /* Disable input while loading */ 
              />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100" disabled={loading}>
               {loading ? "Tracking..." : "Track Package"}   {/* Show loading text */}
              {/* Track Package */}
            </Button>
          </Form>
          {error && <Alert variant="danger">{error}</Alert>}   {/* Show error alert */}
          
          {/* Status Steps Vertical */}
          <div className="status-steps">
            {steps.map(({ id, label, icon }) => {
              const isActive = id === activeStep;
              const isCompleted = id < activeStep;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.2 }}
                  className={`status-step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                >
                  <FontAwesomeIcon icon={icon} className="step-icon" />
                  <span className="step-label">{label}</span>
                  {isActive && <motion.div layoutId="highlight" className="highlight-bar" />}
                </motion.div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
