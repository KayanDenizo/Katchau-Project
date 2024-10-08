// Get the products list, sidebar container, and cart items list
const productsList = document.getElementById('products');
const sidebarContainer = document.getElementById('sidebar');
const cartItemsList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

// Create an empty cart object
let cart = {};

// Add event listeners to add to cart buttons
productsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const product = e.target.parentNode.textContent;
    const price = parseFloat(product.split('- ')[1]);
    addProductToCart(product, price);
  }
});

// Add product to cart
function addProductToCart(product, price) {
  if (!cart[product]) {
    cart[product] = { quantity: 1, price };
  } else {
    cart[product].quantity++;
  }
  updateCart();
}

// Remove product from cart
function removeProductFromCart(product) {
  if (cart[product]) {
    cart[product].quantity--;
    if (cart[product].quantity <= 0) {
      delete cart[product];
    }
  }
  updateCart();
}

// Update cart display
function updateCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  for (const product in cart) {
    const item = document.createElement('li');
    item.textContent = `${product} x ${cart[product].quantity} - $${cart[product].price * cart[product].quantity}`;
    cartItemsList.appendChild(item);
    total += cart[product].price * cart[product].quantity;
  }
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  // Show the sidebar
  sidebarContainer.style.display = 'block';
}

// Checkout button event listener
document.getElementById('checkout').addEventListener('click', () => {
  alert('Checkout successful!');
  // You can add your own checkout logic here
});