import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Profile() {
  return (
    <section id="profile" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <motion.h2
        className="text-3xl font-bold text-indigo-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👋 About Me
      </motion.h2>

      <motion.img
        src="/headshot.jpg"
        alt="Enoch"
        className="w-28 h-28 mx-auto rounded-full mb-4 border-4 border-indigo-500"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">Enoch Owoade</p>
      <p className="text-gray-600 dark:text-gray-400">
        Web, Embedded Systems & AI Developer | Passionate about building projects with real-world impact
      </p>

      <div className="flex justify-center gap-6 mt-4 text-2xl text-indigo-600 dark:text-indigo-400">
        <a href="https://github.com/Enochteo" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/enoch-owoade" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:enochowoade@gmail.com"><FaEnvelope /></a>
      </div>
    </section>
  );
}
