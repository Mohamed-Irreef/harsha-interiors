import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRightIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
  StarIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('Kitchen');

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

  const categories = [
    'Kitchen',
    'Bedroom',
    'Living Room',
    'Dining Room',
    'Kids Room',
  ];

  const products = {
    Kitchen: [
      {
        name: 'Island Kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Elegant island kitchens for spacious homes',
        features: ['Central island', 'Extra storage', 'Modern design']
      },
      {
        name: 'L-Shape Kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Efficient L-shaped layouts maximizing corner space',
        features: ['Corner utilization', 'Optimal workflow', 'Space efficient']
      },
      {
        name: 'Parallel Kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Two parallel counters for maximum efficiency',
        features: ['Dual counters', 'Wide workspace', 'Easy movement']
      },
      {
        name: 'Straight Kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Simple straight line design for compact spaces',
        features: ['Space saving', 'Clean lines', 'Minimalist design']
      },
      {
        name: 'U-Shape Kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Maximum storage and workspace in U configuration',
        features: ['Three walls', 'Maximum storage', 'Ergonomic design']
      },
    ],
    Bedroom: [
      {
        name: 'Custom Beds',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Comfortable beds in various sizes and styles',
        features: ['King & Queen sizes', 'Storage options', 'Premium materials']
      },
      {
        name: 'Wardrobes',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Spacious wardrobes with optimal organization',
        features: ['Custom compartments', 'Mirror panels', 'Soft-close doors']
      },
      {
        name: 'Dressing Units',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Elegant dressing tables with ample storage',
        features: ['Hollywood mirrors', 'Jewelry storage', 'Comfortable seating']
      },
    ],
    'Living Room': [
      {
        name: 'Custom Sofas',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Comfortable seating solutions for your family',
        features: ['Premium fabrics', 'Custom sizes', 'Ergonomic design']
      },
      {
        name: 'Entertainment Units',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Stylish TV units with integrated storage',
        features: ['Cable management', 'Display shelves', 'Modern aesthetics']
      },
      {
        name: 'Coffee Tables',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Elegant center tables in various materials',
        features: ['Glass & wood options', 'Storage drawers', 'Unique designs']
      },
      {
        name: 'Bookshelves',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Stylish storage for books and decoratives',
        features: ['Adjustable shelves', 'Display sections', 'Custom heights']
      },
    ],
    'Dining Room': [
      {
        name: 'Dining Tables',
        image: 'https://images.unsplash.com/photo-1615529328928-7b4b0b21c8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Beautiful dining tables for family gatherings',
        features: ['Solid wood', 'Various shapes', 'Expandable options']
      },
      {
        name: 'Dining Chairs',
        image: 'https://images.unsplash.com/photo-1615529328928-7b4b0b21c8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Comfortable seating with matching designs',
        features: ['Ergonomic design', 'Cushioned seats', 'Matching sets']
      },
      {
        name: 'Crockery Storage',
        image: 'https://images.unsplash.com/photo-1615529328928-7b4b0b21c8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Elegant display and storage for dinnerware',
        features: ['Glass panels', 'LED lighting', 'Organized compartments']
      },
      {
        name: 'Bar Counter',
        image: 'https://images.unsplash.com/photo-1615529328928-7b4b0b21c8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Modern bar counters for entertaining',
        features: ['Built-in storage', 'Wine racks', 'Stylish stools']
      },
    ],
    'Kids Room': [
      {
        name: 'Study Units',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Dedicated study spaces for focused learning',
        features: ['Adjustable height', 'Book storage', 'Good lighting']
      },
      {
        name: 'Storage Beds',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Fun beds with built-in storage solutions',
        features: ['Under-bed storage', 'Safety rails', 'Colorful designs']
      },
      {
        name: 'Wardrobe-Study Combo',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'Space-saving combination units',
        features: ['Multi-functional', 'Space efficient', 'Child-friendly']
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16 sm:pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 shadow-lg"
            >
              🏠 PREMIUM FURNITURE COLLECTION
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight"
            >
              Our Premium
              <br />
              <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                Products
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Discover our comprehensive range of custom-made furniture and interior solutions 
              designed to transform your living spaces with elegance and functionality.
            </motion.p>

            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10"
            >
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <a 
                href="#products"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Browse Products</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <Link
                to="/contact"
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <span>Custom Design</span>
                <EyeIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Category Navigation */}
      <section id="products" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              📚 PRODUCT CATEGORIES
            </div>
            
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4 leading-tight">
              Choose Your Category
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Browse through our carefully curated categories to find the perfect furniture for every room
            </p>
          </motion.div>

          {/* Enhanced Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full font-poppins font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-yellow-500 text-white shadow-xl shadow-primary/25'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 shadow-lg hover:shadow-xl'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-yellow-500 rounded-full"
                  />
                )}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {products[activeCategory]?.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                        <HeartIcon className="w-5 h-5" />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                        <EyeIcon className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Bottom Badge */}
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        <EyeIcon className="w-4 h-4" />
                        View Details
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-playfair font-semibold text-secondary dark:text-white group-hover:text-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">₹45,000+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Starting from</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {product.features?.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            <CheckIcon className="w-3 h-3 text-primary" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to="/contact"
                        className="flex-1 bg-gradient-to-r from-primary to-yellow-500 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 text-center"
                      >
                        Get Quote
                      </Link>
                      <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                        <ShoppingCartIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-neutral dark:bg-gray-800">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Quality, craftsmanship, and customization that sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Custom Made',
                description: 'Every piece is crafted to fit your exact measurements and requirements',
                icon: '🎨'
              },
              {
                title: 'Premium Materials',
                description: 'We use only the finest materials to ensure durability and beauty',
                icon: '⭐'
              },
              {
                title: 'Expert Craftsmanship',
                description: 'Skilled artisans with decades of experience in furniture making',
                icon: '🔨'
              },
              {
                title: 'Warranty Included',
                description: 'Complete warranty coverage for peace of mind',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-playfair font-semibold text-secondary dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hero-gradient text-white">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your requirements and get a personalized quote for your dream furniture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-white text-secondary hover:bg-gray-100"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border-white text-white hover:bg-white hover:text-secondary"
              >
                Schedule Visit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
