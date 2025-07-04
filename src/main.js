import "nes.css/css/nes.min.css";
import './css/style.css'

// Loading animation
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const app = document.getElementById('app');
  const progressBar = loadingScreen.querySelector('.nes-progress');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 100) progress = 100;
    
    progressBar.value = progress;
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        app.style.display = 'block';
      }, 500);
    }
  }, 100);
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Set current year dynamically
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add retro cursor effect (optional)
  const buttons = document.querySelectorAll('.nes-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });
});



