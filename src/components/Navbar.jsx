import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("first-section");
      if (firstSection) {
        const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
        setShowNavbar(firstSectionBottom > 0);
      } else {
        const approximateFirstSectionHeight = window.innerHeight;
        setShowNavbar(window.scrollY <= approximateFirstSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => location.pathname === path;

  const menuItems = [
    { label: "WORK", path: "/work" },
    { label: "ABOUT", path: "/know-more" },
    { label: "SERVICES", path: "/services" },
    { label: "CLIENTS", path: "/client" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.15 },
    },
    exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`w-full fixed top-0 left-0 right-0 z-50 bg-black transition-opacity duration-300 ${
      showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}>
      <nav
        className="w-full lg:max-w-[90rem] mx-auto lg:px-10 px-2 md:px-[3.75rem] max-w-[100vw] flex  items-center justify-center"
        style={{ minHeight: "4.625rem", fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex justify-between items-center text-white h-full w-full relative ">
          {/* Logo */}
          <motion.div whileTap={{ scale: 0.95 }} className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80">
              <div
                className="flex items-center justify-center px-[10px] py-[10px]"
                style={{ 
                  fontFamily: "Rogbold, sans-serif",
                  fontSize: "29.938px",
                  fontWeight: "400",
                  lineHeight: "normal"
                }}
              >
                <span style={{ color: "#FFFFFF" }}>STUDIO </span>
                <span style={{ color: "#00FF26" }}>SQUANTA</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className={`transition-all duration-300 whitespace-nowrap hover:opacity-80 ${
                    isActivePath(item.path) ? 'opacity-100' : 'opacity-100'
                  }`}
                  style={{
                    fontFamily: "Murecho, sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: "1.54px",
                    color: "#FFF"
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/future"
                  className="flex items-center justify-center px-[10px] py-[10px] transition-all duration-300 hover:bg-gray-800"
                  style={{
                    width: "133px",
                    height: "40px",
                    borderRadius: "57px",
                    border: "1px solid #FFF",
                    background: "#2B2B2B",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FFF"
                  }}
                >
                  Future
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/collaboration"
                  className="flex items-center justify-center px-[10px] py-[10px] transition-all duration-300 hover:bg-gray-800"
                  style={{
                    width: "133px",
                    height: "40px",
                    borderRadius: "57px",
                    border: "1px solid #FFF",
                    background: "#2B2B2B",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#FFF"
                  }}
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden relative w-6 h-6 sm:w-8 sm:h-8 flex flex-col justify-center items-center"
            >
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }
                }
                transition={{ duration: 0.4 }}
                className="absolute w-7 sm:w-8 h-0.5 sm:h-1 bg-white rounded"
              />
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }
                }
                transition={{ duration: 0.4 }}
                className="absolute w-7 sm:w-8 h-0.5 sm:h-1 bg-white rounded"
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="dropdown-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="bg-black text-white border-t border-gray-800"
            >
              <div className="lg:hidden py-4 px-4 space-y-3">
                {menuItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className="block py-2 text-base font-medium hover:text-gray-400"
                      style={{
                        fontFamily: "Murecho, sans-serif",
                        fontSize: "14px",
                        fontWeight: "600",
                        letterSpacing: "1.54px",
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-3 space-y-2">
                  <Link
                    to="/future"
                    className="bg-[#2B2B2B] border border-white text-white hover:bg-gray-800 font-medium py-2 px-4 rounded-full w-full block text-center text-sm"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Future
                  </Link>
                  <Link
                    to="/collaboration"
                    className="bg-[#2B2B2B] border border-white text-white hover:bg-gray-800 font-medium py-2 px-4 rounded-full w-full block text-center text-sm"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
