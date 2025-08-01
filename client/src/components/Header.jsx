import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import "../styles/Header.css"

// Header component for navigation bar
const Header = () => {
  const location = useLocation();
  const isServicesActive = location.pathname.startsWith("/services");
  
  return (
    // Sticky top navbar with shadow
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        {/* Brand logo linking to home */}
        <Navbar.Brand 
          as={NavLink} 
          to="/" 
          className="fw-bold text-success fs-4"
        >
          <img
            src={logo}
            alt= "FRG Logistics Logo"
            className="navbar-logo me-2"
          />
        </Navbar.Brand>

         {/* Hamburger toggle for mobile view */}
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          {/* Right-aligned nav links */}
          <Nav className="ms-auto gap-2">

            {/* Main Nav Links */}
            <NavLink as={NavLink} to="/" 
              end className={({isActive}) => 
                isActive ? "nav-link active-link" : "nav-link" 
              }
            >
              Home
            </NavLink>

            <NavLink as={NavLink} to="/about"
              className={({isActive}) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About Us
            </NavLink>

            {/*text-success makes the Services text Green*/}
            <NavDropdown
              title={
                <span
                  className={
                    isServicesActive
                      ? "dropdown-title-link active-link"
                      : "dropdown-title-link"
                  }
                >
                  Services
                </span>
              }
              id="services-dropdown"
            >

              {/* Services Subpages */}
              <NavDropdown.Item
                as={NavLink}
                to="/services/same-day"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Same-Day Delivery
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/services/Scheduled"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Scheduled & Recurring
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/Ecommerce"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                E-Commerce Parcel Delivery
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/Retail"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >

                Retail & B2B Distribution
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/medical-delivery"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Medical & Pharmacy Delivery
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/Warehousing"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Warehousing & Sorting
              </NavDropdown.Item>

            </NavDropdown>

            {/* Other Pages */}
            <NavLink 
              as={NavLink} 
              to="/fleet"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Our Fleet
            </NavLink>

            <NavLink 
              as={NavLink} 
              to="/quote"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Get a Quote
            </NavLink>

            <NavLink 
              as={NavLink} 
              to="/track"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Track
            </NavLink>

            <NavLink 
              as={NavLink} 
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Contact Us
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
