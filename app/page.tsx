import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Research from './components/Research';
import Prototype from './components/Prototype';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Technology />
        <Research />
        <Prototype />
        <Impact />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
