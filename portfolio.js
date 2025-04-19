// Portfolio JavaScript

// DOM Elements
const body = document.body;
const header = document.querySelector('.site-header');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');
const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
const modalOverlay = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTechStack = document.getElementById('modal-tech-stack');

// Bio box and project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Bio box hover effect
    const bioBox = document.querySelector('.bio-box');
    
    if (bioBox) {
        bioBox.addEventListener('mousemove', function(e) {
            // Get mouse position relative to the bio box
            const rect = bioBox.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Update CSS variables for the radial gradient
            bioBox.style.setProperty('--x', `${x}%`);
            bioBox.style.setProperty('--y', `${y}%`);
        });
        
        // Add a subtle pulse animation on hover
        bioBox.addEventListener('mouseenter', function() {
            bioBox.style.animation = 'pulse 2s infinite';
        });
        
        bioBox.addEventListener('mouseleave', function() {
            bioBox.style.animation = 'none';
        });
    }
    
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            // Get mouse position relative to the card
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Update CSS variables for the radial gradient
            card.style.setProperty('--x', `${x}%`);
            card.style.setProperty('--y', `${y}%`);
        });
        
        // Add a subtle pulse animation on hover
        card.addEventListener('mouseenter', function() {
            card.style.animation = 'pulse 2s infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.animation = 'none';
        });
    });
    
    // Project details buttons hover effect
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
    
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('mousemove', function(e) {
            // Get mouse position relative to the button
            const rect = btn.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Update CSS variables for the radial gradient
            btn.style.setProperty('--x', `${x}%`);
            btn.style.setProperty('--y', `${y}%`);
        });
        
        // Add a subtle pulse animation on hover
        btn.addEventListener('mouseenter', function() {
            btn.style.animation = 'pulse 1.5s infinite';
        });
        
        btn.addEventListener('mouseleave', function() {
            btn.style.animation = 'none';
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (mainNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

// Project data
const projectData = {
    'Moon Bakes': {
        description: 'An order management and inventory tracking application designed for bakeries to streamline operations and manage customer orders in real-time. The system includes features for inventory management, order processing, customer management, and reporting.',
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap']
    },
    'RA Tool': {
        description: 'A reporting automation platform that simplifies the process of generating, scheduling, and distributing reports across organizations. This tool helps businesses automate their reporting workflows, saving time and reducing manual errors.',
        technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker']
    },
    'Chest Cooler': {
        description: 'A smart cooling system that monitors and maintains optimal temperature for medical supplies and perishable items. The system features real-time temperature monitoring, automated alerts for temperature fluctuations, power outage notifications, and a comprehensive analytics dashboard for tracking performance over time. Designed for hospitals, pharmacies, and laboratories to ensure the integrity of temperature-sensitive materials.',
        technologies: ['Java', 'Spring Boot', 'IoT', 'Sensors', 'MQTT', 'React', 'Time Series DB']
    },
    'Student Result Management System': {
        description: 'A comprehensive system for students to check their academic results, track performance over time, and access course-specific feedback. Features include secure authentication, detailed result views, performance analytics, and downloadable transcripts. The system also includes an admin panel for faculty to upload and manage student results.',
        technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap', 'JPA', 'Spring Security']
    }
};

// Initialize project modals
document.addEventListener('DOMContentLoaded', () => {
    // Get all project detail buttons
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
    
    // Add click event to each button
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get project data
            const projectCard = btn.closest('.project-card');
            const projectTitle = projectCard.querySelector('.project-title').textContent;
            const project = projectData[projectTitle];
            
            if (project) {
                console.log('Opening modal for:', projectTitle);
                
                // Populate modal content
                modalTitle.textContent = projectTitle;
                modalDescription.textContent = project.description;
                
                // Clear and add tech badges
                modalTechStack.innerHTML = '';
                project.technologies.forEach(tech => {
                    const badge = document.createElement('span');
                    badge.className = 'tech-badge';
                    badge.textContent = tech;
                    modalTechStack.appendChild(badge);
                });
                
                // Show modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });
});

// Modal close functionality
document.addEventListener('DOMContentLoaded', () => {
    // Function to close the modal
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Close button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close when clicking outside the modal
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// No form submission needed

// Add animation classes on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-item, .contact-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Check on initial load