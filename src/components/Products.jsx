// src/components/Products.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Products.css'; // Import your CSS styles

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from backend API
  useEffect(() => {
    axios
      .get('https://ecomm-backend-x8ss.onrender.com/api/products') // Backend endpoint for fetching products
      .then((response) => {
        setProducts(response.data); // Set products to state
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="products-container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div className="product" key={product._id}>
                              {product.image && <img src={product.image} alt={product.name} />}

              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
