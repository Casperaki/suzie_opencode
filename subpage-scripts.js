// Sub-Page Scripts
// Rush Grove Nursery

document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // Routine Tabs Functionality
    // ========================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // ========================================
    // Gallery Filter Functionality
    // ========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item-wider, .gallery-item, .gallery-item-tall');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Add fadeIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: scale(0.95);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Lightbox for Gallery (Future Enhancement)
    // ========================================
    const galleryImages = document.querySelectorAll('.gallery-img-placeholder');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // Placeholder for lightbox functionality
            // In production, this would open a full-size image viewer
            console.log('Image clicked - lightbox would open here');
        });
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.getElementById('navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Scroll Animations
    // ========================================
    const animateOnScroll = document.querySelectorAll(
        '.activity-card, .featured-card, .routine-time, .step, .outdoor-feature, .highlight-box'
    );

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        scrollObserver.observe(el);
    });

    // ========================================
    // Active Navigation Based on URL
    // ========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ========================================
    // Parallax Effect for Page Headers
    // ========================================
    const pageHeader = document.querySelector('.page-header');
    
    if (pageHeader) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const headerHeight = pageHeader.offsetHeight;
            
            if (scrolled < headerHeight) {
                pageHeader.style.backgroundPositionY = `${scrolled * 0.3}px`;
            }
        });
    }

    // ========================================
    // Sample Menu Animation
    // ========================================
    const menuDays = document.querySelectorAll('.menu-day');
    
    menuDays.forEach((day, index) => {
        day.style.opacity = '0';
        day.style.transform = 'translateX(-20px)';
        day.style.transition = `all 0.4s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            day.style.opacity = '1';
            day.style.transform = 'translateX(0)';
        }, 100);
    });

    // ========================================
    // Step Counter Animation
    // ========================================
    const stepNumbers = document.querySelectorAll('.step-number');
    
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                number.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    number.style.transform = 'scale(1)';
                }, 200);
                stepObserver.unobserve(number);
            }
        });
    }, { threshold: 0.5 });

    stepNumbers.forEach(number => {
        number.style.transition = 'transform 0.3s ease';
        stepObserver.observe(number);
    });

    // ========================================
    // Tab Content Height Animation
    // ========================================
    const tabContentElements = document.querySelectorAll('.tab-content');
    
    tabContentElements.forEach(content => {
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.4s ease';
    });

    // Override tab functionality to animate height
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = document.getElementById(button.getAttribute('data-tab'));
            
            // Close all tabs
            tabContents.forEach(content => {
                content.style.maxHeight = '0';
            });
            
            // Open selected tab
            setTimeout(() => {
                targetTab.style.maxHeight = targetTab.scrollHeight + 'px';
            }, 100);
        });
    });

    // Initialize first tab height
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab) {
        activeTab.style.maxHeight = 'none';
    }

    // ========================================
    // Mobile Menu Close on Route Change
    // ========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // ========================================
    // Console Message
    // ========================================
    console.log('%c🌿 Life at Rush Grove', 'font-size: 18px; color: #4a7c59; font-weight: bold;');
    console.log('%cDiscover our daily routines and activities', 'font-size: 14px; color: #8b8680;');
});

// ========================================
// Page Load Animation
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    const headerContent = document.querySelector('.page-header-content');
    if (headerContent) {
        headerContent.style.opacity = '0';
        headerContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            headerContent.style.transition = 'all 0.8s ease';
            headerContent.style.opacity = '1';
            headerContent.style.transform = 'translateY(0)';
        }, 200);
    }
});

// ========================================
// Print Styles Enhancement
// ========================================
const printStyle = document.createElement('style');
printStyle.media = 'print';
printStyle.textContent = `
    .navbar,
    .gallery-filter-section,
    .cta-section,
    .filter-buttons,
    .tab-buttons {
        display: none !important;
    }
    
    .tab-content {
        display: block !important;
        page-break-inside: avoid;
    }
    
    .section {
        padding: 30px 0;
    }
`;
document.head.appendChild(printStyle);
