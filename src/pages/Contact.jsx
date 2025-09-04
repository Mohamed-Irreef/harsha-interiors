import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

// Initialize EmailJS immediately
emailjs.init("B5E58zYnjkDmVgrBb");

// Keep the function for potential future use
const initEmailJS = () => {
  emailjs.init("B5E58zYnjkDmVgrBb");
};

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Get your EmailJS credentials
      const serviceId = 'service_3z1f4bh';
      const adminTemplateId = 'template_bdfm0ws'; // Admin notification template
      const userTemplateId = 'template_fy9hjov'; // User confirmation template
      
      // Prepare admin notification parameters
      const adminParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'New Contact Form Submission',
        message: formData.message,
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        to_email: 'mdirreef@gmail.com',
        reply_to: formData.email
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
      }
      
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          projectType: '',
          budget: ''
        });
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      // Error message without console logging
      alert(`Error sending email: ${error.text || error.message || 'Unknown error'}. Please try again later.`);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+91 9361757753', '+91 12345 67890'],
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['mdirreef@gmail.com', 'info@harshainteriors.com'],
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['No.22, College Road, Chromepet', 'Chennai, Tamil Nadu, India 600044'],
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      gradient: 'from-amber-500 to-amber-600'
    }
  ];

  const projectTypes = [
    'Complete Home Interior',
    'Kitchen Design',
    'Living Room',
    'Bedroom',
    'Office Interior',
    'Commercial Space',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹2 Lakhs',
    '₹2-5 Lakhs',
    '₹5-10 Lakhs',
    '₹10-20 Lakhs',
    'Above ₹20 Lakhs'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-amber-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your space with Harsha Interiors. Contact us today for a personalized consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-8 sm:p-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    Contact Us
                  </h2>
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                          placeholder="Your email address"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 resize-none"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                          whileHover={{ scale: isLoading ? 1 : 1.02 }}
                          whileTap={{ scale: isLoading ? 1 : 0.98 }}
                          type="submit"
                          disabled={isLoading}
                          className={`flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${
                            isLoading ? 'opacity-75 cursor-not-allowed' : ''
                          }`}
                        >
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <EnvelopeIcon className="w-5 h-5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="button"
                          onClick={() => window.open(`https://wa.me/919361757753?text=Hello,%20I'm%20interested%20in%20your%20services.`, '_blank')}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                          <span>WhatsApp</span>
                        </motion.button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                How to Reach Us
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="p-6 flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center shadow-md`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-5">
                  {[
                    { icon: FaInstagram, color: 'text-pink-500 hover:text-pink-600', bg: 'hover:bg-pink-50 dark:hover:bg-pink-900/20' },
                    { icon: FaFacebook, color: 'text-blue-500 hover:text-blue-600', bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20' },
                    { icon: FaTwitter, color: 'text-blue-400 hover:text-blue-500', bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/20' },
                    { icon: FaWhatsapp, color: 'text-green-500 hover:text-green-600', bg: 'hover:bg-green-50 dark:hover:bg-green-900/20' }
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md ${social.bg}`}
                    >
                      <social.icon className={`w-6 h-6 ${social.color} transition-colors duration-300`} />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Our Location */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BuildingOfficeIcon className="w-6 h-6 text-amber-500" />
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">Our Showroom</h3>
                  </div>
                  <div className="rounded-lg overflow-hidden h-64 sm:h-72 md:h-80">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9862511187404!2d80.1848945!3d12.968633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e1fd75cf5e7%3A0x1f2e19f9fd20d19c!2sHarsha%20Interiors!5e0!3m2!1sen!2sin!4v1722994323099!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Harsha Interiors Location"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a 
                      href="https://maps.app.goo.gl/i9tkQD3k9xgRRUWu5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-300 inline-flex items-center font-medium"
                    >
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
