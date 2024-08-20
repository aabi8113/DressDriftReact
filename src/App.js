import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
import HomePage from './components/home/HomePage';
import ItemDetail from './components/itemDetail/ItemDetail';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Orders from './components/orders/Orders';
import Checkout from './components/checkout/Checkout';
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/signup/SignUpPage';

function App() {
  const { isAuthenticated } = useContext(GlobalContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Navigate to="/" />} />
              <Route path="/signup" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
