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
    const [titleRef, titleInView] = useInView({ triggerOnce: true }); return (<section id="gallery" className="section-bg-light py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pattern-dots"></div>

        <div className="container relative z-10">
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }} className="text-center mb-20"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={titleInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="badge badge-primary mb-8 text-lg"
                >
                    <FaCamera className="text-xl" />
                    <span>Our Gallery</span>
                </motion.div>
                <h2 className="section-title text-center">Coffee
                    <span className="block gradient-text">Moments</span>
                </h2>
                <p className="section-subtitle text-center">
                    Capturing the essence of our coffee culture and the beautiful moments shared at Yatra Coffee Shop.
                    Every photo tells a story of passion, quality, and connection.
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
            >                    <div className="gradient-card text-center">
                    <h3 className="card-title mb-6">Share Your Coffee Moments</h3>
                    <p className="card-subtitle mb-8 max-w-3xl mx-auto">
                        Tag us on social media and share your beautiful coffee moments at Yatra Coffee Shop.
                        We love seeing how our coffee brings joy to your day!
                    </p>
                    <div className="flex items-center justify-center gap-6 flex-wrap">
                        <span className="text-coffee-600 font-semibold text-lg">#YatraCoffee</span>
                        <span className="text-coffee-600 font-semibold text-lg">#CoffeeLovers</span>
                        <span className="text-coffee-600 font-semibold text-lg">#ChitwanCoffee</span>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
    );
};

export default Gallery;
