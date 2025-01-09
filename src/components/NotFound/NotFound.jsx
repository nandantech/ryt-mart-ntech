import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.less"; // Make sure to create a corresponding .less file

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Oops! The page you’re looking for doesn’t exist.</p>
                <Link to="/home" className="not-found-link">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
