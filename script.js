// Smooth scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', () => {
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(el => observer.observe(el));
    
    // Observe about content
    document.querySelectorAll('.about-text, .value-item').forEach(el => observer.observe(el));
    
    // Observe property cards
    document.querySelectorAll('.property-card').forEach(el => observer.observe(el));
    
    // Observe service items
    document.querySelectorAll('.service-item').forEach(el => observer.observe(el));
    
    // Observe stats
    document.querySelectorAll('.stat-item').forEach(el => observer.observe(el));
    
    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(el => observer.observe(el));
    
    // Observe contact form and map
    document.querySelectorAll('.contact-form, .contact-map').forEach(el => observer.observe(el));
});

// Animated Counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Counter animation observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.querySelectorAll('.stat-number').forEach(el => {
    counterObserver.observe(el);
});

// Observe testimonial cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.testimonial-card').forEach(el => observer.observe(el));
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission with animation
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Animate button
    submitBtn.textContent = 'Sending...';
    submitBtn.style.transform = 'scale(0.95)';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#28a745';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.style.transform = '';
            
            // Reset form
            e.target.reset();
        }, 2000);
    }, 1500);
});

// Newsletter subscription animation
document.querySelector('.newsletter button').addEventListener('click', (e) => {
    e.preventDefault();
    
    const button = e.target;
    const input = document.querySelector('.newsletter input');
    
    if (input.value.trim() === '') {
        input.style.borderColor = '#ff6b6b';
        input.placeholder = 'Please enter your email';
        return;
    }
    
    // Animate subscription
    button.textContent = 'Subscribed!';
    button.style.background = '#28a745';
    input.value = '';
    
    setTimeout(() => {
        button.textContent = 'Subscribe';
        button.style.background = '';
        input.placeholder = 'Your email';
        input.style.borderColor = '';
    }, 3000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Property card hover effects enhancement
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// CTA button pulse animation
setInterval(() => {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.style.animation = 'none';
        setTimeout(() => {
            ctaButton.style.animation = 'pulse 2s ease-in-out';
        }, 10);
    }
}, 10000);

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
        100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
    }
`;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});