// Toggle functionality for FAQ and Guide sections
document.addEventListener('DOMContentLoaded', function() {
    // Handle FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.toggle-icon');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const icon = item.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = item.classList.contains('active') ? '-' : '+';
            }
        });
    });

    // Handle Guide sections
    document.querySelectorAll('.guide-section').forEach(section => {
        const question = section.querySelector('.guide-question');
        question.addEventListener('click', () => {
            // Close all other guide sections in the same container
            const container = section.closest('.guide-container');
            if (container) {
                container.querySelectorAll('.guide-section').forEach(otherSection => {
                    if (otherSection !== section) {
                        otherSection.classList.remove('active');
                        const otherIcon = otherSection.querySelector('.toggle-icon');
                        if (otherIcon) otherIcon.textContent = '+';
                    }
                });
            }
            
            // Toggle current section
            section.classList.toggle('active');
            const icon = section.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = section.classList.contains('active') ? '-' : '+';
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        // Only prevent default and smooth scroll for internal page anchors
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Form submission handling
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add scroll event listener for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 