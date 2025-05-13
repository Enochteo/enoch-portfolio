// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Enoch Owoade</p>
        <p className="text-sm text-gray-400 mt-1">Built with React + Tailwind </p>
      </footer>
    );
  }
  