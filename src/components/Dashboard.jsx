import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'; 

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleViewProducts = () => {
    navigate('/products');
  };

  return (
    <div className="dashboard">
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard!</h2>
      <p>You are logged in.</p>
      
      <button onClick={handleViewProducts}>View Products</button>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
};

export default Dashboard;
