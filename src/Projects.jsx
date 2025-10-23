import { motion } from 'framer-motion';

const fullstack = [
  {
    title: "Relay: Campus Marketplace",
    description: "A full-stack web app for buying/selling items on campus with user authentication, real-time chat, and image uploads.",
    tech: ["React", "Django", "PostgreSQL", "WebSockets", "Redis"],
    link: "https://github.com/Enochteo/relay-mvp"
  },
  {
     title: "SmartCV: Resume Analyzer",
    description: "An AI-powered web app that scans, scores, and rewrites resumes to match job descriptions using NLP and heatmaps.",
    tech: ["Python", "Django", "Bootstrap", "OpenAI API"],
    link: "https://github.com/Enochteo/resume-analyzer"
  },
]

const bootcampprojects=[
  {
     title: "Drive Delight",
    description: "A full-stack web application that allows users to customize cars with various features and view real-time pricing updates.",
    tech: ["React", "Express", "PostgreSQL"],
    link: "https://github.com/Enochteo/drive-delight"
  },
  {
     title: "Vibe Spot",
    description: "A full-stack web application that allows users to discover and share music concerts happening around them in interactive / clickable map locations.",
    tech: ["React", "Express", "PostgreSQL"],
    link: "https://github.com/Enochteo/vibe-spot"
  },
  {
    title: "React Projects Collection",
    description: "A collection of React projects demonstrating various concepts and functionalities, including a CRUD app, crypto app, games, and a screenshot generator.",
    tech: ["React", "APIs", "Supabase", "JavaScript"],
    link: "https://github.com/Enochteo/react-projects"
  },
    {
    title: "CS-Pharmacy Management System",
    description: "A Django-based app that lets pharmacists manage prescriptions, send email alerts, and authenticate users.",
    tech: ["Django", "HTML/CSS", "SQLite"],
    link: "https://github.com/Enochteo/CS-PROJECT"
  },

]
const projects = [
  {
    title: "Attendance System with Anti-spoofing",
    description: "AI-powered attendance marking system that uses face recognition and EAR liveness to record student attendance and prevent spoofing",
    tech: ["Flask", "OpenCV", "face_recognition", "MediaPipe"],
    link: "https://github.com/Enochteo/smart-attendance-system"
  },
  {
    title: "AI Security Camera",
    description: "An AI-powered security camera system using OpenCV and YOLO for real-time object/person detection with a Flask-based web dashboard.",
    tech: ["OpenCV", "YOLOv8", "Flask", "Bootstrap", "Gmail SMTP"],
    link: "https://github.com/Enochteo/Smart-AI-Security-Cam"
  },
  {
    title: "Home Automation Dashboard",
    description: "A web Dashboard for an IoT system designed to monitor and control smart home devices using data read from environmental sensors",
    tech: ["Flask", "IoT", "Http", "Chart.js", "ESP", "Platform IO"],
    link: "https://github.com/Enochteo/Home-automation-project"
  },
  {
    title: "Solar Tracker with ESP32",
    description: "Embedded system using LDRs, servo motors, and ESP32 to auto-track sunlight and log voltage/temp data.",
    tech: ["C++", "ESP32", "Arduino", "Sensors"],
    link: "https://github.com/Enochteo/SOLARCARE"
  }
];


const Projects = () => {
  // small reusable project card to keep markup consistent
  const ProjectCard = ({ project, index }) => (
    <motion.article
      key={`${project.title}-${index}`}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transform transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      aria-labelledby={`project-${index}-title`}
    >
      <h3 id={`project-${index}-title`} className="text-2xl font-semibold text-indigo-600 dark:text-cyan-300 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-indigo-50 dark:bg-gray-700 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label={`Open ${project.title} repository`}
        >
          View Repo
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-500 hover:underline"
            aria-label={`Open ${project.title} live site`}
          >
            Live
          </a>
        )}
      </div>
    </motion.article>
  );

  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">📁 Full Stack Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fullstack.map((p, i) => <ProjectCard project={p} index={i} key={`full-${i}`} />)}
        </div>

        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">📚 Bootcamp & Course Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bootcampprojects.map((p, i) => <ProjectCard project={p} index={i} key={`boot-${i}`} />)}
        </div>

        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">🔧 Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => <ProjectCard project={p} index={i} key={`other-${i}`} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
