import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Luxury Modern Interiors',
      subtitle: 'Sophisticated designs that redefine elegance',
      description: 'Transform your space with our premium interior solutions'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Contemporary Living Spaces',
      subtitle: 'Where comfort meets luxury',
      description: 'Create the perfect sanctuary for modern living'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Designer Kitchen Spaces',
      subtitle: 'Culinary excellence meets design innovation',
      description: 'Modular kitchens that inspire culinary creativity'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Premium Bedroom Interiors',
      subtitle: 'Your personal retreat awaits',
      description: 'Serene spaces designed for ultimate comfort'
    },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: 'Modular Kitchen',
      description: 'Custom-designed kitchens that blend functionality with style',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
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
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          autoplay={{
            delay: 5000,
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
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:from-black/70 sm:via-black/50 sm:to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <motion.div
                className="hero-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold leading-tight mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="block">Transforming</span>
                <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Spaces
                </span>
              </motion.div>
              <motion.p
                className="hero-subtitle text-lg xs:text-xl sm:text-2xl md:text-3xl font-poppins mb-2 sm:mb-4 text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Inspiring Lives
              </motion.p>
              <motion.p
                className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                From concept to completion, we bring your dream spaces to life with 
                innovative designs and exceptional craftsmanship
              </motion.p>
              <motion.div
                className="hero-buttons flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-4 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => setIsQuotePopupOpen(true)}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(198, 169, 114, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-montserrat font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg transition-all duration-300 border-2 border-primary/20"
                >
                  Get Free Quote
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/gallery" 
                    className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-secondary font-montserrat font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 shadow-lg"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !text-xl sm:!text-2xl !left-2 sm:!left-4 lg:!left-8 !w-10 !h-10 sm:!w-12 sm:!h-12"></div>
        <div className="swiper-button-next !text-white !text-xl sm:!text-2xl !right-2 sm:!right-4 lg:!right-8 !w-10 !h-10 sm:!w-12 sm:!h-12"></div>
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
                className="btn-secondary"
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

      {/* Quote Popup */}
      <QuotePopup 
        isOpen={isQuotePopupOpen} 
        onClose={() => setIsQuotePopupOpen(false)} 
      />
    </div>
  );
};

export default Home;
