import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Modular Kitchen',
    'Bedroom Interiors',
    'Living Room',
    'Dining Room',
    'Kids Room',
    'Custom Furniture',
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', name: 'Facebook' },
    { icon: FaTwitter, href: '#', name: 'Twitter' },
    { icon: FaInstagram, href: '#', name: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-secondary dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 xs:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-primary">
              Harsha Interiors
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Transforming Spaces, Inspiring Lives. We are professional contemporary
              interior designers with over 20 years of experience in creating beautiful
              living spaces.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-playfair font-semibold text-primary">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-playfair font-semibold text-primary">
              Our Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm sm:text-base">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4"
          >
            <h4 className="text-base sm:text-lg font-playfair font-semibold text-primary">
              Contact Info
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/i9tkQD3k9xgRRUWu5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary text-sm sm:text-base transition-colors duration-300"
                >
                  No.22, College Road, Chromepet, Chennai, Tamil Nadu, India 600044
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+91 9361757753</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base break-all">
                  mdirreef@gmail.com
                </span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/919361757753"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-green-600 hover:bg-green-700 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors duration-300"
              aria-label="Contact us on WhatsApp"
            >
              <FaWhatsapp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">WhatsApp Us</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col xs:flex-row justify-between items-center space-y-4 xs:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Harsha Interiors. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-primary text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-primary text-xs sm:text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-primary text-xs sm:text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919361757753"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-colors duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.a>
    </footer>
  );
};

export default Footer;
