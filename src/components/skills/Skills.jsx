import React, { useState } from 'react'
import './skills.css'
import { SiHtml5 } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiStrapi } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
    const [listSkills] = useState([
        {
            title: 'HTML',
            desc: "je suis capable de créer des structures web robustes et sémantiques. Ma maîtrise des balises, éléments et attributs HTML me permet de développer des interfaces utilisateur intuitives et accessibles",
            icon: <SiHtml5 />
        },
        {
            title: 'CSS',
            desc: ' Mon expertise dans la manipulation des styles, des sélecteurs et des propriétés CSS me permet de concevoir des interfaces esthétiques et fonctionnelles qui offrent une expérience utilisateur immersive.',
            icon: <FaCss3 />
        },
        {
            title: 'BOOTSTRAP',
            desc: " je suis capable d'utiliser ce framework frontend de manière efficace pour développer des sites web réactifs et esthétiques. Grâce aux composants préfabriqués et à la grille flexible de Bootstrap,",
            icon: <FaBootstrap />
        },
        {
            title: 'TAILWINDcss',
            desc: " je suis capable d'utiliser ce framework de manière efficace pour concevoir des interfaces utilisateur flexibles et personnalisables. En exploitant les classes utilitaires de Tailwind",
            icon: <SiTailwindcss />
        },
        {
            title: 'JAVASCRIPT',
            desc: " je suis capable de développer des fonctionnalités interactives et dynamiques pour les applications web. Ma maîtrise des concepts fondamentaux de JavaScript, tels que les fonctions, les événements et la manipulation du DOM",
            icon: <IoLogoJavascript />
        },


        {
            title: 'REACTjs',
            desc: "je suis capable de concevoir et de développer des applications web modernes et dynamiques? Ma connaissance approfondie des concepts de React, tels que le state management et les hooks et  reduxx ",
            icon: <FaReact />
        },
        {
            title: 'PHP',
            desc: "Ma maîtrise des concepts fondamentaux de PHP, tels que la manipulation de données, la gestion des sessions et la création de fonctions, me permet de créer des fonctionnalités puissantes et fiables pour les sites web",
            icon: <BiLogoPhp />
        },
        {
            title: 'LARAVEL',
            desc: "Je suis passionné par l'utilisation de Laravel pour simplifier le processus de développement et pour créer des solutions innovantes qui offrent une expérience utilisateur exceptionnelle",
            icon: <FaLaravel />
        },
        {
            title: 'JAVA',
            desc: "En tant que débutant en Java, je suis enthousiaste à l'idée d'apprendre et de développer mes compétences dans ce langage de programmation puissant. Bien que je sois encore en train d'explorer les concepts fondamentaux de Java, je suis déterminé à acquérir une solide compréhension et à devenir un développeur compétent",
            icon: <FaJava />
        },
        {
            title: 'MYSQL',
            desc: " Je suis motivé à acquérir une solide compréhension de ce système de gestion de base de données relationnelle. Je suis en train d'explorer les concepts fondamentaux de MySQL, tels que la création de bases de données, la manipulation des données et les requêtes SQL",
            icon: <GrMysql />
        },
        {
            title: 'STRAPI',
            desc: "Je suis enthousiaste à l'idée d'explorer ce système de gestion de contenu (CMS) headless moderne. Je suis en train d'apprendre les concepts fondamentaux de Strapi, tels que la création de modèles de données, la mise en place d'API RESTful et la gestion des contenus",
            icon: <SiStrapi />
        },
        {
            title: 'Git & GITHUB',
            desc: "Je suis en train d'apprendre les concepts fondamentaux de GitHub, tels que la création de référentiels (repositories), le suivi des modifications avec Git et la collaboration avec d'autres développeurs",
            icon: <FaGithub />
        },



    ])

    return (
        <section id='compétance' className='skills' data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
        >
            <div className='title'>
                Mes compétences
            </div>
            <div className="desc">
                je suis ravi  de partager avec vous les domaines dans lesquels je me spécialise en tant que développeur web,
                fort d'une solide expérience dans le développement frontend et backend, ainsi que dans la création de sites web dynamiques et conviviaux.
            </div>
            <div className="list" ata-aos="fade-down"
                data-aos-duration="2000">
                {listSkills.map((value, key) => (
                    <div key={key} className="item" ata-aos="fade-down"
                        data-aos-duration="2000" >
                        <span>{value.icon}</span>
                        <h3>{value.title}</h3>
                        <p className='desc'>{value.desc}</p>
                    </div>
                ))}

            </div>
        </section>

    )
}

export default Skills
