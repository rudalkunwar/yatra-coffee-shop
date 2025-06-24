import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCamera, FaHeart, FaInstagram } from 'react-icons/fa';

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&w=500",
        alt: "Perfect latte art",
        caption: "Artisan latte with love"
    },
    {
        src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&w=500",
        alt: "Coffee brewing process",
        caption: "Brewing perfection"
    },
    {
        src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&w=500",
        alt: "Cozy coffee shop atmosphere",
        caption: "Warm & welcoming"
    },
    {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&w=500",
        alt: "Coffee shop interior",
        caption: "Our comfortable space"
    },
    {
        src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&w=500",
        alt: "Fresh coffee beans",
        caption: "Premium coffee beans"
    },
    {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=500",
        alt: "Specialty coffee preparation",
        caption: "Crafted with passion"
    }
];

const GalleryItem = ({ image, index }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
        >
            <div className="aspect-square overflow-hidden">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-medium mb-2">{image.caption}</p>
                    <div className="flex items-center gap-2">
                        <FaHeart className="text-red-400" />
                        <FaInstagram className="text-pink-400" />
                        <FaCamera className="text-blue-400" />
                    </div>
                </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-2 right-2 w-8 h-8 bg-coffee-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaCamera className="text-white text-xs" />
            </div>
        </motion.div>
    );
};

const Gallery = () => {
    const [titleRef, titleInView] = useInView({ triggerOnce: true }); return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-cream via-coffee-50 to-cream relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${encodeURIComponent('8B4513')}' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={titleInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-coffee-600 text-white px-6 py-2 rounded-full mb-6"
                    >
                        <FaCamera />
                        <span className="font-medium">Our Gallery</span>
                    </motion.div>
                    <h2 className="section-title text-center">Coffee Moments</h2>
                    <p className="section-subtitle text-center">
                        Capturing the essence of our coffee culture and the beautiful moments shared at Yatra Coffee Shop
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryImages.map((image, index) => (
                        <GalleryItem key={index} image={image} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-coffee-600 to-coffee-700 text-white p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-serif font-bold mb-4">Share Your Coffee Moments</h3>
                        <p className="text-coffee-100 mb-6 max-w-2xl mx-auto">
                            Tag us on social media and share your beautiful coffee moments at Yatra Coffee Shop.
                            We love seeing how our coffee brings joy to your day!
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-coffee-200 font-medium">#YatraCoffee</span>
                            <span className="text-coffee-200 font-medium">#CoffeeLovers</span>
                            <span className="text-coffee-200 font-medium">#ChitwanCoffee</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
