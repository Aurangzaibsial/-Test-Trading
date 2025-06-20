import React, { useState } from 'react';
import './Card.css';
import pic2 from './image/pizza.avif';
import pic3 from './image/download5.jpg';
import pic4 from './image/download12.jpg';
import pic5 from './image/eat1.jpg';

function Cards() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
      // If item already in cart, increase quantity
      const updatedCart = cartItems.map(cartItem =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      // Else, add new item
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (title) => {
    const updatedCart = cartItems.filter(item => item.title !== title);
    setCartItems(updatedCart);
  };

  const cardData = [
    { img: pic2, title: "Buy Pizza", text: "This is some important text" },
    { img: pic3, title: "Buy Fries", text: "This is some important text" },
    { img: pic4, title: "Buy Burger", text: "This is some important text" },
    { img: pic3, title: "Buy Drink", text: "This is some important text" },
    { img: pic5, title: "Buy Roll", text: "This is some important text" },
    { img: pic5, title: "Buy Shawarma", text: "This is some important text" },
    { img: pic5, title: "Buy Sandwich", text: "This is some important text" },
    { img: pic5, title: "Buy Wrap", text: "This is some important text" },
  ];

  return (
    <div>
      {/* Cart Section */}
      <div style={{ padding: '10px', fontWeight: 'bold' }}>
        <button className="add-to-cart-btn">
          🛒 Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
        </button>

        {cartItems.length > 0 && (
          <div className="cart-list">
            <h4>Cart Items:</h4>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.title} (x{item.quantity}) &nbsp;
                  <button className="remove-btn" onClick={() => handleRemoveFromCart(item.title)}>
                    Removeitem
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* First Row */}
      <div className="F">
        {cardData.slice(0, 4).map((item, index) => (
          <div className="h" key={index}>
            <img src={item.img} alt='food' height="120px" /> <br />
            {item.title} <br /><br />
            {item.text} <br /><br />
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex23">
        {cardData.slice(4).map((item, index) => (
          <div className="hh" key={index + 4}>
            <img src={item.img} alt='food' height="120px" /> <br />
            {item.title} <br /><br />
            {item.text} <br /><br />
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
