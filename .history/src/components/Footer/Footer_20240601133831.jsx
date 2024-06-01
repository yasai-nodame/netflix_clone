import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>音声ガイド</li>
        <li>ヘルプセンター</li>
        <li>プリベイド・ギフトカード</li>
        <li>メディアセンター</li>
        <li>IR:投資家情報</li>
        <li>採用情報</li>
        <li>利用規約</li>
        <li>プライバシー</li>
        <li>法的事項</li>
        <li>Cookieの設定</li>
        <li>Netflix企業情報</li>
        <li>お問い合わせ</li>
      </ul>
      <p className='copyright-text'></p>
    </div>
  )
}

export default Footer
