import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';

import './index.css';
import Layout from './../src/Layout/Layout';
import App from './App'; // Home Page
import { ContactUs } from './pages/ContactUs';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} /> {/* Home Page */}
          <Route path="/contact" element={<ContactUs/>} /> {/* About Page */}
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
