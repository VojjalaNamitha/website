import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div style={{textAlign:'center',padding:5,margin:0,justifyContent:'space-between',position:'sticky',top:0,background:'black'}}>
      <button style={{background:'cream',fontSize:16, border:'none',padding :10,borderRadius:4,fontWeight:'bold'}}><Link to={`/`}>Home</Link></button>
      <button style={{background:'cream',fontSize:16, border:'none',padding :10,borderRadius:4,fontWeight:'bold',margin:30}}><Link to={`/products`} >products</Link></button>
      <button style={{background:'cream',fontSize:16, border:'none',padding :10,borderRadius:4,fontWeight:'bold',margin:30}}><Link to={`/signUp`} >Signup</Link></button>
      <button style={{background:'cream',fontSize:16, border:'none',padding :10,borderRadius:4,fontWeight:'bold',}}><Link to={`/cart`} >Cart</Link></button>
      <h1 style={{color:'ButtonShadow'}}>Welcome To Our Store!</h1>
    </div>
    </>
  )
}

export default Header