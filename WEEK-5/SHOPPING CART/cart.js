// Select elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');
const clearCartButton = document.querySelector('.clear-cart');

let cart = [];

// Product data with image URLs
const products = [
  { id: 1, name: 'boAt', price: 2000, image: 'https://raw.githubusercontent.com/Viraj-Mhatre-Project/FSDL30/refs/heads/main/WEEK-5/SHOPPING%20CART/h.avif' },
  { id: 2, name: 'Sony', price: 1200, image: 'https://raw.githubusercontent.com/Viraj-Mhatre-Project/FSDL30/refs/heads/main/WEEK-5/SHOPPING%20CART/h2.avif' },
  { id: 3, name: 'XYZ', price: 3000, image: 'https://raw.githubusercontent.com/Viraj-Mhatre-Project/FSDL30/refs/heads/main/WEEK-5/SHOPPING%20CART/h3.avif' }
];

// Function to update the cart display
function updateCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      ${item.name} - Rs${item.price.toFixed(2)}
      <button class="remove-item" data-id="${item.id}">Remove</button>
    `;
    cartItemsList.appendChild(li);
    total += item.price;
  });
  
  totalPriceElement.textContent = total.toFixed(2);
  
  // Add event listeners to remove buttons
  const removeButtons = document.querySelectorAll('.remove-item');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeFromCart);
  });
}

// Add product to cart
function addToCart(event) {
  const productId = event.target.closest('.product').getAttribute('data-id');
  const product = products.find(p => p.id == productId);
  
  cart.push(product);
  updateCart();
}

// Remove product from cart
function removeFromCart(event) {
  const productId = event.target.getAttribute('data-id');
  cart = cart.filter(item => item.id != productId);
  updateCart();
}

// Clear cart
function clearCart() {
  cart = [];
  updateCart();
}

// Event listeners
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

clearCartButton.addEventListener('click', clearCart);
