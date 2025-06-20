import React from 'react'
import { useState } from 'react';
import './1.css'
import pic from './image/logo.jpg'
import Form from '../Form'
import Cards from './Cards';

function Navbar1() {
  const [showForm, setShowForm] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowHome(false); 
  };

  const toggleHome = () => {
    setShowHome(!showHome);
    setShowForm(false); 
  };

  return (
    <div>
      <div className="list123">
        <div className="Go">
          <img src={pic} alt="pic" height={80} />
        </div>
        
        <div className="onee11">
          <button onClick={toggleHome}>home</button>
          <button onClick={toggleForm}>signup</button>
          <button>signin</button>
          <button>Product</button>
          <button>logout</button>
        </div>
      </div>
      
      {showForm && <Form />}
      {showHome && (
        <div className="home4">
          <h1>Welcome Home!</h1>
          <p>This is your home page content.</p>
          
          <Cards />
        </div>
      )}
    </div>
  )
}

export default Navbar1