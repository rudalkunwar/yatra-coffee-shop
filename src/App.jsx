import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLeaf, FaHeart, FaAward, FaClock } from 'react-icons/fa';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [menuRef, menuInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container text-center z-10 pt-20"
        >          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            Yatra Coffee Shop
          </h1>
          <p className="text-xl md:text-2xl text-coffee-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Where every cup tells a story, and every moment becomes a memory in the heart of Chitwan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn btn-primary transform hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaCoffee className="inline mr-2" />
              Explore Our Menu
            </button>
            <button
              className="btn bg-white text-coffee-800 hover:bg-coffee-100 transform hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FaMapMarkerAlt className="inline mr-2" />
              Visit Us
            </button>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>

        {/* Floating Coffee Beans Animation */}
        <div className="absolute inset-0 overflow-hidden z-5">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <FaCoffee className="text-coffee-300 text-2xl opacity-30" />
            </motion.div>
          ))}
        </div>
      </section>      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-cream via-coffee-50 to-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('8B4513')}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 20 }}
          animate={menuInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={menuInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-coffee-600 text-white px-6 py-2 rounded-full mb-6"
            >
              <FaCoffee />
              <span className="font-medium">Our Specialties</span>
            </motion.div>
            <h2 className="section-title text-center">Our Artisan Menu</h2>
            <p className="section-subtitle text-center">
              Discover our carefully crafted selection of premium coffees and handmade treats
            </p>
          </div>
          <Menu />
        </motion.div>
      </section>      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-coffee-50 to-coffee-100 relative">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-coffee-600 text-white px-6 py-2 rounded-full mb-6"
              >
                <FaHeart />
                <span className="font-medium">Our Story</span>
              </motion.div>
              <h2 className="section-title">Brewing Excellence Since Day One</h2>
              <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
                At Yatra Coffee Shop in Bharatpur, we believe that coffee is more than just a beverage—it's a journey.
                Our beans are carefully selected from sustainable farms across Nepal and around the world, roasted to perfection,
                and brewed with precision to create the perfect cup every time.
              </p>
              <p className="text-lg text-coffee-700 mb-8 leading-relaxed">
                We're passionate about creating a warm, welcoming space where coffee lovers can gather,
                connect, and create lasting memories over exceptional coffee and delicious treats in the heart of Chitwan.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaAward className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-coffee-800">5+</p>
                  <p className="text-coffee-600 text-sm">Years Serving</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaCoffee className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-coffee-800">12</p>
                  <p className="text-coffee-600 text-sm">Coffee Varieties</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaLeaf className="text-white" />
                  </div>
                  <p className="text-2xl font-bold text-coffee-800">100%</p>
                  <p className="text-coffee-600 text-sm">Organic Beans</p>
                </div>
              </div>

              <button className="btn btn-primary transform hover:scale-105 transition-transform duration-300">
                <FaHeart className="inline mr-2" />
                Our Heritage
              </button>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Coffee shop interior"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg border border-coffee-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center">
                    <FaClock className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-coffee-800">Open Daily</p>
                    <p className="text-coffee-600 text-sm">7:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>        </motion.div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={contactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white text-coffee-800 px-6 py-2 rounded-full mb-6"
            >
              <FaMapMarkerAlt />
              <span className="font-medium">Find Us</span>
            </motion.div>
            <h2 className="section-title text-center text-white">Visit Our Coffee Haven</h2>
            <p className="section-subtitle text-center text-coffee-200">
              Experience the warmth of Nepali hospitality and the finest coffee in Chitwan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-gradient-to-br from-coffee-700/50 to-coffee-800/50 backdrop-blur-sm p-8 rounded-2xl border border-coffee-600/30 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-3xl text-coffee-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
              <p className="text-coffee-200 leading-relaxed">
                Bharatpur-15, Chitwan<br />
                Nepal<br />
                <span className="text-coffee-300 text-sm mt-2 block">Heart of the city, easy to find</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center bg-gradient-to-br from-coffee-700/50 to-coffee-800/50 backdrop-blur-sm p-8 rounded-2xl border border-coffee-600/30 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="text-3xl text-coffee-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
              <p className="text-coffee-200 leading-relaxed">
                +977 56-XXXXXX<br />
                <span className="text-coffee-300 text-sm mt-2 block">Available during business hours</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-gradient-to-br from-coffee-700/50 to-coffee-800/50 backdrop-blur-sm p-8 rounded-2xl border border-coffee-600/30 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-3xl text-coffee-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
              <p className="text-coffee-200 leading-relaxed">
                hello@yatracoffee.com.np<br />
                <span className="text-coffee-300 text-sm mt-2 block">We'd love to hear from you</span>
              </p>
            </motion.div>
          </div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-coffee-700/30 to-coffee-800/30 backdrop-blur-sm p-8 rounded-2xl border border-coffee-600/30 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FaClock className="text-coffee-300 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold">Opening Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-coffee-200">
              <div>
                <p className="font-semibold text-white mb-2">Sunday - Friday</p>
                <p>7:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Saturday</p>
                <p>8:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Public Holidays</p>
                <p>8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default App;