   // Product data array
   const products = [
    {
        name: "Dynasty beauty Cream",
        price: "$19.99",
        image: "https://m.media-amazon.com/images/I/61pNzL-8ztL._SX466_.jpg",
        description: "A rich cream to keep your skin hydrated all day."
    },
    {
        name: "BOJ Glowing serum",
        price: "$14.99",
        image: "https://www.lookfantastic.ie/images?url=https://static.thcdn.com/productimg/original/14866967-1975171145167979.jpg&format=webp&auto=avif",
        description: "Get that natural glow with our brightening serum."
    },
    {
        name: "BOJ Relief Sun",
        price: "$12.99",
        image: "https://cdn.webshopapp.com/shops/326488/files/459156643/image.jpg",
        description: "Protect your skin from harmful UV rays."
    },
    {
        name: "Anua Cleansing Oil",
        price: "$16.99",
        image: "https://m.media-amazon.com/images/I/41YTYhEzG1L._SL1000_.jpg",
        description: "Help clearing pores by removing makeup, sebum, and dirt."

    }
];

// Populate product cards
const productSection = document.querySelector('.product-section');
products.forEach(product => {
    const productCard = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <strong>${product.price}</strong>
            <button>Add to Cart</button>
        </div>
    `;
    productSection.innerHTML += productCard;
});