// Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cart from './cart'; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <>
      <div style={{ justifyContent: "space-between", textAlign: 'center' }}>
        <h1>Products</h1>
        <div>
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            products.map(product => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
                <button style={{cursor:'pointer',color:'pink',background:'black', border:'none',padding:15,borderRadius:10}} onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
        <button><Link to="/cart">Go to Cart</Link></button>
      </div>
      <Cart cart={cart} />
    </>
  );
};

export default Products;
