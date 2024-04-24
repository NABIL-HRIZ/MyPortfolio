import React from 'react'
import './home.css'
import my_pic from '../../assets/home_pic.png'
const Home = () => {
  return (
   <section id='acceil' className='home' >
    <div className="content"> 
        <div className="infos">
        <h2>Bonjour</h2>
        <h3><span>Développeur full stack</span></h3>
        <p>Bonjour et bienvenue sur mon portfolio ! Je suis Nabil Hriz ,né le 14 Janvier 2001 développeur web full stack 
        basé sur plusieurs technologies (JavaScript , PHP ) et ses framworks ( Reactjs , Laravel)
          je suis constamment à la recherche de nouveaux défis et opportunités pour développer mes compétences . À travers ce portfolio, je partage avec vous mes          
           réalisations, projets passionnants et parcours professionnel.Merci de votre visite</p>
        <a href="/My_LCV.pdf"  target="_blank" rel="noopener noreferrer">Télécharger CV </a>
        </div>
       
    <div className='avatar'>
        
        <img src={my_pic} alt="my_pic" />

    </div>
    </div>

   </section>
  )
}

export default Home
