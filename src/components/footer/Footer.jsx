import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <div className='social_media'>
        <a href="https://github.com/NABIL-HRIZ"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nabil-hariz-a35530305/"><FaLinkedin /></a>
        <a href="https://api.whatsapp.com/send?phone=21209153426" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
      </div>
      <div className='footer_end'>© 2024 Nabil Hriz.Tous droits réservés.</div>

    </section>
  )
}

export default Footer
