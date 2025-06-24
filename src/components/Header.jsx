import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Coffee, MapPin, Sun, Moon } from 'lucide-react';
import { FaCoffee, FaLeaf } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg shadow-lg border-b border-neutral-200 dark:border-neutral-700'
            : 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center shadow-lg">
                                <FaCoffee className="text-white text-xl" />
                            </div>
                            <motion.div
                                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaLeaf className="text-white text-xs" />
                            </motion.div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-serif font-bold gradient-text">
                                Yatra Coffee
                            </h1>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Premium Coffee Experience</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4">
                        <div className="flex items-center space-x-1 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-full p-1 border border-neutral-200 dark:border-neutral-700">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 rounded-full font-medium text-sm group"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {item.name}
                                    <div className="absolute inset-0 bg-white dark:bg-neutral-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm -z-10"></div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {theme === 'light' ? (
                                <Moon size={18} />
                            ) : (
                                <Sun size={18} />
                            )}
                        </motion.button>

                        <motion.button
                            className="btn btn-primary"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <MapPin size={16} className="mr-2" />
                            Visit Us
                        </motion.button>
                    </nav>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {theme === 'light' ? (
                                <Moon size={18} />
                            ) : (
                                <Sun size={18} />
                            )}
                        </motion.button>

                        <motion.button
                            className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg"
                    >
                        <nav className="flex flex-col space-y-2 py-6">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className="text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors py-3 px-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            <motion.button
                                className="btn btn-primary mt-4 justify-center"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <MapPin size={16} className="mr-2" />
                                Visit Us
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;