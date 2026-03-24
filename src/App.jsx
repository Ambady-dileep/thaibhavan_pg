import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ScrollProgress, BackToTop } from './components/NavFeatures';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <ScrollProgress />
      <BackToTop />
      <Nav />
      <main className="flex-grow">
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
