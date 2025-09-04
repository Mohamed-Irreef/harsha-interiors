import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CalendarIcon,
  UserIcon,
  ClockIcon,
  ArrowLeftIcon,
  ShareIcon,
  HeartIcon,
  BookmarkIcon,
  TagIcon
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  // Blog data (in a real app, this would come from an API)
  const blogData = useMemo(() => ({
    1: {
      id: 1,
      title: '10 Modern Kitchen Design Trends for 2025',
      excerpt: 'Discover the latest trends in modular kitchen design that will transform your cooking space into a modern masterpiece.',
      content: `
        <p>The kitchen has evolved from being just a cooking space to the heart of the modern home. As we step into 2025, kitchen design trends are embracing technology, sustainability, and personalization like never before. Here are the top 10 trends that will define modern kitchens this year.</p>

        <h3>1. Smart Technology Integration</h3>
        <p>Modern kitchens are becoming increasingly intelligent with smart appliances, voice-controlled systems, and IoT devices. From refrigerators that can suggest recipes based on available ingredients to smart faucets that respond to touch and voice commands, technology is making cooking more efficient and enjoyable.</p>

        <h3>2. Sustainable Materials</h3>
        <p>Eco-consciousness is driving the choice of sustainable materials like bamboo, reclaimed wood, and recycled glass. These materials not only reduce environmental impact but also add unique character and warmth to kitchen spaces.</p>

        <h3>3. Bold Color Palettes</h3>
        <p>While white kitchens remain timeless, 2025 is seeing a shift towards bold, dramatic colors. Deep navy blues, forest greens, and even black cabinets are gaining popularity, creating striking focal points and adding personality to the space.</p>

        <h3>4. Minimalist Island Designs</h3>
        <p>Kitchen islands are becoming more streamlined and functional, with clean lines and hidden storage solutions. The focus is on creating a clutter-free workspace that maximizes efficiency while maintaining aesthetic appeal.</p>

        <h3>5. Mixed Textures and Finishes</h3>
        <p>Combining different textures and finishes creates visual interest and depth. Think matte black hardware paired with glossy cabinets, or rough stone countertops contrasted with smooth metal surfaces.</p>

        <h3>6. Open Shelving Revival</h3>
        <p>Open shelving is making a comeback, allowing homeowners to display beautiful dishware and create a more open, airy feel. It's perfect for showcasing personal style while keeping everyday items easily accessible.</p>

        <h3>7. Integrated Appliances</h3>
        <p>Seamlessly integrated appliances that blend with cabinetry create a cohesive, uncluttered look. This trend emphasizes clean lines and continuous surfaces for a truly modern aesthetic.</p>

        <h3>8. Multi-Functional Spaces</h3>
        <p>Kitchens are designed to serve multiple purposes - cooking, dining, working, and socializing. Flexible layouts with movable elements accommodate different activities throughout the day.</p>

        <h3>9. Statement Lighting</h3>
        <p>Lighting is no longer just functional but serves as a design element. Oversized pendant lights, LED strips under cabinets, and artistic fixtures create ambiance and focal points.</p>

        <h3>10. Biophilic Design Elements</h3>
        <p>Incorporating natural elements like living walls, herb gardens, and natural light creates a connection with nature, promoting well-being and creating a more pleasant cooking environment.</p>

        <p>These trends reflect our changing lifestyle needs and aesthetic preferences. The modern kitchen of 2025 is not just about functionality but about creating spaces that inspire, connect, and reflect our values.</p>
      `,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Priya Sharma',
      date: '2025-01-15',
      category: 'Modular Kitchens',
      readTime: '5 min read',
      tags: ['Kitchen Design', 'Modern Trends', 'Technology', 'Sustainability']
    },
    2: {
      id: 2,
      title: 'Creating a Cozy Living Room on a Budget',
      excerpt: 'Learn how to transform your living room into a warm, inviting space without breaking the bank with these expert tips.',
      content: `
        <p>Creating a cozy and inviting living room doesn't have to cost a fortune. With strategic planning, creativity, and smart shopping, you can transform your space into a warm sanctuary that reflects your personality and style. Here's your complete guide to achieving a cozy living room on a budget.</p>

        <h3>Start with a Plan</h3>
        <p>Before making any purchases, assess your current space and create a clear vision. Take inventory of what you already have and identify what truly needs to be replaced versus what can be refreshed or repurposed.</p>

        <h3>Focus on Lighting</h3>
        <p>Good lighting is crucial for creating ambiance. Replace harsh overhead lighting with warm, layered lighting options. Use table lamps, floor lamps, and string lights to create a cozy atmosphere. Candles are also an inexpensive way to add warmth and fragrance.</p>

        <h3>Add Textiles for Warmth</h3>
        <p>Soft furnishings like throw pillows, blankets, and rugs instantly make a space feel cozier. Look for sales at discount stores, or consider DIY options like making your own pillow covers from fabric remnants.</p>

        <h3>Rearrange Your Furniture</h3>
        <p>Sometimes the most impactful change costs nothing at all. Experiment with different furniture arrangements to create better conversation areas and improve the flow of your space.</p>

        <h3>Bring in Plants</h3>
        <p>Plants add life, color, and freshness to any room. Start with low-maintenance options like pothos, snake plants, or succulents. You can often find affordable plants at grocery stores or propagate from cuttings from friends.</p>

        <h3>Create a Gallery Wall</h3>
        <p>Personal artwork and photos make a space feel lived-in and loved. Create a gallery wall using frames from thrift stores, or simply lean artwork against shelves for a more casual, layered look.</p>

        <h3>Shop Secondhand</h3>
        <p>Thrift stores, garage sales, and online marketplaces are goldmines for unique pieces at fraction of retail prices. Look for solid wood furniture that can be refinished or painted to match your style.</p>

        <p>Remember, creating a cozy living room is about layering textures, incorporating personal touches, and focusing on comfort rather than perfection. With patience and creativity, you can achieve the warm, inviting space of your dreams without overspending.</p>
      `,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Rajesh Kumar',
      date: '2025-01-10',
      category: 'Home Interiors',
      readTime: '7 min read',
      tags: ['Budget Decorating', 'Living Room', 'DIY', 'Cozy Design']
    },
    3: {
      id: 3,
      title: 'Bedroom Color Schemes That Promote Better Sleep',
      excerpt: 'The psychology of color in bedroom design and how the right palette can improve your sleep quality and overall well-being.',
      content: `
        <p>The colors in your bedroom can significantly impact your sleep quality and overall well-being. Understanding color psychology and choosing the right palette can transform your bedroom into a restful sanctuary that promotes better sleep and relaxation.</p>

        <h3>The Science Behind Color and Sleep</h3>
        <p>Research shows that certain colors can affect our circadian rhythms, stress levels, and ability to fall asleep. Cool, muted tones generally promote relaxation, while bright, vibrant colors can be stimulating and interfere with sleep.</p>

        <h3>Best Colors for Better Sleep</h3>
        
        <h4>Blue - The Ultimate Sleep Color</h4>
        <p>Blue is scientifically proven to be the best color for sleep. It lowers blood pressure and heart rate, creating a calming environment. Soft blues, powder blues, and periwinkle work particularly well in bedrooms.</p>

        <h4>Green - Nature's Calming Influence</h4>
        <p>Green represents nature and tranquility. Sage green, seafoam, and soft mint create a peaceful atmosphere that reduces eye strain and promotes relaxation.</p>

        <h4>Neutral Tones - Timeless Serenity</h4>
        <p>Warm neutrals like beige, cream, and soft gray create a cozy, cocoon-like feeling. These colors are versatile and work well with various decor styles while maintaining a calming atmosphere.</p>

        <h3>Colors to Avoid in the Bedroom</h3>
        
        <h4>Bright Red</h4>
        <p>Red is energizing and can increase heart rate and blood pressure, making it difficult to wind down for sleep.</p>

        <h4>Bright Orange</h4>
        <p>Like red, orange is highly stimulating and can interfere with the body's natural preparation for sleep.</p>

        <h4>Bright Yellow</h4>
        <p>While cheerful, bright yellow can be too energizing for a bedroom environment.</p>

        <h3>Creating Your Sleep-Promoting Color Scheme</h3>
        
        <h4>The 60-30-10 Rule</h4>
        <p>Use 60% of your main color (walls, large furniture), 30% of a secondary color (bedding, curtains), and 10% of an accent color (pillows, artwork).</p>

        <h4>Consider Natural Light</h4>
        <p>Test paint colors at different times of day, as natural light can significantly affect how colors appear in your space.</p>

        <h4>Personal Preference Matters</h4>
        <p>While science provides guidelines, your personal color preferences and associations also matter. Choose colors that make you feel calm and happy.</p>

        <h3>Additional Tips for a Sleep-Friendly Bedroom</h3>
        <p>Beyond color, consider blackout curtains, comfortable bedding, and maintaining a cool temperature to optimize your sleep environment.</p>

        <p>Creating the perfect sleep-promoting bedroom is about finding the right balance of color, comfort, and personal style. With the right color scheme, you can transform your bedroom into a peaceful retreat that supports better sleep and overall well-being.</p>
      `,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      author: 'Sneha Patel',
      date: '2025-01-05',
      category: 'Décor Tips',
      readTime: '6 min read',
      tags: ['Bedroom Design', 'Color Psychology', 'Sleep Quality', 'Wellness']
    }
  }), []);

  useEffect(() => {
    // Get the specific blog post
    const currentBlog = blogData[id];
    setBlog(currentBlog);

    // Get related blogs (excluding current one)
    const related = Object.values(blogData)
      .filter(b => b.id !== parseInt(id) && b.category === currentBlog?.category)
      .slice(0, 3);
    setRelatedBlogs(related);

    // Scroll animations
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
  }, [id, blogData]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-playfair font-bold text-secondary dark:text-white mb-4">
            Blog post not found
          </h2>
          <Link to="/blogs" className="btn-primary">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 left-8"
        >
          <Link
            to="/blogs"
            className="flex items-center space-x-2 text-white hover:text-primary transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Link>
        </motion.div>

        {/* Blog Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center space-x-6 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <UserIcon className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg dark:prose-invert max-w-none scroll-animation"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <TagIcon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-secondary dark:text-white">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80">
              {/* Share Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl mb-8 scroll-animation"
              >
                <h3 className="text-lg font-playfair font-semibold text-secondary dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="flex space-x-3">
                  <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <ShareIcon className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                    <HeartIcon className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    <BookmarkIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl scroll-animation"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-lg">
                      {blog.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary dark:text-white">
                      {blog.author}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Interior Design Expert
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Passionate about creating beautiful, functional spaces that enhance daily living.
                </p>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="section-padding bg-neutral dark:bg-gray-800">
          <div className="container-custom scroll-animation">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary dark:text-white mb-4">
                Related Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Continue reading similar articles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/blog/${relatedBlog.id}`}>
                    <article className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden card-hover group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                            {relatedBlog.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-playfair font-semibold text-secondary dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                          {relatedBlog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{relatedBlog.author}</span>
                          <span>{relatedBlog.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
