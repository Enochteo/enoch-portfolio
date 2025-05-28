import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md shadow z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400 tracking-wide">EN⚡CH</h1>

          <ul className="flex gap-6 list-none text-white font-medium">
            <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#profile" className="hover:text-indigo-600 transition duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>

          </ul>

          <button
            onClick={toggleDarkMode}
            className="ml-4 text-sm px-3 py-1 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>

      <div className="fixed top-0 left-0 h-1 bg-cyan-400 z-[60]" id="scroll-progress"></div>
    </>
  );
};

export default Navbar;
