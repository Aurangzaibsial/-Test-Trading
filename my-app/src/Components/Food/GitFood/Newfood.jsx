import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAuthForm, setShowAuthForm] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [authData, setAuthData] = useState({ email: '', password: '', name: '' });

    useEffect(() => {
        const mockFoods = [
            {
                _id: "1",
                name: "Pizza Margherita",
                description: "Classic delight with tomatoes and mozzarella.",
                price: 9.99,
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "2",
                name: "Cheeseburger",
                description: "Juicy beef patty with cheese and veggies.",
                price: 7.49,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "3",
                name: "Pasta Alfredo",
                description: "Creamy pasta with parmesan cheese.",
                price: 11.99,
                image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "4",
                name: "Grilled Sandwich",
                description: "Grilled veggie sandwich with cheese.",
                price: 6.5,
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "5",
                name: "Chicken Biryani",
                description: "Spiced rice with marinated chicken.",
                price: 8.99,
                image: "https://images.unsplash.com/photo-1633918920866-7a603b5b0c0a?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "6",
                name: "Tandoori Chicken",
                description: "Roasted chicken with Indian spices.",
                price: 10.25,
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "7",
                name: "French Fries",
                description: "Crispy golden fries with ketchup.",
                price: 3.99,
                image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "8",
                name: "Shawarma",
                description: "Grilled meat wrapped in flatbread.",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60"
            },
            {
                _id: "9",
                name: "Chocolate Cake",
                description: "Rich moist chocolate dessert.",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=60"
            }
        ];
        setFoods(mockFoods);
    }, []);

    const addToCart = (food) => {
        if (!isLoggedIn) {
            setShowAuthForm(true);
            return;
        }
        setCart([...cart, food]);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };

    const handlePayment = () => {
        alert("Payment successful! Your order is placed 🎉");
        setCart([]);
        setShowCart(false);
    };

    const handleAuthChange = (e) => {
        const { name, value } = e.target;
        setAuthData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAuthSubmit = (e) => {
        e.preventDefault();
        console.log('Would send to backend:', {
            endpoint: isLogin ? '/login' : '/signup',
            data: authData
        });
        setIsLoggedIn(true);
        setShowAuthForm(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setShowAuthForm(true);
        setIsLogin(true);
        setCart([]);
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className="navbar">
                <h1 className="navbar-title">FoodExpress</h1>
                <div className="auth-buttons">
                    {isLoggedIn ? (
                        <>
                            <button className="cart-button" onClick={() => setShowCart(!showCart)}>
                                Cart ({cart.length})
                            </button>
                            <button className="logout-button" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <div className="auth-toggle">
                            <button className={`auth-switch-button ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
                            <button className={`auth-switch-button ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Authentication Form */}
            {showAuthForm && !isLoggedIn && (
                <div className="auth-overlay">
                    <div className="auth-form-container">
                        <form onSubmit={handleAuthSubmit} className="auth-form">
                            <h2>{isLogin ? 'Login to FoodExpress' : 'Create an Account'}</h2>

                            {!isLogin && (
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="name" value={authData.name} onChange={handleAuthChange} required placeholder="Enter your name" />
                                </div>
                            )}

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={authData.email} onChange={handleAuthChange} required placeholder="Enter your email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={authData.password} onChange={handleAuthChange} required minLength="6" placeholder="Enter your password" />
                            </div>

                            <button type="submit" className="auth-submit-button">
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content */}
            {isLoggedIn && (
                <>
                    <div className="welcome-message">
                        <h2 className="welcome-title">🍽️ Welcome to FoodExpress!</h2>
                        <p>Enjoy fast delivery of your favorite meals at the best prices.</p>
                    </div>

                    {showCart && (
                        <div className="cart-popup">
                            <h3>Your Cart</h3>
                            {cart.length === 0 ? (
                                <p className="empty-cart">Your cart is empty</p>
                            ) : (
                                <>
                                    <ul className="cart-items">
                                        {cart.map((item, index) => (
                                            <li key={index} className="cart-item">
                                                <div className="cart-item-info">
                                                    <strong>{item.name}</strong> - ${item.price}
                                                </div>
                                                <button onClick={() => removeFromCart(index)} className="remove-button">Remove</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="cart-summary">
                                        <p className="cart-total">Total: ${totalPrice}</p>
                                        <button onClick={handlePayment} className="pay-button">Pay Now</button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <div className="food-grid">
                        {foods.map(food => (
                            <div key={food._id} className="food-card">
                                <div className="food-image-container">
                                    <img
                                        src={food.image}
                                        alt={food.name}
                                        className="food-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/300x200?text=Food+Image";
                                        }}
                                    />
                                </div>
                                <div className="food-info">
                                    <h2 className="food-name">{food.name}</h2>
                                    <p className="food-description">{food.description}</p>
                                    <div className="food-footer">
                                        <p className="food-price">${food.price}</p>
                                        <button onClick={() => addToCart(food)} className="add-to-cart-button">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Footer */}
            {isLoggedIn && (
                <footer className="app-footer">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h3>FoodExpress</h3>
                            <p>Delicious meals delivered fast to your doorstep</p>
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer-section contact">
                            <h4>Contact Us</h4>
                            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                            <p><i className="fas fa-envelope"></i> contact@foodexpress.com</p>
                        </div>

                        <div className="footer-section location">
                            <h4>Our Location</h4>
                            <p><i className="fas fa-map-marker-alt"></i> <a href="https://www.google.com/maps?q=123+Food+Street+New+York" target="_blank" rel="noopener noreferrer">123 Food Street, Culinary District, NY 10001</a></p>
                        </div>

                        <div className="footer-section hours">
                            <h4>Opening Hours</h4>
                            <p>Monday - Friday: 10am - 10pm</p>
                            <p>Saturday - Sunday: 11am - 11pm</p>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} FoodExpress. All rights reserved.</p>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default App;
