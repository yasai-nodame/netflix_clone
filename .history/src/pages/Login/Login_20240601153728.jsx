import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className='login-form'>
        <h1>ログイン</h1>
        <form>
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>Sign Up</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor="">ログイン保持する</label>
            </div>
            <p>ヘルプ</p>
          </div>
        </form>
        <div className="form-switch">
          <p>アカウントをお持ちですか？ <span>Sign Up Now</span></p>
          <p>すでにアカウントがある場合 <span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
