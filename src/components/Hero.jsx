import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaMapMarkerAlt, FaLeaf, FaHeart, FaStar, FaArrowDown, FaPlay, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    const [heroRef, heroInView] = useInView({ triggerOnce: true });

    return (
        <section className="relative h-[200vh] flex items-center justify-center overflow-hidden">
            {/* Ultra Modern Background */}
            <div className="absolute inset-0">
                {/* Primary Background with Parallax Effect */}
                <motion.div
                    className="absolute inset-0 bg-cover bg-center scale-110"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&w=2400')"
                    }}
                    animate={{
                        scale: [1.1, 1.15, 1.1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                ></motion.div>

                {/* Modern Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-coffee-900/50 to-coffee-800/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

                {/* Animated Mesh Background */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                        background: [
                            'radial-gradient(circle at 10% 20%, rgba(139, 69, 19, 0.3) 0%, transparent 70%), radial-gradient(circle at 90% 80%, rgba(210, 105, 30, 0.2) 0%, transparent 70%)',
                            'radial-gradient(circle at 80% 30%, rgba(160, 82, 45, 0.3) 0%, transparent 70%), radial-gradient(circle at 20% 70%, rgba(139, 69, 19, 0.2) 0%, transparent 70%)',
                            'radial-gradient(circle at 50% 90%, rgba(210, 105, 30, 0.3) 0%, transparent 70%), radial-gradient(circle at 50% 10%, rgba(139, 69, 19, 0.2) 0%, transparent 70%)',
                            'radial-gradient(circle at 10% 20%, rgba(139, 69, 19, 0.3) 0%, transparent 70%), radial-gradient(circle at 90% 80%, rgba(210, 105, 30, 0.2) 0%, transparent 70%)'
                        ]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                ></motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={`particle-${i}`}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                width: `${2 + Math.random() * 4}px`,
                                height: `${2 + Math.random() * 4}px`,
                            }}
                            animate={{
                                y: [-50, 50, -50],
                                x: [-20, 20, -20],
                                opacity: [0.1, 0.8, 0.1],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 6,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: 'easeInOut'
                            }}
                        >
                            <div className="w-full h-full bg-gradient-to-br from-coffee-300 to-coffee-500 rounded-full blur-sm"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Coffee Steam Effects */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`steam-${i}`}
                        className="absolute"
                        style={{
                            left: `${15 + i * 15}%`,
                            bottom: `${10 + Math.random() * 20}%`,
                        }}
                        animate={{
                            y: [-150, -400],
                            opacity: [0, 0.6, 0],
                            scale: [1, 2, 3],
                            rotate: [0, 45, 90],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: 'easeOut'
                        }}
                    >
                        <div className="w-3 h-32 bg-gradient-to-t from-white/30 to-transparent rounded-full blur-md"></div>
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
                    {/* Brand Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-full mb-8 shadow-2xl"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        >
                            <FaCoffee className="text-2xl text-coffee-300" />
                        </motion.div>
                        <span className="font-medium text-lg">Premium Coffee Experience</span>
                        <div className="w-2 h-2 bg-coffee-400 rounded-full animate-pulse"></div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="text-xl md:text-2xl lg:text-4xl font-serif font-bold mb-8 leading-tight"
                    >
                        <span className="block text-white drop-shadow-2xl">Yatra</span>
                        <span className="block bg-gradient-to-r from-coffee-300 via-coffee-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                            Coffee Shop
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                        className="text-xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                    >
                        Where every cup tells a story, and every moment becomes a memory
                        <br />
                        <span className="text-coffee-300 font-medium">in the heart of Chitwan</span>
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-500 hover:to-coffee-600 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl backdrop-blur-sm border border-coffee-500/30 transition-all duration-300"
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="flex items-center gap-3">
                                <FaCoffee className="text-xl group-hover:animate-bounce" />
                                <span>Explore Our Menu</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.div>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white/30 px-10 py-5 rounded-full font-semibold text-lg shadow-2xl transition-all duration-300"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-xl group-hover:animate-pulse" />
                                <span>Visit Us</span>
                            </div>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="space-y-12">
                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.1, ease: 'easeOut' }}
                        className="flex flex-wrap justify-center items-center gap-8 text-white/80"
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.3 + i * 0.1 }}
                                    >
                                        <FaStar className="text-yellow-400 text-xl" />
                                    </motion.div>
                                ))}
                            </div>
                            <span className="font-medium">Rated #1 in Chitwan</span>
                        </div>
                        <div className="h-6 w-px bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <FaHeart className="text-red-400 text-xl animate-pulse" />
                            <span className="font-medium">Loved by Coffee Enthusiasts</span>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={heroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 1.3, ease: 'easeOut' }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: FaInstagram, color: 'hover:text-pink-400' },
                            { icon: FaFacebook, color: 'hover:text-blue-400' },
                            { icon: FaTwitter, color: 'hover:text-sky-400' }
                        ].map(({ icon: Icon, color }, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-white/70 ${color} transition-all duration-300 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg`}
                            >
                                <Icon className="text-2xl" />
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={heroInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white/60 text-sm mb-4 font-medium">Discover More</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="cursor-pointer"
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <FaArrowDown className="text-white/60 text-2xl hover:text-coffee-300 transition-colors duration-300" />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-coffee-900 to-transparent"></div>

            {/* Floating Coffee Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`floating-${i}`}
                        className="absolute opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-30, 30, -30],
                            x: [-15, 15, -15],
                            rotate: [0, 360],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                            ease: 'easeInOut'
                        }}
                    >
                        {i % 4 === 0 && <FaCoffee className="text-coffee-300 text-4xl" />}
                        {i % 4 === 1 && <FaLeaf className="text-green-400 text-3xl" />}
                        {i % 4 === 2 && <FaHeart className="text-red-300 text-2xl" />}
                        {i % 4 === 3 && <FaStar className="text-yellow-300 text-3xl" />}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Hero;
