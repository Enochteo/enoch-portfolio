import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-white text-center px-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        👋 Hey, I'm <span className="text-cyan-400">Enoch</span>
      </h1>
      <p className="text-xl md:text-2xl font-light mb-8 max-w-xl text-gray-300 dark:text-gray-400">
        I craft intelligent tech — from AI tools to embedded systems. Clean, powerful, future-forward.
      </p>
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 8px #0ff",
          boxShadow: "0px 0px 15px #0ff"
        }}
        className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-100 transition"
      >
        🚀 View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
