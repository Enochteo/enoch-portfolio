import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Profile />
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:bg-cyan-600 transition z-50"
        title="Back to top"
      >
        ⬆
      </button>
    </motion.div>
  );
}

export default App;
