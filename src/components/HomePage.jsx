import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './homepage.css';

const HomePage = () => {
  // State to store the username
  const [username, setUsername] = useState('');

  // Effect to run on component mount to get username from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Function to handle setting username in localStorage
  const handleSetUsername = (newUsername) => {
    localStorage.setItem('username', newUsername);
    setUsername(newUsername);
  };

  // Example of setting username (replace this with your actual logic)
  // This could be part of a login process or wherever you get the username
  // For example purposes, it's set as 'test'
  useEffect(() => {
    handleSetUsername('testUser');
  }, []);

  // Browser detection logic
  useEffect(() => {
    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      const browsers = [
        { name: 'Firefox', string: 'Firefox' },
        { name: 'Chrome', string: 'Chrome' },
        { name: 'Safari', string: 'Safari' },
        { name: 'Opera', string: 'Opera' },
        { name: 'Edge', string: 'Edge' },
        { name: 'IE', string: 'Trident' }
        // Add more browsers as needed
      ];

      const detectedBrowser = browsers.find(browser => userAgent.indexOf(browser.string) !== -1);

      if (detectedBrowser) {
        document.body.classList.add(detectedBrowser.name);
      }
    };

    detectBrowser();
  }, []);

  return (
    <div className = 'home-page'>
    <div className="main">
      <div className="dashboard">
        <h1>Dashboard</h1>
        <ul className="dashboard-list row align-items-center justify-content-center">
          <li key="user">
            <div className="dashboard-item">
              <img style = {{width: "75px", height: "75px"}} src="https://th.bing.com/th?id=OIP.cS-Y_XOsZXTltLGPmuEbfgHaGJ&w=274&h=227&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="logo-image" />
              <h2>User</h2>
              <div>
                <p className="username-text">{username}</p>
              </div>
            </div>
          </li>
          <li key = "animals">
            <Link to="/animals">
            <div className="dashboard-item" >
              <img src="https://th.bing.com/th?id=OIP.0mZyqFbX5oC6d5L0bK7RdwHaHa&w=300&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="logo-image" />
              <h2>See our animals</h2>
              <div>
                <p className="animals-text">Click here to check out our animals!</p>
              </div>
            </div>
            </Link>
          </li>
          <li key="bookings">
            <div className="dashboard-item">
              <img src="https://th.bing.com/th?id=OIP.0mZyqFbX5oC6d5L0bK7RdwHaHa&w=300&h=300&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" className="logo-image" />
              <h2>Create a Booking</h2>
              <div>
                <p className="booking-text">Get a booking for the zoo now!</p>
              </div>
            </div>
          </li>
          {/* Add more list items as needed */}
        </ul>
        <img src="https://www.yudiz.com/codepen/glassmorphism/shape-1.png" className="shape-1" alt="Shape 1 image" />
        <img src="https://www.yudiz.com/codepen/glassmorphism/shape-2.png" className="shape-2" alt="Shape 2 image" />
        <img src="https://www.yudiz.com/codepen/glassmorphism/shape-3.png" className="shape-3" alt="Shape 3 image" />
        <img src="https://www.yudiz.com/codepen/glassmorphism/shape-4.png" className="shape-4" alt="Shape 4 image" />
        <img src="https://www.yudiz.com/codepen/glassmorphism/shape-5.png" className="shape-5" alt="Shape 5 image" />
        <div className="note">
          <p>
            <strong>Note:</strong><br />
            If you are a Firefox user, please note that Firefox does not support backdrop-filter by default.
            To enable this option:
            <br />
            1. Open a new Firefox tab and type <span>about:config</span> in the search bar. Click "accept the risk and continue".
            <br />
            2. Search for <span>“layout.css.backdrop-filter.enabled”</span> and set its value to <span>true</span>.
            Similarly, set <span>"gfx.webrender.all"</span> to <span>true</span> and check CodePen again.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;

