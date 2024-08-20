// src/components/login/LoginPage.js
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await fetch('https://dress-drift-backend.vercel.app/api/dresses/users');
        const users = await response.json();

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
          login(); 
          navigate('/');
        } else {
          alert('Invalid username or password');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Failed to log in. Please try again later.');
      }
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
