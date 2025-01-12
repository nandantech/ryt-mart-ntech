import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting data.");
    }
  };

  // Inline styles for background image and the form
  const pageStyles = {
    // backgroundImage: 'url("./images/date-night-bg.webp")', // Add the relative path to your image
    backgroundSize: "cover", // Ensure it covers the entire screen
    backgroundPosition: "center",
    height: "100vh",
    // display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyles = {
    backgroundColor: "rgba(245, 245, 245, 0.9)", // Light gray with slight opacity
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //maxWidth: "850px",
    margin: "auto",
    fontFamily: "Poppins, sans-serif",
  };

  const inputStyles = {
    backgroundColor: "#f0f0f0", // Light gray input background
    borderColor: "#ccc", // Light gray border
    borderRadius: "5px",
  };

  const headingStyles = {
    color: "rgb(75 68 68);", // Medium gray for the heading
    textAlign: "center",
    marginBottom: "20px",
  };

  const labelStyles = {
    fontFamily: "Georgia, serif",
    color: "#555", // Darker gray for labels
    marginRight: "10px",
  };

  return (
    <div style={pageStyles}>
      <div className="container mt-5">
        <h2 style={headingStyles}>DN Inc. Reservation</h2>
        <form onSubmit={handleSubmit} style={formStyles}>
          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="firstName" style={labelStyles}>
                First Name
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="lastName" style={labelStyles}>
                Last Name
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label" style={labelStyles}>
                Gender
              </label>
            </div>
            <div className="col-md-8">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label
                  htmlFor="male"
                  className="form-check-label"
                  style={labelStyles}
                >
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="form-check-input"
                />
                <label
                  htmlFor="female"
                  className="form-check-label"
                  style={labelStyles}
                >
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="street" style={labelStyles}>
                Street Address
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="city" style={labelStyles}>
                City
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="state" style={labelStyles}>
                State
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="zip" style={labelStyles}>
                Zip Code
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="email" style={labelStyles}>
                Email
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="phone" style={labelStyles}>
                Phone Number
              </label>
            </div>
            <div className="col-md-8">
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyles}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-lg w-100 mt-4"
            style={{
              background: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1.1rem",
              padding: "12px 0",
            }}
          >
            Submit Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
