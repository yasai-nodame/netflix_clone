import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("ログイン")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="新規登録"?<input type="text" placeholder='お名前'/>:<></>}
          <input type="email" placeholder='メールアドレス'/>
          <input type="password" placeholder='パスワード'/>
          <button>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox"/>
              <label htmlFor="">ログインしたままにする</label>
            </div>
            <p>ヘルプ</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="ログイン"?
          <p>初めてご利用ですか？ <span onClick={() => {setSignState("新規登録")}}>新規登録はこちら</span></p>
          :<p>アカウントをお持ちの方 <span onClick={() => {setSignState("ログイン")}}>ログインする</span></p>
        }
        </div>
      </div>
    </div>
  )
}

export default Login
