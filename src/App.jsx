import React, { useState } from 'react';

function ProductForm() {
  const [form, setForm] = useState({ name: '', price: '', type: '' }); // Single form state
  const [cart, setCart] = useState([]); // State to hold cart items
  const [isFormVisible, setFormVisible] = useState(false); // State to manage form visibility

  // Handle form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Handle dropdown selection change
  const handleSelectionChange = (event) => {
    setForm({ ...form, type: event.target.value });
  };

  // Add item to cart
  const handleAddToCart = () => {
    if (form.name && form.price && form.type) {
      setCart([...cart, { ...form }]);
      setForm({ name: '', price: '', type: '' }); 
      setFormVisible(false); 
    } else {
      alert('Please fill out all fields before adding to the cart.');
    }
  };

  // Remove item from the cart
  const handleDeleteFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Product Form</h2>
      <select
        value={form.type}
        onChange={handleSelectionChange}
      >
        <option value="">Select</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
      </select>

      {form.type && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Product Price"
            value={form.price}
            onChange={handleInputChange}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}

      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.type}: {item.name} - ${item.price}
              <button onClick={() => handleDeleteFromCart(index)}>Delete</button>
              <button onClick={() => setFormVisible(true)}>Add</button>
            </li>
          ))}
        </ul>
      )}

      {isFormVisible && (
        <div>
          <h3>Add New Product</h3>
          <select
            value={form.type}
            onChange={handleSelectionChange}
          >
            <option value="">Select</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
          </select>

          {form.type && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={form.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                value={form.price}
                onChange={handleInputChange}
              />
              <button onClick={handleAddToCart}>Add to Cart</button>
              <button onClick={() => setFormVisible(false)}>Cancel</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductForm;
