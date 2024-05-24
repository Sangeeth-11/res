import React from 'react'
import { Link } from 'react-router-dom'
import './slidebar.css'

function Slidebar() {
  return (
    <div className='slidebar'>
      <div className='logo-brand'>
        social edia
      </div>

      <Link to={'/'} className='link ' title='home'>
        <i className="fa-solid fa-house fa-lg " style={{ color: "#fcfcfd" }}></i>
        <span className='slider-text'>Home</span>
      </Link>



      <Link to={'/dash'} className='link'>
        <i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: "#fcfcfd" }} />
        <span className='slider-text'>Search</span></Link>


      <Link to={'/req'} className='link'>
        <div className="fa-solid fa-compass fa-lg" style={{ color: "#fcfcfd" }}></div>
        <span className='slider-text'>Explore</span></Link>

      <Link to={'/req'} className='link'>
        <div className="fa-solid fa-message fa-lg" style={{ color: "#fcfcfd" }}></div>
        <span className='slider-text'>Messages</span></Link>

      <Link to={'/req'} className='link'>
        <div className="fa-solid fa-circle-plus fa-lg" style={{ color: "#fcfcfd" }}></div>
        <span className='slider-text'>create</span></Link>

      <Link to={'/req'} className='link'>
        <div className="fa-solid fa-video fa-lg" style={{ color: "#fcfcfd" }}></div>
        <span className='slider-text'>Reels</span></Link>

      <Link to={'/req'} className='link'>
        <div className="fa-solid fa-compass fa-lg" style={{ color: "#fcfcfd" }}></div>
        <span className='slider-text'>Profile</span></Link>


      <Link to={'/req'} className='link' style={{ marginTop: "150px" }}>
        <div className="fa-solid fa-gear fa-lg" style={{ color: "#fcfcfd" }}></div>
        <span className='slider-text'>Settings</span></Link>
      <span className='link'>
        <div className="fa-solid fa-compass fa-lg" style={{ color: "#fcfcfd" }}></div>
        <div className='slider-text'>Logout</div></span>




    </div>
  )
}

export default Slidebar