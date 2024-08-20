// src/components/signup/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (username && password) {
      try {
        const response = await fetch('https://dress-drift-backend.vercel.app/api/dresses/newuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          alert('Sign up successful! Please log in.');
          navigate('/login');
        } else {
          alert('Failed to sign up. Please try again.');
        }
      } catch (error) {
        console.error('Error signing up:', error);
        alert('Failed to sign up. Please try again later.');
      }
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
