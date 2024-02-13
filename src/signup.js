import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Storing user details in local storage
    const userDetails = {
      name: name,
      email: email,
      password: password
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    console.log("Form submitted");
  }

  return (
    <>
      <div style={{ textAlign: 'center', padding: 50, border: 30 }}>
        <form onSubmit={handleSubmit}>
          <input id="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br />
          <input id="email" type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <input id="password" type='password' placeholder='Create a password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          <button type="submit">Submit</button>
          <button><Link to={`/login`} >Login</Link></button>
        </form>
      </div>
    </>
  )
}

export default Signup;
