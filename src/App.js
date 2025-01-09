import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import ServicesPage from './components/ServicesPage';
import RestaurantRegistration from './components/RestaurantRegistration';
import AddMenu from './components/AddMenu';
import backgroundImage from './images/date-night-bg.webp';
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/sign-up/SignUp";

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

const AppContent = () => {
    const location = useLocation();

    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        backgroundAttachment: 'fixed',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const signUpStyle = {
        all: 'unset', /* Unsets all inherited styles */
        width: '100%',
        height: '100%',
        /* Add any custom styles for the SignUp page */
    };

    return (
        <>
            {/* Render SignUp page outside the main container */}
            {location.pathname !== '/signup' && (
                <div className="App" style={appStyle}>
                    {/* Render Header only if the current path is not /signup */}
                    <Header />

                    {/* Routes */}
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/registration" element={<UserForm />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/register-restaurant" element={<RestaurantRegistration />} />
                        <Route path="/add-menu/:type" element={<AddMenu />} />
                        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
                    </Routes>
                </div>
            )}

            {/* Render the SignUp page outside the App container */}
            {location.pathname === '/signup' && (
                <div style={signUpStyle}>
                    <SignUp disableCustomTheme={false} />
                </div>
            )}
        </>
    );
};

export default App;
