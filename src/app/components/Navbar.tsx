"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  hoverColor: string;
}

interface NavigationLink {
  href: string;
  text: string;
}

// Custom Triangle-like Hamburger Component with Progressive Lines
const TriangleHamburger: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: isOpen ? 180 : 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [isOpen]);

  return (
    <button onClick={onClick} className="p-2">
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center w-7 h-7 space-y-1 cursor-pointer"
      >
        {/* Top line - longest */}
        <div className="w-6 h-0.5 bg-[#2d6389] transition-all duration-300"></div>
        {/* Middle line - medium */}
        <div className="w-4 h-0.5 bg-[#348992] transition-all duration-300"></div>
        {/* Bottom line - shortest */}
        <div className="w-2 h-0.5 bg-[#d73c77] transition-all duration-300"></div>
      </div>
    </button>
  );
};

const MainNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    initAnimations();
  }, []);

  const initAnimations = () => {
    // Navbar entrance animation
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Social icons stagger animation
    if (socialIconsRef.current) {
      const socialIcons = socialIconsRef.current.children;
      gsap.fromTo(socialIcons,
        { y: -30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          delay: 0.3
        }
      );
    }
  };

  const toggleDrawer = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
    
    if (!isDrawerOpen && sidebarRef.current) {
      // Opening animation
      gsap.fromTo(sidebarRef.current,
        { x: "100%", opacity: 0 },
        { 
          x: "0%", 
          opacity: 1, 
          duration: 0.6, 
          ease: "power3.out",
          onComplete: () => {
            // Animate sidebar content
            const links = sidebarRef.current?.querySelectorAll('.sidebar-link');
            if (links) {
              gsap.fromTo(links,
                { x: 50, opacity: 0 },
                { 
                  x: 0, 
                  opacity: 1, 
                  duration: 0.5, 
                  stagger: 0.1, 
                  ease: "power2.out"
                }
              );
            }
          }
        }
      );
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook size={24} />, href: "https://github.com/AyushK0808", hoverColor: "hover:text-[#2d6389]" },
    { icon: <FaInstagram size={24} />, href: "https://www.instagram.com/_ayush.0808?igsh=MXZuN2x5dWg1OXF3Ng==", hoverColor: "hover:text-[#d73c77]" },
    { icon: <FaLinkedinIn size={24} />, href: "https://www.linkedin.com/in/ayush-kumar-061a58251/", hoverColor: "hover:text-[#348992]" },
    { icon: <FaEnvelope size={24} />, href: "mailto:theofficialayush.kumar@gmail.com", hoverColor: "hover:text-[#d73c77]" }
  ];

  const navigationLinks: NavigationLink[] = [
    { href: "#ourservies", text: "Our Services" },
    { href: "#casestudies", text: "Case Studies" },
    { href: "#ourlocations", text: "Our Locations" },
    { href: "#awards", text: "Awards and Achievements" },
    { href: "#whyuus", text: "Why Us?" },
    { href: "#leaders", text: "Leadership Team" },
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo/Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            {isMobile ? (
              <img 
                src="logo-small.png" 
                alt="Ayush Kumar Mobile Logo" 
                className="h-10 w-auto"
              />
            ) : (
              <img 
                src="logo-big.png" 
                alt="Ayush Kumar Desktop Logo" 
                className="h-15 w-auto"
              />
            )}
          </motion.div>

          {/* Social Media Links for Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <div ref={socialIconsRef} className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-700 ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.2,
                      duration: 0.3,
                      ease: "back.out(1.7)"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <TriangleHamburger isOpen={isDrawerOpen} onClick={toggleDrawer} />
          </div>

          {/* Triangle Hamburger for Mobile */}
          <div className="md:hidden">
            <TriangleHamburger isOpen={isDrawerOpen} onClick={toggleDrawer} />
          </div>
        </div>
        
        {/* Gradient border */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2d6389] via-[#348992] to-[#d73c77]" />
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col justify-between p-4"
            style={{
              borderImage: 'linear-gradient(to bottom, #2d6389, #348992, #d73c77) 1'
            }}
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <TriangleHamburger isOpen={isDrawerOpen} onClick={toggleDrawer} />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 mt-10 px-5">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="sidebar-link text-gray-700 hover:text-[#2d6389] transition-all font-medium py-2 px-4 rounded-lg transform hover:translate-x-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1krIATOATsOrsDjaJSBzAyvYj_lU_LRv5/view"
                target="_blank"
                rel="noopener noreferrer"
                className="sidebar-link mt-4 w-full text-center bg-gradient-to-r from-[#2d6389] to-[#348992] text-white py-3 rounded-full hover:shadow-lg transition-all font-medium transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>

            {/* Social Media Links in Sidebar */}
            <div className="flex space-x-4 mt-5 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-700 ${social.hoverColor} transition-all transform hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-opacity-30 z-40"
            onClick={toggleDrawer}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavbar;