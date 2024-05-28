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

### Updating Item Quantities

<p>Use the <code>updateItemQuantity</code> function to update the quantity of an item in the cart:</p>

<pre>
<code>
updateItemQuantity('item1', 3)
  .then(cart => console.log(cart))
  .catch(error => console.error(error));
</code>
</pre>

### Calculating Total Cost

<p>Use the <code>calculateTotal</code> function to calculate the total cost of items in the cart:</p>

<pre>
<code>
calculateTotal()
  .then(total => console.log('Total cost:', total))
  .catch(error => console.error(error));
</code>
</pre>

### Getting Cart Items

<p>Use the <code>getCartItems</code> function to get all items in the cart:</p>

<pre>
<code>
getCartItems()
  .then(cart => console.log(cart))
  .catch(error => console.error(error));
</code>
</pre>

## API

### addItem(name, quantity, price)

<p>Adds an item to the cart.</p>

<ul>
  <li><strong>name</strong> (string): The name of the item.</li>
  <li><strong>quantity</strong> (number): The quantity of the item.</li>
  <li><strong>price</strong> (number): The price of the item.</li>
  <li><strong>Returns</strong>: A promise that resolves to the updated cart.</li>
</ul>
