import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaMapMarkerAlt, FaLeaf, FaHeart, FaStar, FaArrowDown, FaPlay, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true });

    return (
        <section className="relative md:h-[200vh] flex items-center justify-center overflow-hidden">
            {/* Ultra Modern Background */}
            <div className="absolute inset-0">
                {/* Optimized Background with Reduced Animation */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&w=1200')",
                        transform: 'scale(1.1)'
                    }}
                ></motion.div>

                {/* Simplified Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-brand-900/60 to-neutral-900/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>

                {/* Optimized Floating Particles - Reduced Count */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${4 + Math.random() * 4}px`,
                                height: `${4 + Math.random() * 4}px`,
                            }}
                            animate={{
                                y: [-40, 40, -40],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: Math.random() * 4,
                                ease: 'easeInOut'
                            }}
                        >
                            <div className="w-full h-full bg-gradient-to-br from-brand-300 to-brand-600 rounded-full blur-sm"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Simplified Coffee Steam Effects */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`steam-${i}`}
                        className="absolute"
                        style={{
                            left: `${20 + i * 20}%`,
                            bottom: `${15 + Math.random() * 15}%`,
                        }}
                        animate={{
                            y: [-100, -250],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: 'easeOut'
                        }}
                    >
                        <div className="w-3 h-24 bg-gradient-to-t from-brand-200/30 via-white/15 to-transparent rounded-full blur-md"></div>
                    </motion.div>
                ))}
            </div>            {/* Main Content Container */}
            <motion.div
                ref={heroRef}
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="container text-center z-10 relative"
            >
                {/* Top Section */}
                <div className="mb-16">
                    {/* Optimized Brand Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="badge badge-glass mb-8 shadow-brand-lg"
                    >
                        <FaCoffee className="text-2xl text-brand-300" />
                        <span className="font-medium text-lg">Premium Coffee Experience</span>
                        <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
                    </motion.div>

                    {/* Optimized Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-tight"
                    >
                        <span className="block text-white drop-shadow-2xl">Yatra</span>
                        <span className="block gradient-text-light drop-shadow-lg">Coffee Shop</span>
                    </motion.h1>

                    {/* Optimized Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                    >
                        Where every cup tells a story, and every moment becomes a memory
                        <br />
                        <span className="text-brand-300 font-medium">in the heart of Chitwan</span>
                    </motion.p>

                    {/* Optimized Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary shadow-brand-lg group"
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="flex items-center gap-3">
                                <FaCoffee className="text-xl" />
                                <span>Explore Our Menu</span>
                                <span className="text-xl">→</span>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-glass shadow-2xl group"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-xl" />
                                <span>Visit Us</span>
                            </div>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-12">
                    {/* Optimized Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-wrap justify-center items-center gap-8 text-white/80"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-gold-400 text-xl" />
                                ))}
                            </div>
                            <span className="font-medium">Rated #1 in Chitwan</span>
                        </div>
                        <div className="h-8 w-px bg-white/30"></div>
                        <div className="flex items-center gap-3">
                            <FaHeart className="text-brand-400 text-xl" />
                            <span className="font-medium">Loved by Coffee Enthusiasts</span>
                        </div>
                    </motion.div>

                    {/* Premium Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.7, ease: 'easeOut' }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: FaInstagram, color: 'hover:text-pink-400' },
                            { icon: FaFacebook, color: 'hover:text-blue-400' },
                            { icon: FaTwitter, color: 'hover:text-sky-400' }
                        ].map(({ icon: Icon, color }, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.2, y: -4 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-white/70 ${color} transition-all duration-300 p-4 rounded-xl glass shadow-brand`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.9 + i * 0.1 }}
                            >
                                <Icon className="text-2xl" />
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Enhanced Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={heroInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 2.1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white/60 text-sm mb-4 font-medium">Discover More</span>
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="cursor-pointer p-2 rounded-full glass"
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <FaArrowDown className="text-white/60 text-2xl hover:text-brand-300 transition-colors duration-300" />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Premium Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-900 to-transparent"></div>

            {/* Enhanced Floating Coffee Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(16)].map((_, i) => (
                    <motion.div
                        key={`floating-${i}`}
                        className="absolute opacity-15"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-35, 35, -35],
                            x: [-18, 18, -18],
                            rotate: [0, 360],
                            scale: [0.8, 1.4, 0.8],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: 'easeInOut'
                        }}
                    >
                        {i % 4 === 0 && <FaCoffee className="text-brand-300 text-5xl drop-shadow-lg" />}
                        {i % 4 === 1 && <FaLeaf className="text-emerald-400 text-4xl drop-shadow-lg" />}
                        {i % 4 === 2 && <FaHeart className="text-brand-400 text-3xl drop-shadow-lg" />}
                        {i % 4 === 3 && <FaStar className="text-gold-300 text-4xl drop-shadow-lg" />}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
