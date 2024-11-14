import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adjust menu styles dynamically for mobile view
  const getMenuStyles = () => {
    return window.innerWidth <= 768 ? {
      right: menuOpened ? "0" : "-100%",
      transition: "right 0.3s ease",
    } : {};
  };

  // Close the menu on window resize if width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpened(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`h-wrapper ${sticky ? 'fixed top-0 z-50 bg-white shadow-lg transition-shadow' : 'sticky top-0 bg-white shadow-sm transition-shadow'}`}>
      <nav className="h-container flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
        <a href="/" aria-label="Home">
          <img src="./logo3.png" alt="RBSH Studio Logo" className="w-28" loading="lazy" />
        </a>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div
            className={`h-menu ${menuOpened ? 'show' : ''}`}
            style={getMenuStyles()}
          >
            <a href="#overview" aria-label="Overview Section" className="hover:text-gray-600">Overview</a>
            <a href="#plan2" aria-label="Popular Section" className="hover:text-gray-600">Plans</a>
            <a href="#plan" aria-label="Residency Section" className="hover:text-gray-600">Details</a>
            <a href="#location" aria-label="Contact Us Section" className="hover:text-gray-600">Location</a>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              onClick={() => navigate('/contact')}
            >
              Contact
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon block md:hidden" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} aria-label="Toggle Menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
