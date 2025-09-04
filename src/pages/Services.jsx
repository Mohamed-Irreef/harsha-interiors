import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  HeartIcon,
  PuzzlePieceIcon,
  StarIcon,
  ArrowRightIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.utils.toArray('.scroll-animation').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const services = [
    {
      icon: HomeIcon,
      title: 'Modular Kitchen',
      description: 'Custom-designed kitchens that perfectly blend functionality with style. From L-shaped to island designs, we create kitchens that suit your lifestyle.',
      features: ['Custom measurements', 'Premium materials', 'Modern fittings', 'Warranty included'],
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: SparklesIcon,
      title: 'Bedroom Interiors',
      description: 'Create your perfect sanctuary with our custom bedroom solutions. From beds to wardrobes, we design spaces for comfort and relaxation.',
      features: ['Custom wardrobes', 'Comfortable beds', 'Dressing units', 'Storage solutions'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Living Room Interiors',
      description: 'Transform your living space into a welcoming area for family and guests. Custom furniture and décor that reflects your personality.',
      features: ['Custom sofas', 'Entertainment units', 'Coffee tables', 'Decorative elements'],
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: StarIcon,
      title: 'Dining Room Interiors',
      description: 'Create the perfect space for family meals and entertaining guests. Custom dining solutions that match your kitchen and overall theme.',
      features: ['Custom dining tables', 'Matching chairs', 'Crockery storage', 'Bar counters'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: HeartIcon,
      title: 'Kids Room',
      description: 'Design fun, functional, and safe spaces for your children. From study areas to play zones, we create rooms that grow with your kids.',
      features: ['Study units', 'Storage beds', 'Play areas', 'Safety features'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: PuzzlePieceIcon,
      title: 'Custom Furniture & Décor',
      description: 'Bespoke furniture pieces and decorative elements that perfectly fit your space and style preferences.',
      features: ['Custom designs', 'Premium materials', 'Unique pieces', 'Perfect fit'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto scroll-animation relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-semibold text-sm tracking-wide border border-primary/30">
                🏠 OUR EXPERTISE
              </span>
            </motion.div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
              What{' '}
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                We Do
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-poppins text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
              Customized Interiors for Every Lifestyle - From concept to completion, 
              we transform your vision into reality with premium quality and innovative designs.
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { number: '6+', label: 'Service Categories' },
                { number: '100%', label: 'Customized' },
                { number: '45 Days', label: 'Delivery' },
                { number: '10 Years', label: 'Warranty' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              ✨ OUR SERVICES
            </div>
            
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4 leading-tight">
              Complete Interior Solutions
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every space tells a story. Let us help you tell yours with our comprehensive interior design services.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`scroll-animation grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div className="bg-primary/5 rounded-full px-4 py-1">
                      <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                        Premium Service
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-secondary dark:text-white leading-tight">
                    {service.title}
                  </h2>
                  
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base"
                      >
                        Get Quote & Design
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base"
                    >
                      View Gallery
                    </motion.button>
                  </div>
                </div>

                {/* Enhanced Image Section */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} order-first lg:order-none relative`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl shadow-2xl group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-playfair font-bold text-lg text-secondary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Premium quality with modern designs
                        </p>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-xs font-semibold">Starting from</span>
                          <span className="text-sm font-bold">₹2.5L*</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              ⚙️ HOW WE WORK
            </div>
            
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4 leading-tight">
              Our Service Process
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach that ensures quality results and complete customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Connection Lines - Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 z-0" />
            
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'Initial home visit to understand your requirements, space, and lifestyle preferences',
                icon: '👥',
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '02',
                title: '3D Design & Planning',
                description: 'Create detailed designs and photorealistic 3D visualizations for your approval',
                icon: '🎨',
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '03',
                title: 'Quality Production',
                description: 'Manufacture custom furniture using premium materials in our modern factories',
                icon: '🏭',
                color: 'from-green-500 to-green-600'
              },
              {
                step: '04',
                title: 'Expert Installation',
                description: 'Professional installation by skilled teams with quality checks and handover',
                icon: '🔧',
                color: 'from-primary to-yellow-500'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 group"
              >
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-primary/30 transform hover:scale-105">
                  {/* Step Number Badge */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative`}>
                    <span className="text-2xl">{step.icon}</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-xs font-bold text-primary">{step.step}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-playfair font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-secondary dark:text-white mb-4">
                Complete Project Timeline
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">7 Days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Design Approval</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">30 Days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Production Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">7 Days</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Installation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Floating Badges */}
            <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary font-semibold text-sm shadow-lg">
                🏆 Award Winning Team
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary font-semibold text-sm shadow-lg">
                ⚡ 1000+ Projects
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary font-semibold text-sm shadow-lg">
                💎 Premium Quality
              </div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-secondary dark:text-white mb-6 leading-tight"
            >
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                Your Space?
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Experience the difference of premium interior design. From concept to completion, 
              we create spaces that reflect your style and exceed your expectations.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
            >
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Design Awards</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 w-full sm:w-auto justify-center text-center"
              >
                <span>Start Your Project Today</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/gallery"
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-secondary dark:text-white font-semibold rounded-full border-2 border-white/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center text-center"
              >
                <span>View Our Gallery</span>
                <EyeIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 sm:mt-12 pt-8 border-t border-white/20"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get a free consultation and 3D visualization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-2 text-primary hover:text-yellow-500 transition-colors duration-300 font-medium"
                >
                  📞 +91 98765 43210
                </a>
                <span className="hidden sm:inline text-gray-400">|</span>
                <a 
                  href="mailto:info@harshainteriors.com" 
                  className="flex items-center gap-2 text-primary hover:text-yellow-500 transition-colors duration-300 font-medium"
                >
                  ✉️ info@harshainteriors.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Decoration */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>
    </div>
  );
};

export default Services;
