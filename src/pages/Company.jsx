import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  UserGroupIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Company = () => {
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

  const process = [
    {
      icon: CogIcon,
      title: 'Design',
      description: 'Project allocated to designer with clear instructions. Study requirements in detail through discussions and floor plans.',
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Production',
      description: 'Clarifications between factory manager and designer. Production scheduled as per client confirmation.',
    },
    {
      icon: CheckCircleIcon,
      title: 'Execution',
      description: 'Project implementation planned well in advance. Installation arranged immediately upon delivery.',
    },
    {
      icon: ClockIcon,
      title: 'Handover',
      description: 'Committed to on-time completion. Team ensures no debris or disturbance, guaranteeing client satisfaction.',
    },
  ];

  const achievements = [
    { number: '20+', title: 'Years of Experience', subtitle: 'Since 2004' },
    { number: '1,400', title: 'Team Members', subtitle: 'Skilled professionals' },
    { number: '12,000+', title: 'Happy Clients', subtitle: 'Satisfied customers' },
    { number: '300', title: 'Projects/Month', subtitle: 'Delivery capacity' },
    { number: '28', title: 'Showrooms', subtitle: 'Across India' },
  ];

  const branches = [
    'Navi Mumbai', 'Hyderabad', 'Bangalore', 'Mysore', 'Kerala', 'Pune',
    'Mumbai', 'Chennai', 'Nagercoil', 'Madurai', 'Coimbatore', 'Mangalore'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-custom scroll-animation relative z-10">
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
                ✨ INDIA'S #1 INTERIOR DESIGN COMPANY
              </span>
            </motion.div>
            
            <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                Harsha Interiors
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-poppins text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              India's largest home interior designers with over 20 years of experience 
              in transforming spaces and inspiring lives across the nation.
            </p>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 max-w-4xl mx-auto">
              {[
                { number: '20+', label: 'Years Experience' },
                { number: '15K+', label: 'Happy Clients' },
                { number: '28', label: 'Showrooms' },
                { number: '300+', label: 'Projects/Month' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
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

      {/* Company Story */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom scroll-animation">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                📖 OUR JOURNEY
              </div>
              
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-6 leading-tight">
                Crafting Dreams Since 
                <span className="text-primary"> 2004</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Since 2004, Harsha Interiors has been transforming the essence of home interiors 
                    across India. Our expertise goes beyond aesthetics to include thoughtful designs 
                    that reflect style and functionality.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We are professional, contemporary interior designers and contractors with the 
                    capacity to hand over 300 projects every month. We ensure client satisfaction 
                    through quality products and systematic working.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our dedicated team of interior designers understands the need for space and 
                    functionality, offering customers exactly what they need to bring their dreams to life.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: '🏆', title: 'Award Winning', desc: 'Design Excellence' },
                  { icon: '⚡', title: 'Fast Delivery', desc: '45-Day Promise' },
                  { icon: '🛡️', title: '10-Year Warranty', desc: 'Quality Assured' },
                  { icon: '🎯', title: '100% Customized', desc: 'Your Style' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <div className="font-semibold text-secondary dark:text-white text-sm">
                      {feature.title}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {feature.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Story"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold">20+</div>
                  <div className="text-xs sm:text-sm font-medium">Years</div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
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
              Our Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to completion - our systematic approach ensures perfect results
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/30 hidden lg:block" />
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:text-left text-center`}
                >
                  <div className="flex-1 lg:pr-8 lg:pl-8">
                    <div className={`${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    } max-w-md ${
                      index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-secondary dark:text-white mb-3">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full hidden lg:block" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              📊 OUR ACHIEVEMENTS
            </div>
            
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4 leading-tight">
              Numbers That Speak for 
              <span className="text-primary"> Excellence</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Two decades of commitment to quality and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-primary/30 hover:transform hover:scale-105"
              >
                <div className="relative">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent mb-2 group-hover:from-yellow-500 group-hover:to-primary transition-all duration-300">
                    {achievement.number}
                  </div>
                  
                  <div className="text-base sm:text-lg font-poppins font-semibold text-secondary dark:text-white mb-1 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.subtitle}
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {[
                { icon: '🏆', title: 'Award Winner', desc: '2023 Excellence' },
                { icon: '⭐', title: '4.8/5 Rating', desc: 'Customer Reviews' },
                { icon: '🔒', title: 'ISO Certified', desc: 'Quality Standard' },
                { icon: '🚀', title: 'Pan-India', desc: 'Service Coverage' }
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-semibold text-secondary dark:text-white text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-secondary via-gray-800 to-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container-custom scroll-animation relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary font-semibold text-sm mb-6">
                🏅 WHY CHOOSE US
              </div>
              
              <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight">
                Excellence in Every
                <span className="block bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
                  Detail
                </span>
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <CheckCircleIcon className="w-6 h-6 text-primary group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      Complete Customization
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      Qualified and experienced interior designers provide complete solutions 
                      tailored to your specific needs, style preferences, and space requirements.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <UserGroupIcon className="w-6 h-6 text-primary group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      Expert Team of 1,400+
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      Skilled professionals working closely with clients in cooperation 
                      with business development managers and specialized installation teams.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <BuildingOfficeIcon className="w-6 h-6 text-primary group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      Modern Infrastructure
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                      State-of-the-art factories, 28 showrooms nationwide, and advanced logistics 
                      ensuring premium quality production and timely project delivery.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button className="bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Start Your Project Today
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Why Choose Us"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">4.8★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">ISO</div>
                    <div className="text-xs text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
              📍 OUR PRESENCE
            </div>
            
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4 leading-tight">
              Serving Customers Across
              <span className="block text-primary">India</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              28 showrooms and experience centers strategically located to serve you better
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">28</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Showrooms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">States</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center space-x-3 p-4 sm:p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-primary/30 transform hover:scale-105"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 group-hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <MapPinIcon className="w-5 h-5 text-primary group-hover:text-yellow-500 transition-colors duration-300" />
                </div>
                <span className="font-poppins text-secondary dark:text-white group-hover:text-primary transition-colors duration-300 font-medium">
                  {branch}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-secondary dark:text-white mb-4">
                Visit Our Nearest Showroom
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Experience our premium designs and quality materials firsthand at any of our showrooms
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary to-yellow-500 hover:from-yellow-500 hover:to-primary text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Find Nearest Showroom
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-lg transition-all duration-300">
                  Schedule Visit
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;
