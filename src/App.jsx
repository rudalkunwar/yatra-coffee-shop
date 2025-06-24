import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;