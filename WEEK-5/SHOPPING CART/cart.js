// Select elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const totalPriceElement = document.getElementById('total-price');
const clearCartButton = document.querySelector('.clear-cart');

let cart = [];

// Product data with image URLs
const products = [
  { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 20.00, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 30.00, image: 'https://via.placeholder.com/150' }
];

// Function to update the cart display
function updateCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      ${item.name} - $${item.price.toFixed(2)}
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
