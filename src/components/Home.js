import React from 'react';
import backgroundHome from '../images/date-night-home.webp'; // Import the image

function Home() {
  const imageStyle = {
    width: '100%', // Make the image fill the container
    height: 'auto', // Maintain the aspect ratio
  };

  const headingStyle = {
    fontFamily: "'Pacifico', cursive",
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50', // Dark and professional color
    textAlign: 'center',
    letterSpacing: '1px',
    marginTop: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div>
       <h1 style={headingStyle}>Welcome to DN Inc.</h1>
      <img src={backgroundHome} alt="DN" style={imageStyle} />
    </div>
  );
}

export default Home;
