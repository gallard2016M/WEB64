// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('¡Web moderna cargada!');
    
    // Smooth scroll para navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Botón CTA
    const ctaButton = document.getElementById('ctaBtn');
    ctaButton.addEventListener('click', function() {
        alert('¡Gracias por explorar mi web! 🚀');
        document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Mensaje enviado! Gracias por contactarme. 📧');
        contactForm.reset();
    });
    
    // Efecto parallax en hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
    
    // Animación de skills al hacer scroll
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const animateElements = document.querySelectorAll('.project-card, .skill');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Cambiar color de header al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
});

// Efectos adicionales
console.log(`
╔══════════════════════════════╗
║    🚀 WEB MODERNA ACTIVA    ║
║    GitHub Pages Ready!      ║
╚══════════════════════════════╝
`);
