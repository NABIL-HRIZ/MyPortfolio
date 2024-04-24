import {React,useState} from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from './components/footer/Footer'
import About from './components/about/About'

AOS.init();

const App = () => { 

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
      
    
  )
} 

export default App
