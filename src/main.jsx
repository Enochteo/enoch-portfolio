import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set dark mode on first load
if (!document.documentElement.classList.contains('dark')) {
  document.documentElement.classList.add('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / windowHeight) * 100;
  scrollProgress.style.width = `${scrolled}%`;
});

