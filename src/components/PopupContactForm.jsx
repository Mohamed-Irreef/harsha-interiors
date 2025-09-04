import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PhoneIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("B5E58zYnjkDmVgrBb");

const PopupContactForm = ({ isOpen, onClose }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: '',
    budget: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Get your EmailJS credentials (these must match your account)
      const serviceId = 'service_3z1f4bh';
      const adminTemplateId = 'template_bdfm0ws'; // Admin notification template
      const userTemplateId = 'template_fy9hjov'; // User confirmation template
      
      // Prepare admin notification parameters
      const adminParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        to_email: 'mdirreef@gmail.com',
        reply_to: formData.email,
        subject: 'New Contact Form Submission from Website'
      };
      
      // Prepare user confirmation parameters
      const userParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        to_name: formData.name,
        to_email: formData.email, // This MUST be the user's email for them to receive it
        from_name: 'Harsha Interiors',
        reply_to: 'mdirreef@gmail.com',
        subject: 'Thank you for contacting Harsha Interiors',
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        phone: formData.phone
      };
      
      // Send email to admin
      await emailjs.send(serviceId, adminTemplateId, adminParams);
      
      // Send confirmation email to user
      try {
        // When sending user confirmation, make sure we're explicitly setting destination
        await emailjs.send(
          serviceId,
          userTemplateId,
          {
            ...userParams,
            to_email: formData.email, // Force the to_email to be the user's email
          }
        );
      } catch {
        // Silently handle error, but continue with form submission
        // Continue with the form submission process even if user email fails
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: '',
        budget: ''
      });
      
      // Close the popup with success message
      alert('Thank you! Your message has been sent successfully. We will contact you soon.');
      onClose();
    } catch (error) {
      // Handle error but don't log it
      alert(`Something went wrong: ${error.text || error.message || 'Unknown error'}. Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in your interior design services. ${formData.name ? `My name is ${formData.name}.` : ''} ${formData.message ? `Message: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/919361757753?text=${message}`, '_blank');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 xs:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[95vh] overflow-y-auto"
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 50 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-t-2xl p-3 xs:p-4 sm:p-6">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 rounded-full p-1 xs:p-1.5 sm:p-2 transition-all duration-300 group"
              aria-label="Close popup"
            >
              <XMarkIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <div className="text-center">
              <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 xs:mb-2">
                Get Free Quote
              </h2>
              <p className="text-xs xs:text-sm sm:text-base text-white/90">
                Transform your space with our expert design team
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-3 xs:p-4 sm:p-6 lg:p-8">
            <form ref={form} onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 xs:mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-2 xs:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-2 xs:py-3 text-sm xs:text-base border-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } dark:bg-gray-800 dark:text-white`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 xs:mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-2 xs:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-2 xs:py-3 text-sm xs:text-base border-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } dark:bg-gray-800 dark:text-white`}
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 xs:mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-2 xs:left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 xs:h-5 xs:w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-2 xs:py-3 text-sm xs:text-base border-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } dark:bg-gray-800 dark:text-white`}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Project Type and Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 xs:mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Interior</option>
                    <option value="commercial">Commercial Interior</option>
                    <option value="renovation">Renovation</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 xs:mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select budget</option>
                    <option value="under-1l">Under ₹1 Lakh</option>
                    <option value="1l-3l">₹1-3 Lakhs</option>
                    <option value="3l-5l">₹3-5 Lakhs</option>
                    <option value="5l-10l">₹5-10 Lakhs</option>
                    <option value="above-10l">Above ₹10 Lakhs</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 xs:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-800 dark:text-white`}
                  placeholder="Tell us about your project requirements..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs xs:text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 pt-2 xs:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm xs:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 xs:h-5 xs:w-5 border-2 border-white border-t-transparent mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm xs:text-base"
                >
                  <FaWhatsapp className="mr-1 xs:mr-2 h-4 w-4 xs:h-5 xs:w-5" />
                  WhatsApp
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-4 xs:mt-6 text-center">
              <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopupContactForm;
