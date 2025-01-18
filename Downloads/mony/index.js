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
    },
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
document.addEventListener("DOMContentLoaded", function () {
    // Get the search button and input elements
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    // Ensure elements exist before adding event listeners
    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function (event) {
            event.stopPropagation();  // Prevent the event from bubbling up to the document
            searchInput.classList.toggle("active");  // Toggle visibility of the input
        });

        // Close the search input when clicking anywhere outside of it
        document.addEventListener("click", function (event) {
            if (!searchButton.contains(event.target) && !searchInput.contains(event.target)) {
                searchInput.classList.remove("active");  // Close the search input if clicked outside
            }
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    // Toggle the visibility of the menu when the menu button is clicked
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation();  // Prevent the event from bubbling up to the document
        menu.classList.toggle("active");  // Toggle the visibility of the menu
    });

    // Close the menu if clicked outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove("active");  // Close the menu if clicked outside
        }
    });

    // Handle the toggle of the dropdown content (Settings submenu)
    const settingsMenu = document.querySelector('.dropdown');
    const dropdownContent = settingsMenu.querySelector('.dropdown-content');

    settingsMenu.addEventListener('click', function (event) {
        event.stopPropagation();  // Prevent the event from propagating and closing the whole menu
        dropdownContent.classList.toggle('hidden');  // Toggle the sub-menu visibility
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!settingsMenu.contains(event.target)) {
            dropdownContent.classList.add('hidden');  // Hide the dropdown if clicked outside
        }
    });
});
