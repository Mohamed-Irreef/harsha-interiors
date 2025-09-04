import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BookOpenIcon,
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

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

  const categories = ['All', 'Home Interiors', 'Modular Kitchens', 'Décor Tips', 'Trends'];

  const blogs = [
    {
      id: 1,
      title: '10 Modern Kitchen Design Trends for 2025',
      excerpt: 'Discover the latest trends in modular kitchen design that will transform your cooking space into a modern masterpiece.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Priya Sharma',
      date: '2025-01-15',
      category: 'Modular Kitchens',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Creating a Cozy Living Room on a Budget',
      excerpt: 'Learn how to transform your living room into a warm, inviting space without breaking the bank with these expert tips.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Rajesh Kumar',
      date: '2025-01-10',
      category: 'Home Interiors',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Bedroom Color Schemes That Promote Better Sleep',
      excerpt: 'The psychology of color in bedroom design and how the right palette can improve your sleep quality and overall well-being.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Sneha Patel',
      date: '2025-01-05',
      category: 'Décor Tips',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Maximizing Small Spaces: Smart Storage Solutions',
      excerpt: 'Clever storage ideas and space-saving furniture solutions for small apartments and homes.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Amit Desai',
      date: '2024-12-28',
      category: 'Home Interiors',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Sustainable Interior Design: Eco-Friendly Choices',
      excerpt: 'How to create beautiful interiors while being environmentally conscious with sustainable materials and practices.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Kavya Singh',
      date: '2024-12-20',
      category: 'Trends',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Lighting Design: Setting the Perfect Mood',
      excerpt: 'Master the art of lighting design to create ambiance and functionality in every room of your home.',
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      author: 'Rohit Malhotra',
      date: '2024-12-15',
      category: 'Décor Tips',
      readTime: '10 min read'
    }
  ];

  // Filter blogs based on active category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === activeCategory));
    }
  }, [activeCategory]);

  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  const featuredBlog = blogs[0];
  const regularBlogs = activeCategory === 'All' ? blogs.slice(1) : filteredBlogs.filter(blog => blog.id !== featuredBlog.id);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient text-white">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <BookOpenIcon className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
              Our{' '}
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl font-poppins text-gray-200 max-w-3xl mx-auto">
              Expert insights, design tips, and inspiration for creating beautiful 
              interiors that reflect your lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="section-padding">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-playfair font-bold text-secondary dark:text-white mb-8 text-center">
              Featured Article
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Link to={`/blog/${featuredBlog.id}`} className="block">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredBlog.category}
                    </span>
                  </div>
                </div>
              </Link>
              <div>
                <Link to={`/blog/${featuredBlog.id}`}>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-secondary dark:text-white mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredBlog.title}
                  </h3>
                </Link>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="w-4 h-4" />
                    <span className="text-sm">{featuredBlog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(featuredBlog.date).toLocaleDateString()}
                    </span>
                  </div>
                  <span className="text-sm">{featuredBlog.readTime}</span>
                </div>
                <Link to={`/blog/${featuredBlog.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                  >
                    Read Full Article
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-neutral dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-secondary dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trends and tips in interior design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/blog/${blog.id}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-hover group cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-playfair font-semibold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <UserIcon className="w-3 h-3" />
                            <span>{blog.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <CalendarIcon className="w-3 h-3" />
                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <span>{blog.readTime}</span>
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
                      >
                        <span>Read More</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-hero-gradient text-white">
        <div className="container-custom scroll-animation">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter for the latest interior design tips, 
              trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-white text-secondary hover:bg-gray-100"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
