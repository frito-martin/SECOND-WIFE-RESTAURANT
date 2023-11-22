// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './menu.jsx';
import Order from './order.jsx';
import SignIn from './signin.jsx';
import AdminDashboard from './AdminDashboard';
import SignUp from './signup.jsx';

const Home = () => <h2>Welcome to the Restaurant App!</h2>;

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    // Handle user authentication (backend logic)
    setUser(userData);
  };

  const handleSignOut = () => {
    // Handle user sign-out
    setUser(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              {user ? (
                <>
                  {user.isAdmin && (
                    <li>
                      <Link to="/admin">Admin Dashboard</Link>
                    </li>
                  )}
                  <button onClick={handleSignOut}>Sign Out</button>
                </>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order user={user} />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
