import React, { useRef, useState } from "react";
import { Container, Row, Col, Button, Card, Modal, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// import evVan from "../assets/evVan.jpg";
// import cargoBike from "../assets/cargoTruck.jpg";
// import electricTruck from "../assets/electricTruck.jpg";

import evTesla  from "../assets/evCar1.jpg";
import evVolkswagen from "../assets/evCar2.jpg";
import evMitsubishi  from "../assets/evCar3.jpg";

import fleetBg from "../assets/map.png";

import "../styles/Fleet.css";

const fleetData = [
  {
    img: evTesla,
    name: " Tesla Model X",
    specs: 
    [
      "Range: 348 miles",
      "Cargo Capacity: 91.6 cu ft (rear seats folded)", 
      "Eco-friendly: 100% Electric – Zero Emissions"
    ],
  },
  {
    img: evVolkswagen,
    name: "Volkswagen ID.4",
    specs: 
    [
      "Range: 275 miles", 
      "Cargo Capacity: 64.2 cu ft (with seats down)", 
      "Eco-Friendly: 100% Electric – Zero Emissions"
    ],
  },
  {
    img: evMitsubishi,
    name: "Mitsubishi Outlander PHEV",
    specs: 
    [
      "Range: 38 miles (EV only) / 420+ miles total (hybrid)", 
      "Cargo Capacity: 64.7 cu ft",
      "Eco-Friendly: Plug-in Hybrid – Low Emissions"
    ],
  },
];

const OurFleet = () => {
  const [showDemo, setShowDemo] = useState(false);

  // Added fleetRef
  const fleetRef = useRef(null);

  const scrollToFleet = () => {
    console.log("Scrolling to fleet section...");
    if (fleetRef.current) {
      fleetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDemo = () => setShowDemo(true);
  const handleCloseDemo = () => setShowDemo(false);

  const handleSubmitDemo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    alert(`Demo requested by ${name} (${email})`);
    handleCloseDemo();
  };

  return (
    <section className="our-fleet-page">
      {/* Hero */}
      <div
        className="fleet-hero d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${fleetBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="overlay" />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-4 fw-bold heading"
        >
          Meet Our Advanced Electric Vehicle Fleet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lead mb-4 subheading"
        >
          Efficient, green, and built to serve the GTA.
        </motion.p>
        <div>
          <Button variant="outline-light" className="glow-button me-3" onClick={scrollToFleet}>
            Explore Fleet Types
          </Button>
          <Button variant="outline-light" className="glow-button" onClick={handleOpenDemo}>
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Fleet Cards */}
      <div ref={fleetRef}>
        <Container className="py-5" id="fleetTypes">
          <Row className="g-4 justify-content-center mt-5">
            {fleetData.map(({ img, name, specs }, i) => (
              <Col key={i} xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="fleet-card-wrapper"
                >
                  <Card className="shadow-sm h-100 text-center">
                    <Card.Img variant="top" src={img} alt={name} />
                    <Card.Body>
                      <Card.Title className="text-success">{name}</Card.Title>
                      <ul className="list-unstyled fs-6">
                        {specs.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Sustainability & Impact */}
      <Container fluid className="sustainability-section py-5 text-center">
        <h2 className="mb-4 fw-bold">Sustainability & Impact</h2>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3>
                <CountUp end={25000} duration={3} separator="," />+ kg CO₂ Saved
              </h3>
              <p>Through our electric fleet operations</p>
            </motion.div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3>
                <CountUp end={120000} duration={3} separator="," />+ km Driven
              </h3>
              <p>Zero emissions across GTA routes</p>
            </motion.div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>
                <CountUp end={50} duration={3} />+ Vehicles
              </h3>
              <p>Fully electric and growing</p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <Container className="py-5 text-center">
        <h4 className="mb-4 fw-bold fleet-action-heading">Want to see our fleet in action?</h4>
        <Button className="demo-button" variant="success" size="lg" onClick={handleOpenDemo}>
          Schedule a Demo
        </Button>
      </Container>

      {/* Modal */}
      <Modal show={showDemo} onHide={handleCloseDemo} centered>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Modal.Header closeButton>
            <Modal.Title >Request a Demo</Modal.Title>
          </Modal.Header>

          <Form onSubmit={handleSubmitDemo}>
            <Modal.Body>

              <Form.Group className="mb-3" controlId="demoName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your full name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="demoEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="demoCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" name="company" placeholder="Your company (optional)" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="demoMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Any specific request..." />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDemo}>
                Cancel
              </Button>

              <Button variant="success" type="submit">
                Submit Request
              </Button>
            </Modal.Footer>
          </Form>
        </motion.div>
      </Modal>
    </section>
  );
};

export default OurFleet;
