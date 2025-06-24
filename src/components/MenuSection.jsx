import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCoffee, FaLeaf, FaStar } from 'react-icons/fa';
import Menu from './Menu';

const MenuSection = () => {
    const [menuRef, menuInView] = useInView({ triggerOnce: true });

    return (
        <section id="menu" className="section-bg-light py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pattern-coffee"></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [0, 360],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: 'easeInOut'
                        }}
                    >                        {i % 3 === 0 && <FaCoffee className="text-brand-600 dark:text-brand-400 text-4xl" />}
                        {i % 3 === 1 && <FaLeaf className="text-emerald-600 dark:text-emerald-400 text-3xl" />}
                        {i % 3 === 2 && <FaStar className="text-gold-500 dark:text-gold-400 text-2xl" />}
                    </motion.div>
                ))}
            </div>

            <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: 30 }}
                animate={menuInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="container relative z-10"
            >
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={menuInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="badge badge-primary mb-8 text-lg"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        >
                            <FaCoffee className="text-xl" />
                        </motion.div>
                        <span>Our Specialties</span>
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={menuInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        className="section-title text-center"
                    >
                        Our Artisan
                        <span className="block gradient-text">Coffee Menu</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={menuInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                        className="section-subtitle text-center"
                    >
                        Discover our carefully crafted selection of premium coffees, handmade treats,
                        and specialty beverages made with love and the finest ingredients
                    </motion.p>

                    {/* Feature Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={menuInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                        className="flex flex-wrap justify-center gap-6 mb-12"
                    >                        {[
                        { icon: FaCoffee, text: "Premium Beans", gradient: "from-brand-500 to-brand-700" },
                        { icon: FaLeaf, text: "100% Organic", gradient: "from-emerald-500 to-emerald-700" },
                        { icon: FaStar, text: "Award Winning", gradient: "from-gold-500 to-gold-700" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={menuInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                            className="card flex items-center gap-3 px-6 py-3"
                        >
                            <div className={`icon-container bg-gradient-to-br ${item.gradient}`}>
                                <item.icon className="text-white text-sm" />
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>

                <Menu />
            </motion.div>
        </section>
    );
};

export default MenuSection;
