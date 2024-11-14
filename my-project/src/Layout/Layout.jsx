// src/components/Layout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/Whatsapp';



function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main> 
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Layout;
