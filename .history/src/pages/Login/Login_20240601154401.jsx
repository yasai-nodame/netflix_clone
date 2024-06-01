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
          <input type="text" placeholder='お名前'/>
          <input type="email" placeholder='メールアドレス'/>
          <input type="password" placeholder='パスワード'/>
          <button>Sign Up</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor="">ログインしたままにする</label>
            </div>
            <p>ヘルプ</p>
          </div>
        </form>
        <div className="form-switch">
          <p>初めてご利用ですか？ <span>新規登録はこちら</span></p>
          <p>すでにアカウントを持っている方 <span>ログインする</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login
