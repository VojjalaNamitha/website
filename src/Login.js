import React from 'react'

function Login() {
  return (
    <>
    <div style={{textAlign:'center', marginTop:100 }}>
        <form action="/login" method="post">
            <label htmlFor="Email" required>Email:</label><br />
            <input type="text" id="email" name="email" required/><br />
            <label htmlFor="password" required>Password:</label><br />
            <input type="password" id="password" name="password" required/><br />
            <input type="submit" value="Login"/>
         </form>
    </div>
    </>
  )
}

export default Login