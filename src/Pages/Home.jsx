import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function getUser() {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

function Home() {
  const [loggedInUser, setLoggedInUser] = useState(getUser);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggedInUser(null);
  };

  useEffect(() => {
    // Update user state when the component mounts
    setLoggedInUser(getUser());
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      {loggedInUser ? (
        <>
          <h4>Hello, {loggedInUser.name}</h4>
          <p>Email: {loggedInUser.email}</p>
          {/* Add other user details as needed */}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>Welcome to the Home Page!</p>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </>
  );
}

export default Home;
