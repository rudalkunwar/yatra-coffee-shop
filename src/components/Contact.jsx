import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCoffee, FaLeaf } from 'react-icons/fa';

const Contact = () => {
    const [contactRef, contactInView] = useInView({ triggerOnce: true });

    return (<section id="contact" className="section-bg-light py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pattern-coffee"></div>

        {/* Floating Coffee Elements */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute opacity-10"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [-15, 15, -15],
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: Math.random() * 2,
                    }}
                >                    {i % 2 === 0 ? (
                    <FaCoffee className="text-brand-600 dark:text-brand-400 text-3xl" />
                ) : (
                    <FaLeaf className="text-emerald-600 dark:text-emerald-400 text-2xl" />
                )}
                </motion.div>
            ))}
        </div>            <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="container relative z-10"
        >                <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={contactInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="badge badge-primary mb-8 text-lg"
                >
                    <FaMapMarkerAlt className="text-xl" />
                    <span>Find Us</span>
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                </motion.div>
                <h2 className="section-title text-center">Visit Our Coffee
                    <span className="block gradient-text">Haven</span>
                </h2>
                <p className="section-subtitle text-center">
                    Experience the warmth of Nepali hospitality and the finest coffee in Chitwan.
                    Come discover your new favorite spot in the heart of the city.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }} className="card group"
                >
                    <div className="icon-container icon-container-primary mx-auto mb-6">
                        <FaMapMarkerAlt className="text-2xl" />
                    </div>
                    <h3 className="card-title text-center">Our Location</h3>                    <div className="card-subtitle text-center">
                        <p className="mb-2">Bharatpur-15, Chitwan<br />Nepal</p>
                        <span className="text-brand-500 dark:text-brand-400 text-sm font-medium block">Heart of the city, easy to find</span>
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <button className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 text-sm font-medium transition-colors">
                            Get Directions →
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }} className="card group"
                >
                    <div className="icon-container icon-container-secondary mx-auto mb-6">
                        <FaPhone className="text-2xl" />
                    </div>
                    <h3 className="card-title text-center">Call Us</h3>                    <div className="card-subtitle text-center">
                        <p className="mb-2">
                            <a href="tel:+97756000000" className="hover:text-brand-800 dark:hover:text-brand-300 transition-colors">
                                +977 56-XXXXXX
                            </a>
                        </p>
                        <span className="text-brand-500 dark:text-brand-400 text-sm font-medium block">Available during business hours</span>
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <button className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 text-sm font-medium transition-colors">
                            Call Now →
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }} className="card group"
                >
                    <div className="icon-container icon-container-accent mx-auto mb-6">
                        <FaEnvelope className="text-2xl" />
                    </div>
                    <h3 className="card-title text-center">Email Us</h3>                    <div className="card-subtitle text-center">
                        <p className="mb-2">
                            <a href="mailto:hello@yatracoffee.com.np" className="hover:text-brand-800 dark:hover:text-brand-300 transition-colors">
                                hello@yatracoffee.com.np
                            </a>
                        </p>
                        <span className="text-brand-500 dark:text-brand-400 text-sm font-medium block">We'd love to hear from you</span>
                    </div>
                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <button className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 text-sm font-medium transition-colors">
                            Send Email →
                        </button>
                    </div>
                </motion.div>
            </div>                {/* Opening Hours */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={contactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }} className="gradient-card text-center"
            >                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="icon-container bg-gradient-to-br from-brand-500 to-brand-700">
                        <FaClock className="text-white text-2xl" />
                    </div>
                    <h3 className="card-title text-4xl">Opening Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutral-600 dark:text-neutral-400">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={contactInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="bg-coffee-50 p-6 rounded-xl border border-coffee-100"
                    >
                        <div className="w-10 h-10 bg-coffee-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FaCoffee className="text-white text-sm" />
                        </div>
                        <p className="font-bold text-coffee-800 mb-2">Sunday - Friday</p>
                        <p className="text-lg font-semibold text-coffee-700">7:00 AM - 8:00 PM</p>
                        <p className="text-sm text-coffee-500 mt-2">Peak coffee hours</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={contactInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-green-50 p-6 rounded-xl border border-green-100"
                    >
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FaLeaf className="text-white text-sm" />
                        </div>
                        <p className="font-bold text-coffee-800 mb-2">Saturday</p>
                        <p className="text-lg font-semibold text-coffee-700">8:00 AM - 8:00 PM</p>
                        <p className="text-sm text-coffee-500 mt-2">Weekend vibes</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={contactInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="bg-orange-50 p-6 rounded-xl border border-orange-100"
                    >
                        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FaClock className="text-white text-sm" />
                        </div>
                        <p className="font-bold text-coffee-800 mb-2">Public Holidays</p>
                        <p className="text-lg font-semibold text-coffee-700">8:00 AM - 6:00 PM</p>
                        <p className="text-sm text-coffee-500 mt-2">Holiday schedule</p>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={contactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="mt-8 pt-6 border-t border-coffee-200"
                >
                    <p className="text-coffee-600 mb-4">Can't wait to visit us?</p>                        <button
                        className="btn btn-primary text-lg"
                        onClick={() => window.open('https://maps.app.goo.gl/dYgBt5i2z8VkJe696', '_blank')}
                    >
                        <FaMapMarkerAlt className="mr-2" />
                        Find Us on Map
                    </button></motion.div>
            </motion.div>
        </motion.div>
    </section>);
};

export default Contact;
