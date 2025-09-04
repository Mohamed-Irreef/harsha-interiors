import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyRupeeIcon,
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Festive Special",
      originalPrice: "₹5,00,000",
      discountedPrice: "₹3,75,000",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "LIMITED TIME",
      rating: 4.9,
      reviews: 156,
      validUntil: "Dec 31, 2025",
      features: [
        "Complete home makeover",
        "Premium materials included",
        "3D visualization",
        "1-year warranty",
        "Free home consultation"
      ],
      terms: [
        "Valid for new bookings only",
        "Minimum project value ₹3,00,000",
        "Cannot be combined with other offers",
        "T&C apply"
      ]
    },
    {
      id: 2,
      title: "Modular Kitchen Deal",
      originalPrice: "₹2,50,000",
      discountedPrice: "₹1,75,000",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "BEST SELLER",
      rating: 4.8,
      reviews: 203,
      validUntil: "Jan 15, 2026",
      features: [
        "Premium modular kitchen",
        "Soft-close drawers",
        "Granite countertop",
        "Built-in appliances",
        "5-year warranty"
      ],
      terms: [
        "L-shaped or straight kitchen",
        "Up to 10 ft length",
        "Standard accessories included",
        "Installation charges extra"
      ]
    },
    {
      id: 3,
      title: "Bedroom Makeover",
      originalPrice: "₹3,00,000",
      discountedPrice: "₹2,40,000",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "POPULAR",
      rating: 4.7,
      reviews: 128,
      validUntil: "Feb 28, 2026",
      features: [
        "Master bedroom design",
        "Custom wardrobe",
        "Study table & chair",
        "Premium mattress",
        "Ambient lighting"
      ],
      terms: [
        "Single bedroom only",
        "Standard room size 12x12 ft",
        "Basic electrical work included",
        "Mattress upgrade available"
      ]
    },
    {
      id: 4,
      title: "Living Room Elite",
      originalPrice: "₹4,00,000",
      discountedPrice: "₹2,60,000",
      discount: "35% OFF",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "PREMIUM",
      rating: 4.9,
      reviews: 89,
      validUntil: "Mar 31, 2026",
      features: [
        "Complete living room design",
        "Custom furniture",
        "Entertainment unit",
        "Designer lighting",
        "Premium upholstery"
      ],
      terms: [
        "Standard room size up to 200 sq ft",
        "Sofa set (3+1+1) included",
        "Basic false ceiling work",
        "Color consultation included"
      ]
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Quality Guarantee',
      description: 'Premium materials and craftsmanship with extended warranty'
    },
    {
      icon: CurrencyRupeeIcon,
      title: 'Best Price Promise',
      description: 'Competitive pricing with no hidden costs or surprises'
    },
    {
      icon: ClockIcon,
      title: 'Timely Delivery',
      description: 'Committed delivery timelines despite promotional rates'
    },
    {
      icon: SparklesIcon,
      title: 'Design Excellence',
      description: 'Award-winning designs tailored to your lifestyle'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 dark:from-primary/20 dark:via-accent/10 dark:to-secondary/20 pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
              <SparklesIcon className="h-5 w-5 text-primary mr-2" />
              <span className="text-primary font-semibold">Limited Time Offers</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Exclusive <span className="text-gradient">Deals</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your space with our premium interior design packages at unbeatable prices
            </p>

            {/* Animated Banner */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-lg mb-8">
              <div className="flex items-center justify-center space-x-4 text-white">
                <div className="animate-bounce">🎉</div>
                <span className="text-lg font-semibold">
                  Save up to 35% on premium interior packages - Limited time only!
                </span>
                <div className="animate-bounce delay-300">✨</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Premium <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose from our carefully curated packages designed to transform your space
            </p>
          </motion.div>

          {/* Offers Slider */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {offers.map((offer, index) => (
                <SwiperSlide key={offer.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {offer.discount}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {offer.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {offer.title}
                        </h3>
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(offer.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {offer.rating} ({offer.reviews} reviews)
                          </span>
                        </div>

                        {/* Pricing */}
                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-2xl font-bold text-primary">
                              {offer.discountedPrice}
                            </span>
                            <span className="text-lg text-gray-500 line-through">
                              {offer.originalPrice}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Valid until {offer.validUntil}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            What's Included:
                          </h4>
                          {offer.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                          {offer.features.length > 3 && (
                            <p className="text-sm text-primary">
                              +{offer.features.length - 3} more features
                            </p>
                          )}
                        </div>

                        {/* Terms */}
                        <div className="space-y-2 mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            Terms & Conditions:
                          </h4>
                          {offer.terms.map((term, termIndex) => (
                            <div key={termIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {term}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="space-y-3">
                          <Link
                            to="/contact"
                            className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                          >
                            Book Now & Save
                          </Link>
                          <div className="flex space-x-2">
                            <a
                              href="tel:+919876543210"
                              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                              <PhoneIcon className="h-4 w-4" />
                              <span className="text-sm">Call</span>
                            </a>
                            <a
                              href="https://wa.me/919876543210"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                              <ChatBubbleLeftRightIcon className="h-4 w-4" />
                              <span className="text-sm">WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <ArrowRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-300 rotate-180" />
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <ArrowRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Offers */}
      <section className="section-padding bg-neutral dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our <span className="text-gradient">Offers</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience premium quality and exceptional service at unbeatable prices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't miss out on these exclusive offers. Book your consultation today and save big!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 flex items-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Call Now: +91 98765 43210</span>
              </a>
            </div>

            <div className="mt-8 text-white/80 text-sm">
              <p>⏰ Limited time offers - Valid until stocks last</p>
              <p>📞 Free consultation available 24/7</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
