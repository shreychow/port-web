// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add hover effects to social icons
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

// Fade in bio text on page load
window.addEventListener('DOMContentLoaded', () => {
  const bio = document.querySelector('.bio');
  if (bio) {
    bio.style.opacity = '0';
    bio.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
      bio.style.opacity = '1';
    }, 500);
  }
});

// Add image hover effect in portfolio
const portfolioImages = document.querySelectorAll('main img');
portfolioImages.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
    img.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = 'none';
  });
});

// Add button hover effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.transition = 'all 0.3s ease';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'translateY(0)';
  });
});

// Typing effect for the greeting
const greeting = document.querySelector('h1');
if (greeting) {
  const text = greeting.textContent;
  greeting.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      greeting.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
}
