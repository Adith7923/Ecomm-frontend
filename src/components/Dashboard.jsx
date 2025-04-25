import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Handle redirect to the products page
  const handleViewProducts = () => {
    navigate('/products');
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard!</h2>
      <p>You are logged in.</p>
      
      {/* Button to view products */}
      <button onClick={handleViewProducts}>View Products</button>
      
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
