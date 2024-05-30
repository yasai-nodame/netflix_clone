import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_logo.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell_icon.jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt=""/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <ung src={search_icon} alt="" className="icons" />
        <p>Children</p
        <img>
      </div>
    </div>
  )
}

export default Navbar
