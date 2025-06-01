import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [menuRef, menuInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
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
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Yatra Coffee Shop
          </h1>
          <p className="text-xl md:text-2xl text-coffee-200 mb-8 max-w-2xl mx-auto">
            Where every cup tells a story, and every moment becomes a memory in the heart of Chitwan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Menu
            </button>
            <button
              className="btn bg-white text-coffee-800 hover:bg-coffee-100"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Visit Us
            </button>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0"></div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-cream">
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 20 }}
          animate={menuInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h2 className="section-title text-center">Our Menu</h2>
          <p className="section-subtitle text-center">
            Discover our carefully crafted selection of artisanal coffees and delicious treats
          </p>
          <Menu />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-coffee-50">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-lg text-coffee-700 mb-6">
                At Yatra Coffee Shop in Bharatpur, we believe that coffee is more than just a beverage—it's a journey.
                Our beans are carefully selected from sustainable farms across Nepal and around the world, roasted to perfection,
                and brewed with precision to create the perfect cup every time.
              </p>
              <p className="text-lg text-coffee-700 mb-8">
                We're passionate about creating a warm, welcoming space where coffee lovers can gather,
                connect, and create lasting memories over exceptional coffee and delicious treats in the heart of Chitwan.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Coffee shop interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-coffee-800 text-white">
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h2 className="section-title text-center text-white">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center bg-coffee-700/50 p-6 rounded-lg">
              <FaMapMarkerAlt className="text-3xl mx-auto mb-4 text-coffee-300" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-coffee-200">Bharatpur-15, Chitwan<br />Nepal</p>
            </div>
            <div className="text-center bg-coffee-700/50 p-6 rounded-lg">
              <FaPhone className="text-3xl mx-auto mb-4 text-coffee-300" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-coffee-200">+977 56-XXXXXX</p>
            </div>
            <div className="text-center bg-coffee-700/50 p-6 rounded-lg">
              <FaEnvelope className="text-3xl mx-auto mb-4 text-coffee-300" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-coffee-200">hello@yatracoffee.com.np</p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default App;