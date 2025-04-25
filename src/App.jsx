import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppWrapper = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
