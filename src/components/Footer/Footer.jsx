import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import x_icon from '../../assets/x_icon.png'
import newlogo1 from '../../assets/newlogo1.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={x_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Careers</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2065 Netflix, Inc. Designed by Haswanth </p>
      <div className="hashlogo">
      <img src={newlogo1} alt="" />
      </div>
    </div>
  )
}

export default Footer