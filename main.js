// Main JavaScript file for navigation and basic functionality

// DOM elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const productQuickView = document.getElementById('productQuickView');
const closeQuickView = document.getElementById('closeQuickView');

// Initialize the website
function initWebsite() {
    setupEventListeners();
    setActiveNavLink();
}

// Set up event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileToggle.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') && 
            !e.target.closest('nav') && 
            !e.target.closest('.mobile-toggle')) {
            mainNav.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });

    // Cart toggle
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('active');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
    }

    // Close quick view
    if (closeQuickView) {
        closeQuickView.addEventListener('click', () => {
            productQuickView.classList.remove('active');
        });
    }

    // Close quick view when clicking outside
    productQuickView.addEventListener('click', (e) => {
        if (e.target === productQuickView) {
            productQuickView.classList.remove('active');
        }
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage = link.getAttribute('href');
        
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initWebsite);
