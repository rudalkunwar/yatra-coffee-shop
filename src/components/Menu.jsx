import { motion } from 'framer-motion';
import { FaCoffee, FaCookie, FaBreadSlice, FaLeaf, FaHeart, FaStar } from 'react-icons/fa';

const menuItems = {
    coffee: [{
        name: "Classic Espresso",
        description: "Rich and bold, our signature espresso shot crafted from premium Nepali beans",
        price: "Rs. 120",
        icon: <FaCoffee className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Signature",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Himalayan Cappuccino",
        description: "Perfect balance of espresso, steamed milk, and foam with a touch of local spices",
        price: "Rs. 150",
        icon: <FaCoffee className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Local Favorite",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Pour Over Specialty",
        description: "Single-origin coffee from the hills of Ilam, slowly brewed to perfection",
        price: "Rs. 180",
        icon: <FaCoffee className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Premium",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Cold Brew Delight",
        description: "Smooth and refreshing, steeped for 24 hours with Ethiopian beans",
        price: "Rs. 200",
        icon: <FaCoffee className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Seasonal",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Nepali Heritage Coffee",
        description: "Locally sourced beans from organic farms in the Nepali hills",
        price: "Rs. 160",
        icon: <FaLeaf className="text-2xl text-emerald-600 dark:text-emerald-400" />,
        specialty: "Organic",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Yatra Special Latte",
        description: "Our house blend with steamed milk, honey, and a hint of cardamom",
        price: "Rs. 170",
        icon: <FaHeart className="text-2xl text-brand-500 dark:text-brand-400" />,
        specialty: "House Special",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=400"
    }
    ],
    pastries: [{
        name: "French Croissant",
        description: "Buttery, flaky, and perfectly golden - made fresh every morning",
        price: "Rs. 100",
        icon: <FaBreadSlice className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Fresh Daily",
        image: "https://images.unsplash.com/photo-1555507036-ab794f0ec0c4?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Artisan Chocolate Cookie",
        description: "Rich Belgian chocolate chunks in every bite, baked to perfection",
        price: "Rs. 80",
        icon: <FaCookie className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Bestseller",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Almond Danish Pastry",
        description: "Layered pastry with sweet almond filling and sliced almonds",
        price: "Rs. 120",
        icon: <FaBreadSlice className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Premium",
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Traditional Sel Roti",
        description: "Authentic Nepali sweet bread ring, crispy outside and soft inside",
        price: "Rs. 60",
        icon: <FaLeaf className="text-2xl text-emerald-600 dark:text-emerald-400" />,
        specialty: "Traditional",
        image: "https://images.unsplash.com/photo-1549398862-2509066d4fa9?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Cinnamon Roll",
        description: "Soft, sweet dough rolled with cinnamon and topped with glaze",
        price: "Rs. 110",
        icon: <FaStar className="text-2xl text-gold-500 dark:text-gold-400" />,
        specialty: "Popular",
        image: "https://images.unsplash.com/photo-1561022825-9b5fb01d8e95?ixlib=rb-4.0.3&w=400"
    },
    {
        name: "Blueberry Muffin",
        description: "Moist and fluffy muffin packed with fresh blueberries",
        price: "Rs. 90",
        icon: <FaBreadSlice className="text-2xl text-brand-600 dark:text-brand-400" />,
        specialty: "Healthy Choice",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&w=400"
    }
    ]
};

const MenuItem = ({ item, index }) => {
    const getSpecialtyColor = (specialty) => {
        switch (specialty) {
            case 'Signature': return 'bg-gradient-to-r from-brand-600 to-brand-700 text-white';
            case 'Premium': return 'bg-gradient-to-r from-gold-500 to-gold-600 text-white';
            case 'Local Favorite': return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white';
            case 'House Special': return 'bg-gradient-to-r from-brand-500 to-brand-600 text-white';
            case 'Organic': return 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white';
            case 'Traditional': return 'bg-gradient-to-r from-brand-600 to-brand-700 text-white';
            case 'Seasonal': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
            case 'Bestseller': return 'bg-gradient-to-r from-brand-500 to-brand-600 text-white';
            case 'Popular': return 'bg-gradient-to-r from-gold-500 to-gold-600 text-white';
            case 'Healthy Choice': return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white';
            case 'Fresh Daily': return 'bg-gradient-to-r from-brand-400 to-brand-500 text-white';
            default: return 'bg-brand-100 dark:bg-brand-800 text-brand-800 dark:text-brand-200';
        }
    };

    return (<motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="card relative group overflow-hidden"
    >
        {/* Background Image Overlay */}
        <div
            className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
            style={{ backgroundImage: `url(${item.image})` }}
        ></div>

        {/* Specialty Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getSpecialtyColor(item.specialty)}`}>
            {item.specialty}
        </div>            <div className="relative z-10">
            <div className="flex items-start gap-4">
                <div className="mt-1 icon-container icon-container-primary">
                    {item.icon}
                </div>
                <div className="flex-1">
                    <h3 className="card-title text-lg mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {item.name}
                    </h3>
                    <p className="card-subtitle text-sm mb-4 leading-relaxed">
                        {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold gradient-text bg-brand-50 dark:bg-brand-900/50 px-3 py-1 rounded-lg">
                            {item.price}
                        </p>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-gold-400 text-sm" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    );
};

const MenuCategory = ({ title, items }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
        >            <div className="text-center">
                <h3 className="card-title text-3xl flex items-center justify-center gap-3">
                    {title === "Coffee" ? (
                        <div className="icon-container icon-container-primary">
                            <FaCoffee className="text-brand-600 dark:text-brand-400 text-2xl" />
                        </div>
                    ) : (
                        <div className="icon-container icon-container-primary">
                            <FaBreadSlice className="text-brand-600 dark:text-brand-400 text-2xl" />
                        </div>
                    )}
                    {title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-brand-700 mx-auto rounded-full"></div>
            </div>
            <div className="grid gap-6">
                {items.map((item, index) => (
                    <MenuItem key={item.name} item={item} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const Menu = () => {
    return (
        <div className="space-y-16">
            {/* Menu Introduction */}            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto"
            >
                <p className="section-subtitle">
                    Each item on our menu is carefully crafted with premium ingredients and passionate attention to detail.
                    From our signature coffee blends sourced from the pristine hills of Nepal to our freshly baked pastries
                    made with traditional techniques, every bite and sip tells a story of quality and heritage.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <MenuCategory title="Coffee" items={menuItems.coffee} />
                <MenuCategory title="Pastries" items={menuItems.pastries} />
            </div>

            {/* Coffee Process Section */}            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="gradient-card mt-16"
            >
                <div className="text-center">
                    <h3 className="card-title">Our Coffee Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="icon-container icon-container-secondary mx-auto mb-4">
                                <FaLeaf className="text-white text-2xl" />
                            </div>
                            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Sourced</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Premium beans from sustainable farms</p>
                        </div>
                        <div className="text-center">
                            <div className="icon-container icon-container-primary mx-auto mb-4">
                                <FaCoffee className="text-white text-2xl" />
                            </div>
                            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Roasted</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Expertly roasted to perfection daily</p>
                        </div>
                        <div className="text-center">
                            <div className="icon-container icon-container-accent mx-auto mb-4">
                                <FaHeart className="text-white text-2xl" />
                            </div>
                            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Served</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Crafted with love and passion</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Menu; 