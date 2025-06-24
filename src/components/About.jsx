import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaHeart, FaAward, FaCoffee, FaClock, FaStar, FaUsers, FaShieldAlt } from 'react-icons/fa';

const About = () => {
    const [aboutRef, aboutInView] = useInView({ triggerOnce: true });

    const stats = [{
        icon: FaAward,
        number: "5+",
        label: "Years Serving",
        gradient: "from-brand-500 to-brand-700",
    },
    {
        icon: FaCoffee,
        number: "15+",
        label: "Coffee Varieties",
        gradient: "from-gold-500 to-gold-700",
    },
    {
        icon: FaLeaf,
        number: "100%",
        label: "Organic Beans",
        gradient: "from-emerald-500 to-emerald-700",
    },
    {
        icon: FaUsers,
        number: "1000+",
        label: "Happy Customers",
        gradient: "from-blue-500 to-blue-700",
    }
    ];

    return (
        <section id="about" className="section-bg-medium py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pattern-dots"></div>

            {/* Floating Coffee Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-8"
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
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 3,
                        }}
                    >                        {i % 2 === 0 ? (
                        <FaCoffee className="text-brand-300 dark:text-brand-400 text-3xl" />
                    ) : (
                        <FaLeaf className="text-emerald-300 dark:text-emerald-400 text-2xl" />
                    )}
                    </motion.div>
                ))}
            </div>

            <motion.div
                ref={aboutRef}
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="container relative z-10"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="badge badge-primary mb-8 text-lg"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaHeart className="text-xl" />
                            </motion.div>
                            <span>Our Story</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="section-title mb-8"
                        >
                            Brewing Excellence
                            <span className="block gradient-text">Since Day One</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="space-y-6 mb-10"
                        >
                            <p className="text-xl text-coffee-700 leading-relaxed font-light">
                                At Yatra Coffee Shop in Bharatpur, we believe that coffee is more than just a beverage—it's a journey of discovery, connection, and passion.
                            </p>
                            <p className="text-lg text-coffee-600 leading-relaxed">
                                Our beans are carefully selected from sustainable farms across Nepal and around the world, roasted to perfection with artisanal techniques, and brewed with precision to create the perfect cup every time.
                            </p>                            <p className="section-subtitle text-left">
                                We're passionate about creating a warm, welcoming space where coffee lovers can gather, connect, and create lasting memories over exceptional coffee and delicious treats in the heart of Chitwan.
                            </p>
                        </motion.div>

                        {/* Feature Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="grid grid-cols-2 gap-4 mb-10"
                        >
                            {[
                                { icon: FaShieldAlt, text: "Premium Quality" },
                                { icon: FaLeaf, text: "Sustainable Sourcing" },
                                { icon: FaHeart, text: "Made with Love" },
                                { icon: FaStar, text: "Award Winning" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                                    className="card flex items-center gap-3 p-4"
                                >
                                    <div className="icon-container icon-container-primary">
                                        <item.icon className="text-white text-sm" />
                                    </div>
                                    <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.0 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                        >
                            {stats.map((stat, index) => (<motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                                className="card text-center p-6 hover:shadow-brand-lg transition-all duration-300"
                            >
                                <div className={`icon-container bg-gradient-to-br ${stat.gradient} mx-auto mb-3`}>
                                    <stat.icon className="text-white text-lg" />
                                </div>
                                <p className="text-3xl font-bold gradient-text mb-1">{stat.number}</p>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">{stat.label}</p>
                            </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 1.2 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <FaHeart className="mr-2" />
                            Visit Our Coffee Haven
                        </motion.button>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Coffee shop interior showcasing warm ambiance"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute -bottom-8 -left-8 glass-card"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-2xl flex items-center justify-center shadow-lg">
                                    <FaClock className="text-white text-2xl" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">Open Daily</p>
                                    <p className="text-white/80 text-sm">7:00 AM - 8:00 PM</p>
                                    <p className="text-coffee-300 text-xs font-medium mt-1">Always Fresh Coffee</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 1.0 }}
                            className="absolute -top-8 -right-8 glass-card"
                        >
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                    <FaLeaf className="text-white text-lg" />
                                </div>
                                <p className="font-bold text-white">100% Organic</p>
                                <p className="text-white/80 text-sm">Sustainably Sourced</p>                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
