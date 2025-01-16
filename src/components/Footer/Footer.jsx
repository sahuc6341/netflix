import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'
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
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>privacy</li>
          <li>Contact us</li>
        </ul>
        <p className='copyright-text'>c 1234-5678 Netflix,inc</p>
    </div>
  )
}

export default Footer