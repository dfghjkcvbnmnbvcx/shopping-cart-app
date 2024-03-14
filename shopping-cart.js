// shopping-cart.js

let cart = [];

function addToCart(product) {
  cart.push(product);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
}

function getTotal() {
  return cart.reduce((total, item) => total + item.price, 0);
}

module.exports = {
  cart,
  addToCart,
  removeFromCart,
  getTotal
};
