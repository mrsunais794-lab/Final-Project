// products.js - Complete product management for LuxeGlow website

// Data for products
const products = [
    { 
        id: 1, 
        name: "Luxury Serum", 
        category: "skincare", 
        type: "serum",
        price: 89.99, 
        image: "assets/images/serum image 1.jpeg",
        description: "A powerful antioxidant serum that brightens and evens skin tone while fighting signs of aging. Formulated with 15% Vitamin C and 1% Vitamin E for maximum effectiveness.",
        features: ["Vitamin C enriched", "Hydrates for 24 hours", "Non-comedogenic", "Suitable for all skin types", "Reduces dark spots"],
        ingredients: "Vitamin C, Hyaluronic Acid, Niacinamide, Green Tea Extract, Ferulic Acid",
        bestseller: true,
        rating: 4.8,
        reviews: 124
    },
    { 
        id: 2, 
        name: "Hydra Moisturizer", 
        category: "skincare", 
        type: "moisturizer",
        price: 65.50, 
        image: "assets/images/hydrating cream.jpeg",
        description: "Intensely hydrating moisturizer that locks in moisture for a plump, dewy complexion. Perfect for dry and combination skin types.",
        features: ["72-hour hydration", "Strengthens skin barrier", "Lightweight formula", "Fragrance-free", "SPF 30"],
        ingredients: "Ceramides, Squalane, Peptides, Shea Butter, Hyaluronic Acid",
        bestseller: true,
        rating: 4.6,
        reviews: 89
    },
    { 
        id: 3, 
        name: "Gentle Cleanser", 
        category: "skincare", 
        type: "cleanser",
        price: 42.00, 
        image: "assets/images/cream 2.jpeg",
        description: "A mild, pH-balanced cleanser that removes impurities without stripping skin's natural oils. Suitable for sensitive skin.",
        features: ["pH balanced", "Soap-free", "Non-drying", "Removes makeup", "Dermatologist tested"],
        ingredients: "Glycerin, Chamomile Extract, Aloe Vera, Coconut-derived Cleansers, Allantoin",
        bestseller: false,
        rating: 4.4,
        reviews: 67
    },
    { 
        id: 4, 
        name: "Night Repair Cream", 
        category: "skincare", 
        type: "cream",
        price: 95.00, 
        image: "assets/images/serum image 5.jpeg",
        description: "Overnight treatment that works while you sleep to repair and rejuvenate skin. Reduces fine lines and improves elasticity.",
        features: ["Retinol alternative", "Cell-renewing", "Reduces fine lines", "Improves elasticity", "Overnight treatment"],
        ingredients: "Bakuchiol, Peptides, Ceramides, Niacinamide, Vitamin E",
        bestseller: true,
        rating: 4.7,
        reviews: 112
    },
    { 
        id: 5, 
        name: "Eye Contour Gel", 
        category: "skincare", 
        type: "eye care",
        price: 72.00, 
        image: "assets/images/serum image 4.jpeg",
        description: "Lightweight gel that reduces puffiness and dark circles while hydrating the delicate eye area.",
        features: ["Caffeine infused", "Reduces puffiness", "Diminishes dark circles", "Hydrating", "Cooling effect"],
        ingredients: "Caffeine, Vitamin K, Hyaluronic Acid, Cucumber Extract, Peptides",
        bestseller: false,
        rating: 4.5,
        reviews: 56
    },
    { 
        id: 6, 
        name: "Sun Protection SPF 50", 
        category: "skincare", 
        type: "sunscreen",
        price: 55.00, 
        image: "assets/images/cream 1.jpeg",
        description: "Broad spectrum sunscreen that provides maximum protection while being lightweight and non-greasy.",
        features: ["SPF 50", "Broad spectrum", "Water resistant", "Non-comedogenic", "Matte finish"],
        ingredients: "Zinc Oxide, Titanium Dioxide, Vitamin E, Aloe Vera, Green Tea Extract",
        bestseller: true,
        rating: 4.6,
        reviews: 93
    },
    { 
        id: 7, 
        name: "Éclat de Nuit", 
        category: "perfumes", 
        type: "evening",
        price: 120.00, 
        image: "assets/images/perfume 19.jpeg",
        description: "A sophisticated evening fragrance with notes of oud, vanilla, and amber. Perfect for special occasions and romantic evenings.",
        features: ["Long-lasting", "Eau de Parfum", "Unisex", "Evening wear", "8-10 hour longevity"],
        ingredients: "Oud, Vanilla, Amber, Sandalwood, Patchouli, Bergamot",
        bestseller: true,
        rating: 4.9,
        reviews: 178
    },
    { 
        id: 8, 
        name: "Rose Éternelle", 
        category: "perfumes", 
        type: "floral",
        price: 110.50, 
        image: "assets/images/perfume 21.jpeg",
        description: "A timeless floral fragrance with Bulgarian rose, jasmine, and a hint of musk. Elegant and feminine.",
        features: ["Floral bouquet", "All-day wear", "Elegant scent", "Spring/Summer", "6-8 hour longevity"],
        ingredients: "Bulgarian Rose, Jasmine, Lily of the Valley, White Musk, Peach, Violet",
        bestseller: false,
        rating: 4.7,
        reviews: 124
    },
    { 
        id: 9, 
        name: "Bois de Santal", 
        category: "perfumes", 
        type: "woody",
        price: 135.00, 
        image: "assets/images/perfume 9.jpeg",
        description: "A warm, woody fragrance featuring sandalwood, cedar, and vetiver. Masculine yet versatile.",
        features: ["Woody scent", "Unisex", "Autumn/Winter", "Eau de Parfum", "8+ hour longevity"],
        ingredients: "Sandalwood, Cedar, Vetiver, Cardamom, Bergamot, Leather",
        bestseller: true,
        rating: 4.8,
        reviews: 156
    },
    { 
        id: 10, 
        name: "Citron Frais", 
        category: "perfumes", 
        type: "fresh",
        price: 98.00, 
        image: "assets/images/perfume 22.jpeg",
        description: "A fresh citrus fragrance perfect for daytime wear. Energizing and uplifting.",
        features: ["Citrus notes", "Refreshing", "Daytime wear", "Eau de Toilette", "4-6 hour longevity"],
        ingredients: "Lemon, Bergamot, Grapefruit, Mint, Neroli, Basil",
        bestseller: false,
        rating: 4.5,
        reviews: 89
    },
    { 
        id: 11, 
        name: "Vanille Noire", 
        category: "perfumes", 
        type: "oriental",
        price: 145.00, 
        image: "assets/images/perfume 2.jpeg",
        description: "A rich oriental fragrance with dark vanilla, tonka bean, and spices. Mysterious and sensual.",
        features: ["Oriental notes", "Evening wear", "Long-lasting", "Eau de Parfum", "10+ hour longevity"],
        ingredients: "Vanilla, Tonka Bean, Cinnamon, Amber, Orange Blossom, Benzoin",
        bestseller: false,
        rating: 4.6,
        reviews: 67
    },
    { 
        id: 12, 
        name: "Jasmin d'Orient", 
        category: "perfumes", 
        type: "floral",
        price: 125.00, 
        image: "assets/images/perfume 6.jpeg",
        description: "An exotic floral fragrance featuring jasmine sambac, tuberose, and ylang-ylang. Romantic and intoxicating.",
        features: ["Exotic floral", "Evening wear", "Intense projection", "Eau de Parfum", "8+ hour longevity"],
        ingredients: "Jasmine Sambac, Tuberose, Ylang-Ylang, Orange Blossom, Sandalwood",
        bestseller: true,
        rating: 4.7,
        reviews: 134
    }
];

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initProducts();
});

// Main initialization function
function initProducts() {
    console.log('Initializing products...');
    
    // Load featured products on home page
    const featuredGrid = document.getElementById('featuredProducts');
    if (featuredGrid) {
        console.log('Loading featured products...');
        loadFeaturedProducts(featuredGrid);
    }

    // Load all products on products page
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        console.log('Loading all products...');
        loadProducts(productsGrid, 'all');
        setupFilterButtons();
    }

    // Load skin care products on skincare page
    const skincareGrid = document.getElementById('skincareGrid');
    if (skincareGrid) {
        console.log('Loading skin care products...');
        const skincareProducts = products.filter(product => product.category === 'skincare');
        loadProductsByCategory(skincareGrid, skincareProducts);
        setupSkinCareFilters();
    }

    // Load perfume products on perfumes page
    const perfumesGrid = document.getElementById('perfumesGrid');
    if (perfumesGrid) {
        console.log('Loading perfume products...');
        const perfumeProducts = products.filter(product => product.category === 'perfumes');
        loadProductsByCategory(perfumesGrid, perfumeProducts);
        setupPerfumeFilters();
    }

    // Initialize product hover effects
    initProductHoverEffects();
}

// Load featured products (bestsellers)
function loadFeaturedProducts(container) {
    const featuredProducts = products.filter(product => product.bestseller).slice(0, 4);
    container.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Load products by category
function loadProducts(container, category = 'all') {
    let filteredProducts = products;
    
    if (category === 'skincare') {
        filteredProducts = products.filter(product => product.category === 'skincare');
    } else if (category === 'perfumes') {
        filteredProducts = products.filter(product => product.category === 'perfumes');
    } else if (category === 'bestsellers') {
        filteredProducts = products.filter(product => product.bestseller);
    }
    
    container.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Load products by category for specific pages
function loadProductsByCategory(container, productList) {
    container.innerHTML = '';
    
    productList.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-id', product.id);
    productCard.setAttribute('data-category', product.category);
    productCard.setAttribute('data-type', product.type);
    productCard.setAttribute('data-bestseller', product.bestseller);
    
    // Create rating stars
    const stars = createStarRating(product.rating);
    
    productCard.innerHTML = `
        <div class="product-img">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.bestseller ? '<div class="bestseller-badge">Bestseller</div>' : ''}
            <div class="product-detail-hover">
                <h4>Quick View</h4>
                <p>${product.description.substring(0, 120)}...</p>
                <div class="rating" style="margin: 10px 0; color: #ffc107;">
                    ${stars}
                    <span style="color: var(--text-light); font-size: 0.9rem; margin-left: 5px;">(${product.reviews})</span>
                </div>
                <ul class="product-features">
                    ${product.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <button class="btn quick-view-btn" data-id="${product.id}">View Details</button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-category">${product.category === 'skincare' ? 'Skin Care' : 'Perfume'}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="rating" style="margin-bottom: 10px; font-size: 0.9rem;">
                ${stars}
                <span style="color: var(--text-light); margin-left: 5px;">${product.rating}</span>
            </div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    // Add event listeners
    const quickViewBtn = productCard.querySelector('.quick-view-btn');
    const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
    
    if (quickViewBtn) {
        quickViewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showProductQuickView(product.id);
        });
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id);
        });
    }
    
    // Show quick view on card click
    productCard.addEventListener('click', (e) => {
        if (!e.target.closest('.quick-view-btn') && !e.target.closest('.add-to-cart-btn')) {
            showProductQuickView(product.id);
        }
    });
    
    return productCard;
}

// Create star rating HTML
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHTML;
}

// Setup filter buttons for products page
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('#products .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter products
            const filter = button.getAttribute('data-filter');
            const productsGrid = document.querySelector('#products .products-grid');
            if (productsGrid) {
                loadProducts(productsGrid, filter);
            }
        });
    });
}

// Setup skin care filter buttons
function setupSkinCareFilters() {
    const filterButtons = document.querySelectorAll('#skincare .filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter skin care products
            const filter = button.getAttribute('data-filter');
            const skincareGrid = document.getElementById('skincareGrid');
            if (skincareGrid) {
                let filteredProducts = products.filter(product => product.category === 'skincare');
                
                if (filter !== 'all') {
                    filteredProducts = filteredProducts.filter(product => product.type === filter);
                }
                
                loadProductsByCategory(skincareGrid, filteredProducts);
            }
        });
    });
}

// Setup perfume filter buttons - FIXED VERSION
function setupPerfumeFilters() {
    const filterButtons = document.querySelectorAll('#perfumes .filter-btn');
    
    console.log('Setting up perfume filters, found buttons:', filterButtons.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter perfume products
            const filter = button.getAttribute('data-filter');
            const perfumesGrid = document.getElementById('perfumesGrid');
            
            console.log('Filtering perfumes by:', filter);
            
            if (perfumesGrid) {
                let filteredProducts = products.filter(product => product.category === 'perfumes');
                
                if (filter !== 'all') {
                    filteredProducts = filteredProducts.filter(product => product.type === filter);
                }
                
                console.log('Filtered products:', filteredProducts.length);
                
                // Clear and reload products
                perfumesGrid.innerHTML = '';
                filteredProducts.forEach(product => {
                    const productCard = createProductCard(product);
                    perfumesGrid.appendChild(productCard);
                });
            }
        });
    });
}

// Show product quick view modal
function showProductQuickView(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    const quickviewBody = document.getElementById('quickviewBody');
    const productQuickView = document.getElementById('productQuickView');
    const stars = createStarRating(product.rating);
    
    if (!quickviewBody || !productQuickView) return;
    
    quickviewBody.innerHTML = `
        <div class="quickview-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.bestseller ? '<div class="bestseller-badge" style="position: absolute; top: 10px; left: 10px; background: var(--accent); color: white; padding: 5px 10px; border-radius: 4px; font-size: 0.8rem;">Bestseller</div>' : ''}
        </div>
        <div class="quickview-info">
            <div class="product-category">${product.category === 'skincare' ? 'Skin Care' : 'Perfume'}</div>
            <h2>${product.name}</h2>
            <div class="rating" style="margin-bottom: 15px;">
                ${stars}
                <span style="color: var(--text-light); margin-left: 10px;">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="quickview-price">$${product.price.toFixed(2)}</div>
            <p class="quickview-description">${product.description}</p>
            
            <h4>Key Features:</h4>
            <ul class="quickview-features">
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            ${product.category === 'skincare' ? `
                <h4>Key Ingredients:</h4>
                <p style="margin-bottom: 20px;">${product.ingredients}</p>
            ` : `
                <h4>Fragrance Notes:</h4>
                <p style="margin-bottom: 20px;">${product.ingredients}</p>
            `}
            
            <div class="quantity-selector">
                <label for="quantity">Quantity:</label>
                <button type="button" class="quantity-btn decrease">-</button>
                <input type="number" id="quantity" value="1" min="1" max="10">
                <button type="button" class="quantity-btn increase">+</button>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button class="btn add-to-cart-quickview" data-id="${product.id}" style="flex: 2;">
                    <i class="fas fa-shopping-cart" style="margin-right: 8px;"></i> Add to Cart
                </button>
                <button class="btn btn-outline add-to-wishlist" data-id="${product.id}" style="flex: 1;">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <h4>Product Details:</h4>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 5px;"><strong>Category:</strong> ${product.category === 'skincare' ? 'Skin Care' : 'Perfume'}</li>
                    <li style="margin-bottom: 5px;"><strong>Type:</strong> ${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</li>
                    <li style="margin-bottom: 5px;"><strong>Size:</strong> ${product.category === 'skincare' ? '30ml / 1oz' : '50ml / 1.7oz'}</li>
                    <li><strong>Suitable For:</strong> All skin types</li>
                </ul>
            </div>
        </div>
    `;
    
    // Add event listeners for quantity buttons
    const decreaseBtn = quickviewBody.querySelector('.decrease');
    const increaseBtn = quickviewBody.querySelector('.increase');
    const quantityInput = quickviewBody.querySelector('#quantity');
    const addToCartBtn = quickviewBody.querySelector('.add-to-cart-quickview');
    const addToWishlistBtn = quickviewBody.querySelector('.add-to-wishlist');
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        });
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            addToCart(product.id, quantity);
            productQuickView.classList.remove('active');
        });
    }
    
    if (addToWishlistBtn) {
        addToWishlistBtn.addEventListener('click', () => {
            addToWishlist(product.id);
            addToWishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
            addToWishlistBtn.classList.remove('btn-outline');
            addToWishlistBtn.classList.add('btn');
            addToWishlistBtn.style.backgroundColor = '#ff6b6b';
            addToWishlistBtn.style.borderColor = '#ff6b6b';
        });
    }
    
    // Validate quantity input
    if (quantityInput) {
        quantityInput.addEventListener('change', () => {
            let value = parseInt(quantityInput.value);
            if (isNaN(value) || value < 1) {
                quantityInput.value = 1;
            } else if (value > 10) {
                quantityInput.value = 10;
            }
        });
    }
    
    productQuickView.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Initialize product hover effects
function initProductHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productId = card.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        
        if (!product) return;
        
        card.addEventListener('mouseenter', () => {
            const hoverElement = card.querySelector('.product-detail-hover');
            if (hoverElement) {
                hoverElement.style.opacity = '1';
                hoverElement.style.transform = 'translateY(0)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const hoverElement = card.querySelector('.product-detail-hover');
            if (hoverElement) {
                hoverElement.style.opacity = '0';
                hoverElement.style.transform = 'translateY(10px)';
            }
        });
    });
}

// Add to cart function (connected with cart.js)
function addToCart(productId, quantity = 1) {
    // This function should be connected with your cart.js
    // For now, we'll create a basic implementation
    
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    // Check if cart functions are available from cart.js
    if (typeof window.addToCart === 'function') {
        // Use cart.js function if available
        window.addToCart(productId, quantity);
    } else {
        // Fallback implementation
        console.log(`Added ${quantity} x ${product.name} to cart`);
        
        // Show notification
        showNotification(`${product.name} added to cart!`);
        
        // Update cart count in header
        updateCartCount(quantity);
    }
}

// Add to wishlist function
function addToWishlist(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    let wishlist = JSON.parse(localStorage.getItem('luxeglow_wishlist')) || [];
    
    // Check if product is already in wishlist
    const existingIndex = wishlist.findIndex(item => item.id == productId);
    
    if (existingIndex === -1) {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showNotification(`${product.name} added to wishlist!`);
    } else {
        wishlist.splice(existingIndex, 1);
        showNotification(`${product.name} removed from wishlist!`);
    }
    
    localStorage.setItem('luxeglow_wishlist', JSON.stringify(wishlist));
}

// Update cart count in header
function updateCartCount(additionalItems = 0) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        let currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + additionalItems;
        
        // Add animation
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 300);
    }
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `
        <div style="display: flex; align-items: center;">
            <i class="fas fa-check-circle" style="margin-right: 10px; color: #4CAF50;"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        color: var(--text);
        padding: 15px 25px;
        border-radius: var(--radius);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
        display: flex;
        align-items: center;
        border-left: 4px solid var(--accent);
    `;
    
    document.body.appendChild(notification);
    
    // Add CSS animations if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Search products function
function searchProducts(query) {
    query = query.toLowerCase().trim();
    
    if (!query) return products;
    
    return products.filter(product => {
        return (
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.type.toLowerCase().includes(query) ||
            product.features.some(feature => feature.toLowerCase().includes(query))
        );
    });
}

// Get products by type
function getProductsByType(type) {
    return products.filter(product => product.type === type);
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Get bestseller products
function getBestsellerProducts() {
    return products.filter(product => product.bestseller);
}

// Get new arrivals (placeholder - you can add a "new" property to products)
function getNewArrivals() {
    // For now, return last 4 products
    return products.slice(-4);
}

// Export functions for use in other scripts (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        initProducts,
        searchProducts,
        getProductsByType,
        getProductsByCategory,
        getBestsellerProducts,
        getNewArrivals,
        showProductQuickView,
        addToCart
    };
}
