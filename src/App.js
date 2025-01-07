import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import ServicesPage from './components/ServicesPage';
import RestaurantRegistration from './components/RestaurantRegistration';
import AddMenu from './components/AddMenu';
import backgroundImage from './images/date-night-bg.webp';
import backgroundHome from './images/date-night-home.webp';

function App() {

  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    backgroundAttachment: 'fixed',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(44, 62, 80, 0.85)', // Professional dark background
    padding: '15px 0',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.3rem',
    margin: '0 20px',
    fontFamily: 'Poppins, sans-serif',
    letterSpacing: '1px',
    transition: 'color 0.3s ease, transform 0.3s ease',
  };

  const linkHoverStyle = {
    color: '#f39c12', // Golden hover color
    transform: 'scale(1.05)',
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        {/* Navigation Bar */}
        <nav style={navStyle}>
          <Link
            to="/home"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = linkStyle.color}
          >
            Home
          </Link>
          <Link
            to="/services"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = linkStyle.color}
          >
            Services
          </Link>
          <Link
            to="/registration"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = linkStyle.color}
          >
            Sign Up
          </Link>
          <Link
            to="/register-restaurant"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = linkStyle.color}
          >
            Register Restaurant
          </Link>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
            onMouseOut={(e) => e.target.style.color = linkStyle.color}
          >
            Log Out
          </Link>
        </nav>

        {/* Image Section */}
        <div
          style={{
            width: '100%',
            height: 'auto',
            backgroundImage: `url(${backgroundHome})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            marginBottom: '30px',
          }}
        ></div>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<UserForm />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/register-restaurant" element={<RestaurantRegistration />} />
          <Route path="/add-menu/:type" element={<AddMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
