import React from "react";
import { Routes, Route } from 'react-router-dom';

// Importing all individual page components
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services/Services';
import SameDay from "../pages/Services/SameDay";
import Scheduled from "../pages/Services/Scheduled";
import Ecommerce from "../pages/Services/Ecommerce";
import Retail from "../pages/Services/Retail";
import MedicalDelivery from "../pages/Services/MedicalDelivery";
import Warehousing from "../pages/Services/Warehousing";
import OurFleet from "../pages/Fleet";

import Contact from '../pages/Contact';
import GetQuote from '../pages/GetQuote';
import Track from '../pages/Track';

import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";

// Main routing component for the entire website
const AppRoutes = ()  => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/same-day" element={<SameDay />} />
      <Route path="/services/scheduled" element={<Scheduled />} />
      <Route path="/services/ecommerce" element={<Ecommerce />} />
      <Route path="/services/retail" element={<Retail />} />
      <Route path="/services/medical-delivery" element={<MedicalDelivery />} />
      <Route path="/services/warehousing" element={<Warehousing />} />
      <Route path="/fleet" element={<OurFleet />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="/track" element={<Track />} />

      {/* Legal / footer-related pages */}
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/termsOfService" element={<TermsOfService />} />
    </Routes>
  );
};

export default AppRoutes;
