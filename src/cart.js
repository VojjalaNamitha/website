import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item) => {
    const isItemInCart = cart.some(cartItem => cartItem.title === item.title);

    if (!isItemInCart) {
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    } else {
      setCart(prevCart =>
        prevCart.map(cartItem =>
          cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    }
  };

  const decreaseItemQuantity = (item) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.title === item.title && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    );
  };

  
  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding:0,margin:100,alignItems:'center',background: '#f9f9f1',borderRadius:16,}}>
            {cart.map((item, index) => (
              <li key={index} style={{ margin: '20px auto', maxWidth: '400px', textAlign: 'center',fontWeight:'600' }}>
                <img src={item.image} alt={item.title} style={{ maxWidth: '100px' }} />
                <div >{item.title} - ${item.price * item.quantity}</div>
                <div>Quantity: {item.quantity}</div>
                <div style={{textAlign:'center', display:'flex',justifyContent:'space-between'}}>
                <button style={{background:'#000',color:'white', padding:10,border:'none',borderRadius:4,cursor:'pointer'}} onClick={() => decreaseItemQuantity(item)}>-</button>
                <button style={{background:'#000',color:'white', padding:10,border:'none',borderRadius:4, cursor:'pointer'}} onClick={() => addItemToCart(item)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Items: {calculateTotalQuantity()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
