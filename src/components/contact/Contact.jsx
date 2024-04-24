import React from 'react'
import './contact.css'
import msg_pic from '../../assets/msg_pic.png'
const Contact = () => {
  return (
    <section id='contact' className='contact'  data-aos="fade-down"  data-aos-duration="2000"
    data-aos-easing="ease-in-out">
        <div className="title">
        Contactez-moi
        </div>
        <div className="desc">
        n'hésitez pas à utiliser les coordonnées ci-dessous pour entrer en contact avec moi. Je suis impatient de pouvoir échanger avec vous !
        </div>

        <div className='form'  data-aos="fade-down"  data-aos-duration="2000"
          data-aos-easing="ease-in-out">
            <div className='form_input'>
            <label htmlFor="Your Message">Adresse Email  :</label>
            <input type="email"  required />
            <label htmlFor="Your Message">Votre Message : </label>
             <textarea name="" id="" cols="30" rows="10"></textarea>
             <button type="submit">ENVOYER</button>
            </div>
            <div className="icon">
                <img src={msg_pic} alt="" />
            </div>
            

        </div>

    </section>
  )
}

export default Contact
