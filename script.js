// Rush Grove Nursery - JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Navigation on Scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile Menu Toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animations (Fade In)
    const fadeElements = document.querySelectorAll(
        '.section-title, .section-subtitle, .about-content, .approach-card, ' +
        '.facilities-content, .age-group-card, .testimonial-card, .team-card, ' +
        '.gallery-item, .contact-content, .footer-brand, .footer-links, .footer-contact'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        fadeObserver.observe(el);
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const successModal = document.getElementById('successModal');
    const closeModal = document.getElementById('closeModal');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Get form elements
            const parentName = document.getElementById('parentName');
            const email = document.getElementById('email');
            const childAge = document.getElementById('childAge');
            const message = document.getElementById('message');
            
            // Clear previous errors
            clearErrors();
            
            // Validate Name
            if (!parentName.value.trim()) {
                showError(parentName, 'nameError', 'Please enter your name');
                isValid = false;
            } else if (parentName.value.trim().length < 2) {
                showError(parentName, 'nameError', 'Name must be at least 2 characters');
                isValid = false;
            }
            
            // Validate Email
            if (!email.value.trim()) {
                showError(email, 'emailError', 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate Child Age
            if (!childAge.value) {
                showError(childAge, 'ageError', 'Please select your child\'s age group');
                isValid = false;
            }
            
            // Validate Message
            if (!message.value.trim()) {
                showError(message, 'messageError', 'Please enter a message');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError(message, 'messageError', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            // If valid, show success modal
            if (isValid) {
                // Simulate form submission
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    contactForm.reset();
                    successModal.classList.add('active');
                }, 1500);
            }
        });
    }

    function showError(input, errorId, message) {
        input.classList.add('error');
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        document.querySelectorAll('.form-group input, .form-group select, .form-group textarea')
            .forEach(el => el.classList.remove('error'));
        document.querySelectorAll('.error-message')
            .forEach(el => el.textContent = '');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Close Modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }

    // Close modal on outside click
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && successModal.classList.contains('active')) {
            successModal.classList.remove('active');
        }
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Parallax Effect for Hero (subtle)
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // Age Group Card Hover Effect Enhancement
    const ageCards = document.querySelectorAll('.age-group-card');
    
    ageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            ageCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                }
            });
        });
        
        card.addEventListener('mouseleave', function() {
            ageCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // Testimonial Auto-Rotate (Optional - for future enhancement)
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    // Only enable on mobile for better UX
    function rotateTestimonials() {
        if (window.innerWidth <= 576 && testimonials.length > 0) {
            setInterval(() => {
                testimonials.forEach((card, index) => {
                    if (index === currentTestimonial) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            }, 5000);
        }
    }
    
    rotateTestimonials();

    // Form Input Animation
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // Button Ripple Effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                left: ${x}px;
                top: ${y}px;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
                pointer-events: none;
            `;
            
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation to document
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Console Welcome Message
    console.log('%c🌿 Welcome to Rush Grove Nursery!', 'font-size: 20px; color: #4a7c59; font-weight: bold;');
    console.log('%cExceptional Early Years Care in Historic Surroundings', 'font-size: 14px; color: #8b8680;');

    // Performance: Lazy load images (placeholder for real images)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // In production, this would load the actual image
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('.image-placeholder').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.documentElement.style.scrollBehavior = 'auto';
        document.querySelectorAll('*').forEach(el => {
            el.style.transition = 'none';
        });
    }

    // Back to Top Button (appears after scrolling)
    const backToTopHTML = `
        <button id="backToTop" aria-label="Back to top" style="
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #4a7c59, #3d6649);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(74, 124, 89, 0.4);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        ">↑</button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', backToTopHTML);
    
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'translateY(-3px)';
    });
    
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'translateY(0)';
    });
});

// Preloader (optional - remove if not needed)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
