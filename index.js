// index.js

const products = require('./products');
const shoppingCart = require('./shopping-cart');
const discounts = require('./discounts');

// Example usage
shoppingCart.addToCart(products[0]);
shoppingCart.addToCart(products[1]);
shoppingCart.addToCart(products[2]);

console.log('Cart:', shoppingCart.cart);
console.log('Total:', shoppingCart.getTotal());

const totalWithDiscount = discounts.applyDiscount(shoppingCart.getTotal(), 10);
console.log('Total with discount:', totalWithDiscount);
