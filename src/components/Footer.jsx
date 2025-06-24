import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCoffee, FaLeaf, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebook />, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
        { icon: <FaInstagram />, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
    ];

    const quickLinks = [
        { name: 'Our Menu', href: '#menu' },
        { name: 'About Us', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, text: 'Bharatpur-15, Chitwan, Nepal' },
        { icon: <FaPhone />, text: '+977 56-XXXXXX' },
        { icon: <FaEnvelope />, text: 'hello@yatracoffee.com.np' },
    ]; return (
        <footer className="relative section-bg-dark overflow-hidden">
            {/* Background Pattern with Brand Colors */}
            <div className="absolute inset-0 pattern-dots opacity-30"></div>

            {/* Floating Coffee Beans with Brand Colors */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-10, 10, -10],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <FaCoffee className="text-brand-400 text-4xl" />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-brand-lg">
                                    <FaCoffee className="text-white text-2xl" />
                                </div>
                                <motion.div
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <FaLeaf className="text-white text-xs" />
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif font-bold gradient-text-light">
                                    Yatra Coffee
                                </h3>
                                <p className="text-neutral-300 font-medium">Premium Coffee Experience</p>
                            </div>
                        </div>                        <p className="text-neutral-200 leading-relaxed max-w-md">
                            Crafting moments of joy through exceptional coffee experiences in the heart of Chitwan.
                            Every cup tells a story of passion, quality, and the rich heritage of Nepali hospitality.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-300 font-medium">Follow us:</span>
                            <div className="flex gap-3">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        className={`w-10 h-10 glass rounded-full flex items-center justify-center text-neutral-200 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${link.color}`}
                                        aria-label={link.label}
                                        whileHover={{ y: -2 }}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                            <div className="icon-container icon-container-primary">
                                <FaHeart className="text-white text-sm" />
                            </div>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-neutral-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                                    >
                                        <span className="group-hover:text-brand-300">→</span> {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info & Hours */}                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <h4 className="text-xl font-semibold flex items-center gap-2">
                            <div className="icon-container icon-container-accent">
                                <FaMapMarkerAlt className="text-white text-sm" />
                            </div>
                            Get in Touch
                        </h4>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-3 text-neutral-200"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
                                        {info.icon}
                                    </div>
                                    <span className="text-sm">{info.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Opening Hours */}
                        <div className="glass-card">
                            <div className="flex items-center gap-2 mb-3">
                                <FaClock className="text-brand-300" />
                                <h5 className="font-semibold text-neutral-100">Opening Hours</h5>
                            </div>
                            <div className="space-y-1 text-sm text-neutral-200">
                                <div className="flex justify-between">
                                    <span>Sunday - Friday</span>
                                    <span>7:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>8:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Public Holidays</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="border-t border-neutral-700/50 mt-16 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-300 text-sm">
                            &copy; {new Date().getFullYear()} Yatra Coffee, Bharatpur, Nepal. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-neutral-300 text-sm">
                            <span>Made with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <FaHeart className="text-brand-400" />
                            </motion.div>
                            <span>and premium coffee</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;