import { motion } from 'framer-motion';

const projects = [
  {
    title: "🎥 Smart Security Camera AI",
    description: "An AI-powered camera system using OpenCV and YOLO for real-time object/person detection with a Flask-based web dashboard.",
    tech: ["Python", "OpenCV", "YOLOv8", "Flask", "Bootstrap"],
    link: "https://github.com/Enochteo/Smart-AI-Security-Cam"
  },
  {
    title: "🧠 SmartCV: Resume Analyzer",
    description: "An AI-powered web app that scans, scores, and rewrites resumes to match job descriptions using NLP and heatmaps.",
    tech: ["Python", "Django", "Bootstrap", "Matplotlib"],
    link: "https://github.com/Enochteo/resume-analyzer"
  },
  {
    title: "💊 CS-Pharmacy Management System",
    description: "A Django-based app that lets pharmacists manage prescriptions, send email alerts, and authenticate users.",
    tech: ["Django", "HTML/CSS", "SQLite"],
    link: "https://github.com/Enochteo/cs-pharmacy"
  },
  {
    title: "🌞 Solar Tracker with ESP32",
    description: "Embedded system using LDRs, servo motors, and ESP32 to auto-track sunlight and log voltage/temp data.",
    tech: ["C++", "ESP32", "Arduino", "Sensors"],
    link: "https://github.com/Enochteo/SOLARCARE"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        📁 Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-cyan-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 font-medium hover:underline"
            >
              🔗 View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
