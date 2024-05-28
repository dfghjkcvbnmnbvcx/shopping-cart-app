# Shopping Cart App

<p>Welcome to the <strong>Shopping Cart App</strong>. This application provides a simple and efficient way to manage items in a shopping cart, allowing users to add, remove, and update items seamlessly.</p>

## Features

<ul>
  <li>Add items to the cart</li>
  <li>Remove items from the cart</li>
  <li>Update item quantities</li>
  <li>Calculate total cost</li>
  <li>Persist cart items across sessions</li>
</ul>

## Installation

<pre>
<code>
npm install shopping-cart-app
</code>
</pre>

## Usage

<p>First, import the required functions from the library:</p>

<pre>
<code>
const { addItem, removeItem, updateItemQuantity, calculateTotal, getCartItems } = require('shopping-cart-app');
</code>
</pre>

### Adding Items

<p>Use the <code>addItem</code> function to add an item to the cart:</p>

<pre>
<code>
addItem('item1', 2, 9.99)
  .then(cart => console.log(cart))
  .catch(error => console.error(error));
</code>
</pre>

### Removing Items

<p>Use the <code>removeItem</code> function to remove an item from the cart:</p>

<pre>
<code>
removeItem('item1')
  .then(cart => console.log(cart))
  .catch(error => console.error(error));
</code>
</pre>
