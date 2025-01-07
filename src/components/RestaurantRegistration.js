import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterRestaurant() {

  const navigate = useNavigate();
  
  const handleAddMenuFromTile = (type) => {
    navigate(`/add-menu/${type}`); // Redirect to the add menu page with the type as a parameter
  };
  
  const [restaurant, setRestaurant] = useState({
    name: '',
    location: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    cuisines: [],
    timings: [],
    holidays: [],
    hasBar: false,
    menus: {
        breakfast: [],
        lunch: [],
        dinner: [],
      },
    barMenus: [],
  });

  const [holidayInput, setHolidayInput] = useState('');
  const [cuisineInput, setCuisineInput] = useState('');
  const [timingInput, setTimingInput] = useState({ start: '', end: '' });

  const timeOptions = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
  ];

  const cuisineOptions = ['Indian', 'Mexican', 'Mediterranean', 'Chinese', 'Italian'];

  const handleAddHoliday = () => {
    if (holidayInput) {
      setRestaurant((prev) => ({
        ...prev,
        holidays: [...prev.holidays, holidayInput],
      }));
      setHolidayInput('');
    }
  };

  const handleCuisineAdd = () => {
    if (cuisineInput) {
      setRestaurant((prev) => ({
        ...prev,
        cuisines: [...prev.cuisines, cuisineInput],
      }));
      setCuisineInput('');
    }
  };

  const handleTimingAdd = () => {
    if (timingInput.start && timingInput.end) {
      setRestaurant((prev) => ({
        ...prev,
        timings: [
          ...prev.timings,
          `${timingInput.start} to ${timingInput.end}`,
        ],
      }));
      setTimingInput({ start: '', end: '' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Restaurant details:', restaurant);
    // Add further submission logic here
  };

  // Styling
  const tileStyle = {
    marginTop: '20px',
    backgroundColor: '#f8f9fa',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const sectionTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const menuListStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const menuItemStyle = {
    marginBottom: '8px',
  };

  // Styling
  const pageStyle = {
    //padding: '40px',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
    minHeight: '100vh',
  };

  const formStyle = {
    //maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'justify',
  };

  const fieldStyle = {
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    marginTop: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    marginBottom: '10px',
  };

  const dropdownStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#6c757d',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'block',
    margin: '0 auto',
  };

  const listStyle = {
    marginTop: '10px',
    paddingLeft: '20px',
  };

  const listItemStyle = {
    marginBottom: '5px',
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ fontSize: '2rem', color: '#2c3e50' }}>Register Restaurant</h2>
      <form style={formStyle} onSubmit={handleFormSubmit}>
        {/* Name */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            style={inputStyle}
            value={restaurant.name}
            onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
          />
        </div>

        {/* Location */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Location</label>
          <input
            type="text"
            style={inputStyle}
            placeholder="Street"
            value={restaurant.location.street}
            onChange={(e) =>
              setRestaurant((prev) => ({
                ...prev,
                location: { ...prev.location, street: e.target.value },
              }))
            }
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="City"
            value={restaurant.location.city}
            onChange={(e) =>
              setRestaurant((prev) => ({
                ...prev,
                location: { ...prev.location, city: e.target.value },
              }))
            }
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="State"
            value={restaurant.location.state}
            onChange={(e) =>
              setRestaurant((prev) => ({
                ...prev,
                location: { ...prev.location, state: e.target.value },
              }))
            }
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="ZIP"
            value={restaurant.location.zip}
            onChange={(e) =>
              setRestaurant((prev) => ({
                ...prev,
                location: { ...prev.location, zip: e.target.value },
              }))
            }
          />
        </div>

        {/* Cuisines */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Cuisines</label>
          <select
            style={dropdownStyle}
            value={cuisineInput}
            onChange={(e) => setCuisineInput(e.target.value)}
          >
            <option value="">Select a cuisine</option>
            {cuisineOptions.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleCuisineAdd} style={buttonStyle}>
            Add Cuisine
          </button>
          <ul style={listStyle}>
            {restaurant.cuisines.map((cuisine, index) => (
              <li key={index} style={listItemStyle}>
                {cuisine}
              </li>
            ))}
          </ul>
        </div>

        {/* Timings */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Timings</label>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <select
              value={timingInput.start}
              onChange={(e) =>
                setTimingInput((prev) => ({ ...prev, start: e.target.value }))
              }
              style={dropdownStyle}
            >
              <option value="">Start Time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <span>to</span>
            <select
              value={timingInput.end}
              onChange={(e) =>
                setTimingInput((prev) => ({ ...prev, end: e.target.value }))
              }
              style={dropdownStyle}
            >
              <option value="">End Time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={handleTimingAdd} style={buttonStyle}>
            Add Timing
          </button>
          <ul style={listStyle}>
            {restaurant.timings.map((timing, index) => (
              <li key={index} style={listItemStyle}>
                {timing}
              </li>
            ))}
          </ul>
        </div>

        {/* Holidays */}
        <div style={fieldStyle}>
          <label style={labelStyle}>Holidays</label>
          <input
            type="date"
            style={inputStyle}
            value={holidayInput}
            onChange={(e) => setHolidayInput(e.target.value)}
          />
         
          <button type="button" onClick={handleAddHoliday} style={buttonStyle}>
            Add Holiday
          </button>
          <ul style={listStyle}>
            {restaurant.holidays.map((holiday, index) => (
              <li key={index} style={listItemStyle}>
                {holiday}
              </li>
            ))}
          </ul>
        </div>
        
        {['breakfast', 'lunch', 'dinner'].map((type) => (
          <div key={type} style={tileStyle}>
            <h3 style={sectionTitleStyle}>{type.charAt(0).toUpperCase() + type.slice(1)} Menu</h3>
            <ul style={menuListStyle}>
              {restaurant.menus[type].map((item, index) => (
                <li key={index} style={menuItemStyle}>
                  {item.name} - {item.description} (${item.price})
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => handleAddMenuFromTile(type)}
              style={{ margin: '0px auto',
                display: 'block'}}
            >
              Add {type.charAt(0).toUpperCase() + type.slice(1)} Item
            </button>
          </div>
        ))}

        {/* Has Bar */}
        <div style={fieldStyle}>
          <label style={labelStyle}>
            <input
              type="checkbox"
              checked={restaurant.hasBar}
              onChange={(e) =>
                setRestaurant((prev) => ({ ...prev, hasBar: e.target.checked }))
              }
            />
              Bar Included
          </label>
        </div>

        <button type="submit" style={buttonStyle}>
          Register Restaurant
        </button>
      </form>
    </div>
  );
}

export default RegisterRestaurant;
