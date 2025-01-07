import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function AddMenu() {
  const { type } = useParams(); // Get the type from the URL
  const [menuItem, setMenuItem] = useState({
    name: '',
    description: '',
    price: '',
    sides: '', // Add a field for sides
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (menuItem.name && menuItem.price) {
      // Logic to add the menu item to the specific menu (breakfast, lunch, or dinner)
      console.log(`Added ${type} menu item:`, menuItem);

      // Redirect back to the restaurant registration page
      navigate('/');
    }
  };

  return (
    <div style={{ marginTop: '20px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{type.charAt(0).toUpperCase() + type.slice(1)} Menu</h3>
      <form onSubmit={handleSubmit}>
        {/* Item Name Field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Item Name</label>
          <input
            type="text"
            name="name"
            value={menuItem.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
        </div>

        {/* Description Field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Description</label>
          <input
            type="text"
            name="description"
            value={menuItem.description}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
        </div>

        {/* Price Field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Price</label>
          <input
            type="number"
            name="price"
            value={menuItem.price}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
        </div>

        {/* Sides Field */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px' }}>Sides</label>
          <input
            type="text"
            name="sides"
            value={menuItem.sides}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
          />
          <small style={{ display: 'block', marginTop: '5px', color: '#6c757d' }}>
            Separate sides with commas (e.g., Fries, Salad, Garlic Bread).
          </small>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '6px', border: 'none', backgroundColor: '#6c757d', color: '#fff', fontSize: '1rem' }}>
          Add Item to {type.charAt(0).toUpperCase() + type.slice(1)} Menu
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
