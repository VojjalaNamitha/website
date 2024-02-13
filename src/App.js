import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './home.js'; 
import Products from './products.js';
import Signup from './signup.js';
import Login from './Login.js';
import Header from './header.js';
import Cart from './cart.js';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
    </BrowserRouter>

  </>)
}

export default App