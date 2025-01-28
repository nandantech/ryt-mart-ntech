import React from "react";
import "./App.less";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import RestaurantRegistration from "./components/RestaurantRegistration";
import AddMenu from "./components/AddMenu";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import SignUp from "./components/sign-up/SignUp";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import EmailVerification from "./components/EmailVerification/EmailVerification";
import SignIn from "./components/sign-in/SignIn";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Render SignUp page outside the main container */}
      {location.pathname !== "/signup" && (
        <div className="app-container">
          <Navbar />
          <div className={"content-container"}>
            {/* Render Navbar only if the current path is not /signup */}

            {/* Routes */}
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/registration" element={<UserForm />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/email-verification" element={<EmailVerification />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/register-restaurant"
                element={<RestaurantRegistration />}
              />
              <Route path="/add-menu/:type" element={<AddMenu />} />
              <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
            </Routes>
          </div>
          <Footer />
        </div>
      )}

      {/* Render the SignUp page outside the App container */}
      {location.pathname === "/signup" && <SignUp />}
    </>
  );
};

export default App;
