import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className='login-form'>
        <h1>アカウント登録</h1>
        <form>
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>ログインする</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor="">ログイン状態を保持する</label>
            </div>
            <p>忘れましたか？</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
