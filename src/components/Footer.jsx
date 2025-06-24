import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebook />, href: '#', label: 'Facebook' },
        { icon: <FaInstagram />, href: '#', label: 'Instagram' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-coffee-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold">Yatra Coffee</h3>
                        <p className="text-coffee-200">
                            Crafting moments of joy through exceptional coffee experiences in the heart of Chitwan.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-coffee-200 hover:text-white transition-colors"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#menu" className="text-coffee-200 hover:text-white transition-colors">
                                    Menu
                                </a>
                            </li>                            <li>
                                <a href="#about" className="text-coffee-200 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="text-coffee-200 hover:text-white transition-colors">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-coffee-200 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-coffee-200">
                            <li>Bharatpur-15, Chitwan</li>
                            <li>Nepal</li>
                            <li>Phone: +977 56-XXXXXX</li>
                            <li>Email: hello@yatracoffee.com.np</li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
                        <ul className="space-y-2 text-coffee-200">
                            <li>Sunday - Friday: 7:00 AM - 8:00 PM</li>
                            <li>Saturday: 8:00 AM - 8:00 PM</li>
                            <li>Public Holidays: 8:00 AM - 6:00 PM</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-coffee-800 mt-12 pt-8 text-center text-coffee-200">
                    <p>&copy; {new Date().getFullYear()} Yatra Coffee, Bharatpur, Nepal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 