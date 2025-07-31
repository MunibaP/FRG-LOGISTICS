import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion"; // For animations on scroll/load
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock, faSyncAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Scheduled.css";  // Custom styles for the section

// Features to display in the scheduled delivery section
const features = [
  {
    id: 1,
    icon: <faCalendarAlt />, // Correct usage of FontAwesomeIcon component
    title: "Customized Scheduling",
    description: "Create delivery schedules that align with your daily, weekly, or monthly logistics needs."
  },
  {
    id: 2,
    icon: <faClock />,
    title: "Guaranteed Timeliness",
    description: "We ensure that your recurring deliveries happen on time, every time — with real-time tracking."
  },
  {
    id: 3,
    icon: <faSyncAlt />,
    title: "Flexible Recurring Plans",
    description: "Easily adjust frequencies or routes as your business needs change."
  },
  {
    id: 4,
    icon: <faMapMarkerAlt />,
    title: "GTA-Wide Coverage",
    description: "Scheduled deliveries are available throughout the Greater Toronto Area with full route transparency."
  }
];

// Main component for the Scheduled & Recurring Deliveries section
const ScheduledRecurring = () => {
  return (
    <section className="scheduled-section py-5">
      <Container>
        <motion.h2
          className="text-center mb-5 section-heading"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Scheduled & Recurring Deliveries
        </motion.h2>

        {/* Animated introductory paragraph */}
        <motion.p
          className="intro-paragraph text-center mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Keep your business moving smoothly with our fully customizable, eco-friendly recurring delivery service. Designed to reduce hassle and carbon emissions.
        </motion.p>

        {/* Timeline-style container for delivery features */}
        <div className="timeline-container">
          {features.map((feature, index) => (
            <motion.div
              className="timeline-step d-flex align-items-center"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Icon for each step */}
              <div className="step-icon">{feature.icon}</div>
              
              {/* Text content: title + description */}
              <div className="step-text">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>

              {/* Step number badge */}
              <div className="step-number">{feature.id}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScheduledRecurring;
