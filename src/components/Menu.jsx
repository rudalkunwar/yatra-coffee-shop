import { motion } from 'framer-motion';
import { FaCoffee, FaCookie, FaBreadSlice } from 'react-icons/fa';

const menuItems = {
    coffee: [
        {
            name: "Classic Espresso",
            description: "Rich and bold, our signature espresso shot",
            price: "Rs. 120",
            icon: <FaCoffee className="text-2xl text-coffee-600" />
        },
        {
            name: "Cappuccino",
            description: "Perfect balance of espresso, steamed milk, and foam",
            price: "Rs. 150",
            icon: <FaCoffee className="text-2xl text-coffee-600" />
        },
        {
            name: "Pour Over",
            description: "Single-origin coffee brewed to perfection",
            price: "Rs. 180",
            icon: <FaCoffee className="text-2xl text-coffee-600" />
        },
        {
            name: "Cold Brew",
            description: "Smooth and refreshing, steeped for 24 hours",
            price: "Rs. 200",
            icon: <FaCoffee className="text-2xl text-coffee-600" />
        },
        {
            name: "Nepali Coffee",
            description: "Locally sourced beans from the hills of Nepal",
            price: "Rs. 160",
            icon: <FaCoffee className="text-2xl text-coffee-600" />
        }
    ],
    pastries: [
        {
            name: "Croissant",
            description: "Buttery, flaky, and perfectly golden",
            price: "Rs. 100",
            icon: <FaBreadSlice className="text-2xl text-coffee-600" />
        },
        {
            name: "Chocolate Cookie",
            description: "Rich chocolate chunks in every bite",
            price: "Rs. 80",
            icon: <FaCookie className="text-2xl text-coffee-600" />
        },
        {
            name: "Almond Danish",
            description: "Layered pastry with almond filling",
            price: "Rs. 120",
            icon: <FaBreadSlice className="text-2xl text-coffee-600" />
        },
        {
            name: "Sel Roti",
            description: "Traditional Nepali sweet bread",
            price: "Rs. 60",
            icon: <FaBreadSlice className="text-2xl text-coffee-600" />
        }
    ]
};

const MenuItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-coffee-100"
        >
            <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-coffee-50 rounded-full">{item.icon}</div>
                <div>
                    <h3 className="text-xl font-semibold text-coffee-800 mb-2">{item.name}</h3>
                    <p className="text-coffee-600 mb-3">{item.description}</p>
                    <p className="text-coffee-700 font-medium">{item.price}</p>
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
            className="space-y-6"
        >
            <h3 className="text-2xl font-serif font-bold text-coffee-800 mb-6 flex items-center gap-2">
                {title === "Coffee" ? <FaCoffee className="text-coffee-600" /> : <FaBreadSlice className="text-coffee-600" />}
                {title}
            </h3>
            <div className="grid gap-4">
                {items.map((item, index) => (
                    <MenuItem key={item.name} item={item} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const Menu = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MenuCategory title="Coffee" items={menuItems.coffee} />
            <MenuCategory title="Pastries" items={menuItems.pastries} />
        </div>
    );
};

export default Menu; 