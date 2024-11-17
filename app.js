const observeSkills = () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const progressBar = entry.target.querySelector('.skill-progress');
              const progress = entry.target.dataset.progress;
              progressBar.style.width = `${progress}%`;
          }
      });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-item').forEach(item => {
      observer.observe(item);
  });
};

// Initialize animations when document is loaded
document.addEventListener('DOMContentLoaded', () => {
  observeSkills();
});

// Add parallax effect to about section
window.addEventListener('scroll', () => {
  const aboutSection = document.querySelector('.about');
  const scrolled = window.pageYOffset;
  aboutSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
});
      // Hide intro after 5 seconds
      setTimeout(() => {
          document.querySelector('.intro').style.display = 'none';
      }, 5000);

      // Animate floating icons
      const icons = document.querySelectorAll('.icon');
      icons.forEach(icon => {
          const randomX = Math.random() * window.innerWidth;
          const randomY = Math.random() * window.innerHeight;
          const randomDelay = Math.random() * 5;
          const randomDuration = 5 + Math.random() * 10;

          icon.style.animation = `float ${randomDuration}s infinite linear ${randomDelay}s`;
          icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
      });

      // Smooth scroll for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
      const links = document.querySelectorAll('.nav-links a');

      hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          hamburger.querySelector('i').classList.toggle('fa-bars');
          hamburger.querySelector('i').classList.toggle('fa-times');
      });

      // Close menu when clicking a link
      links.forEach(link => {
          link.addEventListener('click', () => {
              navLinks.classList.remove('active');
              hamburger.querySelector('i').classList.add('fa-bars');
              hamburger.querySelector('i').classList.remove('fa-times');
          });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
          if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              hamburger.querySelector('i').classList.add('fa-bars');
              hamburger.querySelector('i').classList.remove('fa-times');
          }
      });
      const buttons = document.querySelectorAll('.fluid-button');
        
      buttons.forEach(button => {
          button.addEventListener('click', function(e) {
              const rect = this.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const ripple = document.createElement('span');
              ripple.className = 'ripple';
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              
              this.appendChild(ripple);
              
              setTimeout(() => ripple.remove(), 600);
          });
      });