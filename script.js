// Fashion products for SK Fashions
const products = [
    {
        name: "Designer Collection 1",
        image: "Images/SK1.jpeg",
        description: "Elegant designer piece from our premium collection."
    },
    {
        name: "Designer Collection 2",
        image: "Images/SK2.jpeg",
        description: "Sophisticated fashion item with modern styling."
    },
    {
        name: "Designer Collection 3",
        image: "Images/SK3.jpeg",
        description: "Trendy design perfect for contemporary fashion."
    },
    {
        name: "Designer Collection 4",
        image: "Images/SK4.jpeg",
        description: "Luxurious piece crafted with attention to detail."
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