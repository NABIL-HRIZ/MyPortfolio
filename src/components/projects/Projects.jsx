import React, { useState } from 'react';
import './projects.css';
import pr_1 from '../../assets/pr_1.jpg';
import pr_2 from '../../assets/pr_2.jpg';
import pr_3 from '../../assets/pr_3.jpg';
import pr_4 from '../../assets/pr_4.jpg';
import pr_5 from '../../assets/pr_5.jpg';
import pr_6 from '../../assets/pr_6.jpg';
import pr_7 from '../../assets/pr_7.jpg';
import pr_8 from '../../assets/pr_8.jpg';
import pr_9 from '../../assets/pr_9.jpg';

import { FaRegHandPointRight } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDescription } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Color } from 'three';

const Projects = () => {
  const [projects] = useState([
    {
      name: 'S_JARDINAGE',
      desc: ' Notre site propose une gamme complète de services professionnels pour prendre soin de votre jardin et de votre espace extérieur, demander un devis en ligne ',
      mission: 'Construire un site web pour le service jardinage ',
      languages: 'REACTjs & EMAILjs ',
      image: pr_6,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_sabrjardinage-reactjs-emailjs-activity-7188859596009037824-9Jkn?utm_source=share&utm_medium=member_desktop',

    },

    {
      name: 'Pizza Food',
      desc: " Plongez dans un monde de saveurs délicieuses où chaque bouchée est une explosion de goût.",
      mission: 'Un site Web aussi une base de donnée , admin dashboard   ',
      languages: 'LARAVEL Blade ,Xampp , PhpMyAdmin , MySql',
      image: pr_9,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_pizzafood-php-laravel-activity-7188859200544931841-Njao?utm_source=share&utm_medium=member_desktop',


    },

    {
      name: 'Honey Web ',
      desc: ' Notre site propose une sélection variée de miels artisanaux provenant de sources locales et durables. Que vous recherchiez du miel cru, du miel biologique ou des variétés spéciales comme le miel de lavande ou de trèfle',
      mission: 'Construire un  site web pour promouvoir du miel',
      languages: 'REACTjs & EMAILjs ',
      image: pr_4,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_honey-reactjs-emailjs-activity-7188858100055973888-66Pm?utm_source=share&utm_medium=member_desktop',


    },
    {
      name: 'Dari Shop ',
      desc: "plateforme eCommerce dédiée à l'univers de la maison. Parcourez notre sélection variée de produits soigneusement sélectionnés pour embellir et optimiser votre espace de vie",
      mission: 'Construire un  site web et une base de donnée aussi un Admin Dashboard  ',
      languages: 'LARAVEL Blade ,Xampp , PhpMyAdmin , MySql   ',
      image: pr_7,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_dari-php-laravel-activity-7188857659456933889-RXgk?utm_source=share&utm_medium=member_desktop',


    },

    {
      name: 'Allo Restaurant ',
      desc: ' Nous visons à offrir aux utilisateurs une expérience conviviale et pratique pour commander leurs repas préférés en ligne et se les faire livrer à domicile',
      mission: 'Construire un site web de restauration avec service de livraison (partie front_end ) ',
      languages: 'REACTjs & EMAILjs ',
      image: pr_1,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_allo-reactjs-emailjs-activity-7188856704996888576-uEZZ?utm_source=share&utm_medium=member_desktop',


    },
    {
      name: 'Body Store ',
      desc: 'Notre site e-commerce propose une sélection variée de produits supplémentaires pour répondre à tous les besoins de nos clients. Avec trois des  catégories ',
      mission: 'Construire un ecommerce site web pour les produits supplementaire  ',
      languages: 'React js & Strapi  ',
      image: pr_3,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_reactjs-strapi-activity-7188855630277869568-nCTI?utm_source=share&utm_medium=member_desktop',


    },

    {
      name: 'Trip Blog  ',
      desc: "Plongez dans l'aventure avec notre blog de voyages",
      mission: 'Un site Web aussi ,  une base de donnée , admin dashboard  ',
      languages: 'LARAVEL ,Blade ,Xampp , PhpMyAdmin , MySql',
      image: pr_8,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_laravel-blade-crud-activity-7188854799566544896-COPZ?utm_source=share&utm_medium=member_desktop',


    },
    {
      name: 'Technologie',
      desc: 'Découvrez les avancées les plus récentes dans le monde de la technologie sur notre site web dédié. ',
      mission: 'Construire un site web pour les nouvelles technologie  ',
      languages: 'REACTjs, FormsPree',
      image: pr_5,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_reactjs-formspree-frontabrend-activity-7188853391798775810-r6Op?utm_source=share&utm_medium=member_desktop',


    },
    {
      name: 'Movie App ',
      desc: " une application de recherche de films qui permet aux utilisateurs de rechercher des films par titre et de consulter les informations détaillées sur chaque film",
      mission: 'Fetch Api Movie  ',
      languages: 'REACTjs & RAPIDapi ',
      image: pr_2,
      videoLink: 'https://www.linkedin.com/posts/nabil-hariz-a35530305_reactjs-rapidabrapi-frontabrend-activity-7188811497072984064-xTS9?utm_source=share&utm_medium=member_desktop',

    },




  ])

  return (
    <section id='projets' className='projects' data-aos="fade-down" data-aos-duration="2000"
      data-aos-easing="ease-in-out">
      <div className="title">
        Mes derniers projets
      </div>
      <div className="desc">
        je suis ravi de partager avec vous certains des projets sur lesquels j'ai travaillé,Ces projets reflètent ma passion,et démontrent mes compétences en développement et en conception
      </div>
      <div className="project">
        {projects.map((value, index) => (
          <div className={index % 2 === 0 ? "projectList even" : "projectList odd"} data-aos="fade-right" data-aos-duration="2000"
            data-aos-easing="ease-in-out">
            <div className="projectImg">
              <img src={value.image} alt="" />
            </div>
            <div key={index} className="projectInfos">
              <h3><span><FaRegHandPointRight /> </span> {value.name}</h3>
              <div className='projectDesc'>
                <span><MdOutlineDescription /></span>
                <p> {value.desc}</p>
              </div>
              <div className='projectMission'>
                <div className='icon'>
                  <span><GrProjects /></span>
                </div>
                <div className='mission'>
                  Mission : <h4>{value.mission}</h4>
                </div>
              </div>
              <div className='projectLanguage'>
                <div className='icon'>
                  <span><GrLanguage />  </span>
                </div>
                <div className='mission'>
                  Language : <h5>{value.languages}</h5>
                </div>
              </div>

              <div className='projectLanguage'>
                <div className='icon'>
                  <span><FaRegHandPointRight /> </span>
                </div>
                <div className='mission'>
                  <a href={value.videoLink} className='videoLink' target="_blank" rel="noopener noreferrer">Regarde Ici !   </a>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;
