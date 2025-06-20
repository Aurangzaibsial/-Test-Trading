import React, { useState, useEffect } from 'react';
import './Transtion.css'; // Import your CSS file

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);
    return () => clearTimeout(timer); // Clear the timeout on unmount
  }, []);

  return (
    <div>
      {showWelcome && (
        <div className="welcome-message">
          Welcome to our app!
        </div>
      )}
      {/* Your main content here */}
    </div>
  );
}

export default App;