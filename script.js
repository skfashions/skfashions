// Product data - Add your products here
const products = [
    {
        name: "Test Image",
        image: "https://github.com/skfashions/skfashions/blob/main/Images/SK1.jpeg",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        name: "Smart Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        description: "Feature-rich smartwatch with health tracking capabilities."
    },
    {
        name: "Bluetooth Speaker",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
        description: "Portable speaker with excellent sound quality and long battery life."
    },
    {
        name: "Laptop Stand",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        description: "Adjustable laptop stand for better ergonomics and comfort."
    },
    {
        name: "Wireless Mouse",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
        description: "Ergonomic wireless mouse with precision tracking."
    },
    {
        name: "USB-C Hub",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        description: "Multi-port USB-C hub for all your connectivity needs."
    }
];

// Load products when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

function loadProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        </div>
    `;
    
    return card;
}

// Function to add new product (for future use)
function addProduct(name, image, description) {
    products.push({
        name: name,
        image: image,
        description: description
    });
    loadProducts();
}
