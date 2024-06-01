import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/hero_title.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>古代の秘密教団とのつながりを知った現代のイスタンブールに住む青年は、不死の敵から街を救う旅に出る。</p>
          <div className="hero-btns">
            <button><img src="" alt="" />Play</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
