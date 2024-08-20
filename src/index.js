// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalProvider } from './context/GlobalState'; // Import your GlobalProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider> {/* Wrap the App component with GlobalProvider */}
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
