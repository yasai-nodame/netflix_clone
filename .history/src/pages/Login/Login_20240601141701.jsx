import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className='login-form'>
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>Sign In</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
