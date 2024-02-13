import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div style={{textAlign:'center',margin:'40px',fontSize:28}}>
    <div>Home component</div>
    <button><Link to={`/signUp`} >Signup</Link></button><br></br>
    <button><Link to={`/login`} >Login</Link></button>
    </div>
    </>
  )
}

export default Home