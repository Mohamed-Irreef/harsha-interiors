import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import QuotePopup from '../components/QuotePopup';
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  UsersIcon,
  CheckBadgeIcon,
  MapPinIcon,
  StarIcon,
  TrophyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const whyChooseRef = useRef(null);
  const galleryRef = useRef(null);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();

    // Hero animations
    tl.fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

    // Section animations on scroll
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

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Luxury Modern Interiors',
      subtitle: 'Sophisticated designs that redefine elegance',
      description: 'Transform your space with our premium interior solutions',
      features: ['Custom Design', '3D Visualization', 'Premium Materials']
    },
    {
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Contemporary Living Spaces',
      subtitle: 'Where comfort meets luxury',
      description: 'Create the perfect sanctuary for modern living',
      features: ['Smart Lighting', 'Ergonomic Design', 'Space Optimization']
    },
    {
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Designer Kitchen Spaces',
      subtitle: 'Culinary excellence meets design innovation',
      description: 'Modular kitchens that inspire culinary creativity',
      features: ['Modular Design', 'Premium Appliances', 'Storage Solutions']
    },
    {
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Premium Bedroom Interiors',
      subtitle: 'Your personal retreat awaits',
      description: 'Serene spaces designed for ultimate comfort',
      features: ['Walk-in Wardrobes', 'Ambient Lighting', 'Luxury Finishes']
    },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: 'Modular Kitchen',
      description: 'Custom-designed kitchens that blend functionality with style',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Living Room',
      description: 'Create the perfect space for family gatherings',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
    {
      icon: SparklesIcon,
      title: 'Bedroom Interiors',
      description: 'Peaceful retreats designed for comfort and relaxation',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const whyChooseUs = [
    { icon: UsersIcon, number: '15,000+', title: 'Happy Clients' },
    { icon: CheckBadgeIcon, number: '20+', title: 'Years Experience' },
    { icon: MapPinIcon, number: '28', title: 'Showrooms' },
    { icon: BuildingOfficeIcon, number: '500+', title: 'Projects/Month' },
  ];

  const galleryImages = [
'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full hero-swiper"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => {
                    // Image loaded successfully
                  }}
                  onError={(e) => {
                    // Fallback to a reliable image URL
                    e.target.src = `https://picsum.photos/1920/1080?random=${index + 1}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 sm:from-black/70 sm:via-black/40 sm:to-transparent" />
                
                {/* Slide-specific content overlay */}
                <div className="absolute bottom-8 right-8 hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white max-w-sm">
                    <h3 className="font-semibold text-lg mb-2">{slide.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {slide.features?.map((feature) => (
                        <span key={feature} className="text-xs bg-primary/80 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm opacity-90">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <motion.div
                className="hero-title text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="block text-white drop-shadow-2xl">Transforming</span>
                <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent drop-shadow-2xl">
                  Spaces,
                </span>
                <span className="block text-primary drop-shadow-2xl text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                  Inspiring Lives
                </span>
              </motion.div>
              
              <motion.p
                className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-100 max-w-3xl leading-relaxed drop-shadow-md font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                India's Most Trusted Interior Design Brand
                <span className="block text-base sm:text-lg md:text-xl mt-2 text-gray-200">
                  Premium designs • Expert craftsmanship • 20+ years of excellence
                </span>
              </motion.p>

              <motion.div
                className="hero-buttons flex flex-col sm:flex-col md:flex-row gap-3 xs:gap-4 sm:gap-6 md:gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.button
                  onClick={() => setIsQuotePopupOpen(true)}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-r from-primary via-yellow-500 to-primary hover:from-yellow-500 hover:via-primary hover:to-yellow-500 text-white font-bold text-sm xs:text-base sm:text-lg px-4 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-lg xs:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-400 border border-yellow-400/40 hover:border-yellow-300/60 w-full md:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-1.5 xs:gap-2">
                    <SparklesIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                    <span>Get Free Quote</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-primary/10 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
                
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto"
                >
                  <Link 
                    to="/gallery" 
                    className="group inline-flex items-center justify-center gap-1.5 xs:gap-2 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white hover:bg-white/20 font-bold text-sm xs:text-base sm:text-lg px-4 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-lg xs:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                  >
                    <BuildingOfficeIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:text-primary transition-colors" />
                    <span>View Our Work</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Strip */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-secondary via-gray-800 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: HomeIcon, title: 'Modular Kitchen', count: '5000+' },
              { icon: BuildingOfficeIcon, title: 'Living Rooms', count: '3500+' },
              { icon: SparklesIcon, title: 'Bedrooms', count: '4200+' },
              { icon: UsersIcon, title: 'Complete Homes', count: '2800+' }
            ].map((item) => (
              <motion.div
                key={item.title}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 group-hover:bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 transition-colors duration-300">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-yellow-400 transition-colors duration-300" />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">{item.count}</div>
                <div className="text-xs sm:text-sm text-white/90 font-medium">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section ref={aboutRef} className="py-12 sm:py-16 lg:py-20 bg-neutral dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-secondary dark:text-white mb-4 sm:mb-6">
              About Harsha Interiors
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Since 2004, we have been transforming the essence of home interiors across India. 
              Our expertise goes beyond aesthetics to include thoughtful designs that reflect style 
              and functionality, creating spaces that truly inspire.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6"
            >
              <Link to="/company" className="btn-primary">
                Learn More About Us
              </Link>
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="btn-secondary text-xs xs:text-sm sm:text-base px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 rounded-md xs:rounded-lg"
              >
                Start Your Project
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Recognized for excellence in interior design and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { 
                icon: TrophyIcon, 
                title: 'Best Interior Design Firm', 
                year: '2023',
                org: 'Design Excellence Awards'
              },
              { 
                icon: StarIcon, 
                title: 'Customer Choice Award', 
                year: '2022',
                org: 'Home & Decor India'
              },
              { 
                icon: ShieldCheckIcon, 
                title: 'Quality Assurance Certified', 
                year: '2021',
                org: 'ISO 9001:2015'
              }
            ].map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-playfair font-bold text-secondary dark:text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-primary font-semibold mb-1">{award.year}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral via-gray-50 to-neutral dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          {/* Mobile Slider View */}
          <div className="block md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet testimonial-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop
              className="testimonial-swiper"
            >
              {[
                {
                  name: 'Rajesh & Priya Sharma',
                  location: 'Mumbai',
                  rating: 5,
                  text: 'Harsha Interiors transformed our home beyond our wildest dreams. The attention to detail and quality of work is exceptional!',
                  project: 'Complete Home Interior'
                },
                {
                  name: 'Amit Patel',
                  location: 'Delhi',
                  rating: 5,
                  text: 'Their modular kitchen design is both beautiful and functional. The team delivered exactly what they promised on time.',
                  project: 'Modular Kitchen'
                },
                {
                  name: 'Sunita & Ravi Kumar',
                  location: 'Bangalore',
                  rating: 5,
                  text: 'Professional service, premium quality materials, and innovative designs. Highly recommend Harsha Interiors!',
                  project: 'Living Room & Bedroom'
                },
                {
                  name: 'Deepak & Meera Singh',
                  location: 'Chennai',
                  rating: 5,
                  text: 'Amazing work! They completed our entire home makeover in just 45 days. Highly professional team!',
                  project: 'Complete Home Makeover'
                }
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 mx-2">
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed italic text-center">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4 text-center">
                      <h4 className="font-semibold text-secondary dark:text-white text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary text-sm font-medium">
                        {testimonial.project} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Rajesh & Priya Sharma',
                location: 'Mumbai',
                rating: 5,
                text: 'Harsha Interiors transformed our home beyond our wildest dreams. The attention to detail and quality of work is exceptional!',
                project: 'Complete Home Interior'
              },
              {
                name: 'Amit Patel',
                location: 'Delhi',
                rating: 5,
                text: 'Their modular kitchen design is both beautiful and functional. The team delivered exactly what they promised on time.',
                project: 'Modular Kitchen'
              },
              {
                name: 'Sunita & Ravi Kumar',
                location: 'Bangalore',
                rating: 5,
                text: 'Professional service, premium quality materials, and innovative designs. Highly recommend Harsha Interiors!',
                project: 'Living Room & Bedroom'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <h4 className="font-semibold text-secondary dark:text-white text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.project} • {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section ref={servicesRef} className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-secondary dark:text-white mb-3 sm:mb-4">
              Featured Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              Custom-made interior solutions that perfectly fit your space and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-playfair font-semibold text-secondary dark:text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-primary font-medium hover:text-primary/80 transition-colors text-sm sm:text-base"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4">
              How We Work
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our proven 4-step process ensures your dream space becomes reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Free home visit and detailed requirement analysis',
                icon: UsersIcon,
                color: 'from-blue-500 to-blue-600'
              },
              {
                step: '02',
                title: '3D Design',
                description: 'Photorealistic 3D visualization of your space',
                icon: SparklesIcon,
                color: 'from-purple-500 to-purple-600'
              },
              {
                step: '03',
                title: 'Approval',
                description: 'Final design approval and material selection',
                icon: CheckBadgeIcon,
                color: 'from-green-500 to-green-600'
              },
              {
                step: '04',
                title: 'Execution',
                description: 'Professional installation with quality assurance',
                icon: BuildingOfficeIcon,
                color: 'from-primary to-yellow-500'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Connector Line - Hidden on mobile, shown on larger screens */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 z-0" />
                )}
                
                <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group-hover:border-primary/30 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary mb-2">Step {process.step}</div>
                    <h3 className="text-xl sm:text-2xl font-playfair font-bold text-secondary dark:text-white mb-3">
                      {process.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary text-white font-bold px-3 py-2 rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 text-xs sm:text-base"
            >
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-12 sm:py-16 lg:py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-3 sm:mb-4">
              Why Choose Harsha Interiors?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto px-4 sm:px-0">
              Experience the difference with India's leading interior design company
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-primary mb-1 sm:mb-2">
                  {item.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-poppins text-gray-200">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section ref={galleryRef} className="py-12 sm:py-16 lg:py-20 bg-neutral dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-secondary dark:text-white mb-3 sm:mb-4">
              Featured Gallery
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              Explore our stunning portfolio of completed projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium bg-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm">
                    View Project
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10 lg:mt-12"
          >
            <Link to="/gallery" className="btn-primary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4">
              View Complete Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-primary/10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-12"
            >
              <div className="inline-flex items-center bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 mb-6">
                <SparklesIcon className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary font-semibold text-sm sm:text-base">Transform Your Space Today</span>
              </div>
              <h2 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
                Ready to Transform
                <span className="block bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                  Your Space?
                </span>
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-4 leading-relaxed font-light">
                Join 15,000+ satisfied customers who trusted us 
              </p>
              <p className="text-lg sm:text-xl text-primary font-semibold">
                Get started with a FREE consultation today!
              </p>
            </motion.div>
            
            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
            >
              {[
                { icon: SparklesIcon, title: 'Free 3D Design', desc: 'Visualize before you decide' },
                { icon: CheckBadgeIcon, title: '45-Day Installation', desc: 'Quick & efficient delivery' },
                { icon: ShieldCheckIcon, title: '10-Year Warranty', desc: 'Quality you can trust' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col xs:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              <motion.button
                onClick={() => setIsQuotePopupOpen(true)}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-primary via-yellow-500 to-primary hover:from-yellow-500 hover:via-primary hover:to-yellow-500 text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-md xs:rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-400 border border-yellow-400/40 hover:border-yellow-300/60"
              >
                <span className="relative z-10 flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                  <SparklesIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get Free Quote Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-primary/10 rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.a
                href="tel:+91-9876543210"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white hover:bg-white/20 font-bold text-sm xs:text-base sm:text-lg md:text-xl px-5 py-3 xs:px-6 xs:py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg xs:rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center gap-2 xs:gap-2.5 sm:gap-3"
              >
                <span className="text-lg xs:text-xl sm:text-2xl">📞</span>
                <span>Call Now</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">🏆</span>
                <span className="text-sm sm:text-base font-medium">15,000+ Happy Families</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-sm sm:text-base font-medium">4.8/5 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">🏠</span>
                <span className="text-sm sm:text-base font-medium">28+ Showrooms Across India</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Popup */}
      <QuotePopup 
        isOpen={isQuotePopupOpen} 
        onClose={() => setIsQuotePopupOpen(false)} 
      />
    </div>
  );
};

export default Home;
