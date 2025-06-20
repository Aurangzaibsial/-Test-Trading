import React from 'react';

const Navbar = ({ isLoggedIn, cartLength, showCart, handleLogout, IsLogin }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">FoodExpress</h1>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <>
            <button className="cart-button" onClick={showCart}>
              Cart ({cartLength})
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <div className="auth-toggle">
            <button
              className={`auth-switch-button ${isLogin ? 'active' : ''}`}
              onClick={() => IsLogin(true)}
            >
              Login
            </button>
            <button
              className={`auth-switch-button ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;