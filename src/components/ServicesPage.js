import React, { useState } from "react";

function ServicesPage() {
  const [activeTile, setActiveTile] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    food: "",
    drink: "",
    arts: "",
    social: "",
    parks: "",
    shopping: "",
  });

  const categories = [
    {
      name: "Food",
      key: "food",
      options: ["Italian", "Chinese", "Indian", "Mexican"],
      image: "../images/food-tile.gif", // Replace with actual image path
      description:
        "Explore a variety of cuisines to tantalize your taste buds.",
    },
    {
      name: "Drink",
      key: "drink",
      options: ["Wine", "Cocktail", "Mocktail", "Juice"],
      image: "/images/drink-tile.gif", // Replace with actual image path
      description: "Find the perfect drink to complement your evening.",
    },
    {
      name: "Arts & Entertainment",
      key: "arts",
      options: [
        "Live Music",
        "Dance Performance",
        "Movie Screening",
        "Theater",
      ],
      image: "/images/arts-tile.gif", // Replace with actual image path
      description: "Enjoy live performances and cultural experiences.",
    },
    {
      name: "Social Gatherings",
      key: "social",
      options: ["Dinner Party", "Picnic", "Game Night", "Barbecue"],
      image: "/images/social-tile.gif", // Replace with actual image path
      description: "Host or join a gathering for a memorable experience.",
    },
    {
      name: "Parks & Recreation",
      key: "parks",
      options: ["Nature Walk", "Beach Visit", "Hiking", "Botanical Garden"],
      image: "/images/parks-tile.gif", // Replace with actual image path
      description: "Reconnect with nature through outdoor activities.",
    },
    {
      name: "Shopping",
      key: "shopping",
      options: ["Mall", "Boutique", "Online", "Street Market"],
      image: "/images/shopping-tile.gif", // Replace with actual image path
      description:
        "Find the best places to shop for fashion, gadgets, and more.",
    },
  ];

  const handleTileClick = (category) => {
    setActiveTile((prev) => (prev === category ? null : category));
  };

  const handleDropdownChange = (category, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const pageStyle = {
    padding: "40px",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
    backgroundColor: "#f4f7f6",
    minHeight: "100vh",
  };

  const tileContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Ensure 3 tiles per row
    gap: "20px",
    marginTop: "30px",
    padding: "20px",
  };

  const tileStyle = (image) => ({
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    cursor: "pointer",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
    height: activeTile ? "300px" : "300px",
    display: "contents",
    position: "relative",
    margin: 0,
    padding: 0,
  });

  const activeTileStyle = (image) => ({
    backgroundImage: tileStyle(image),
    height: "450px",
    border: "2px solid #4CAF50",
    boxShadow: "0 4px 12px rgba(76, 175, 80, 0.4)",
  });

  const tileContentStyle = {
    padding: "15px",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#6c757d",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#5a6268",
  };

  const dropdownStyle = {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    fontSize: "1rem",
  };

  return (
    <div style={pageStyle}>
      <h2 style={{ fontSize: "2rem", color: "#2c3e50" }}>Our Services</h2>
      <p style={{ fontSize: "1.1rem", color: "#7f8c8d" }}>
        Choose the best service for your favorite activities:
      </p>
      <div style={tileContainerStyle}>
        {categories.map((category) => (
          <div
            key={category.key}
            style={
              activeTile === category.key
                ? activeTileStyle(category.image)
                : tileStyle(category.image)
            }
            onClick={() => handleTileClick(category.key)}
          >
            <div style={tileContentStyle}>
              <h3 style={{ fontSize: "1.2rem", margin: "10px 0" }}>
                {category.name}
              </h3>
              <p style={{ fontSize: "0.9rem" }}>{category.description}</p>
              {activeTile === category.key && (
                <select
                  value={selectedOptions[category.key]}
                  onChange={(e) =>
                    handleDropdownChange(category.key, e.target.value)
                  }
                  style={dropdownStyle}
                  onClick={(e) => e.stopPropagation()}
                >
                  <option value="">Select an option</option>
                  {category.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              <button
                style={buttonStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    buttonHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = buttonStyle.backgroundColor)
                }
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
