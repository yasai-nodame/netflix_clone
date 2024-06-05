import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("ログイン")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async(event)=>{
    event.preventDefault();
    setLoading(true);
    if (signState==="ログイン") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt=""/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="新規登録"?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='お名前'/>:<></>}
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='メールアドレス'/>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='パスワード'/>
          <button onClick={user_auth} type="submit">{signState}</button>
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
