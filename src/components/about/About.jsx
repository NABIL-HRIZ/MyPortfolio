import React from 'react'
import './about.css'
import { LuGraduationCap } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const About = () => {
  return (
    <section className='about' id='propos' data-aos="fade-down" data-aos-duration="1000"
      data-aos-easing="ease-in-out" >
      <div className='title'>
        À propos de moi
      </div>
      <div className='desc'>Je souhaite partager un aperçu de mon parcours, qu'il soit académique ou professionnel.
        Je crois fermement que chaque étape de mon parcours m'a permis de développer des compétences précieuses </div>
      <div className='about_infos'>
        <div className="left_ab" data-aos="fade-right" data-aos-duration="1500"
          data-aos-easing="ease-in-out">
          <h2>Education</h2>
          <div className='education_infos'>
            <span><LuGraduationCap /> 2020-2021</span>
            <h4>Licence fondamentale  </h4>
            <p>En Sciences Mathematique et informatique à <span className='where'>FS Ben M'sick</span>  </p>
          </div>
          <div className='education_infos'>
            <span><LuGraduationCap /> 2018-2020</span>
            <h4>Deug</h4>
            <p>En Sciences Mathematique Et Informatique  à <span className='where'>FS Ben M'sick</span></p>
          </div>
          <div className='education_infos'>
            <span><LuGraduationCap /> 2017-2018</span>
            <h4>Bachalauriat</h4>
            <p>En Sciences Phesique Et chimique  à <span className='where'>Lycee Mly Ismail  </span> </p>
          </div>
        </div>
        <div className="right_ab" data-aos="fade-left" data-aos-duration="1500"
          data-aos-easing="ease-in-out">
          <h2>Expériance</h2>

          <div className='experiance_infos'>
            <span><IoShieldCheckmarkOutline /> 03/2023-03/2024</span>
            <h4>Conseiller d'agence</h4>
            <p> 1 an  de travail chez <span className='where'>CASHPLUS</span></p>
          </div>
          <div className='experiance_infos'>
            <span><IoShieldCheckmarkOutline /> 10/2022-01/2023</span>
            <h4>Un téléconseiller </h4>
            <p>Quatre mois de travail 'les cellules photovoltaïque' chez <span className='where'>IFGA CALL-CENTER.</span></p>
          </div>
          <div className='experiance_infos'>
            <span> <IoShieldCheckmarkOutline /> 01/2022-08/2022</span>
            <h4>Un équipier  </h4>
            <p>  Sept  mois  de service chez <span className='where'>MCDONALD’S</span></p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About
