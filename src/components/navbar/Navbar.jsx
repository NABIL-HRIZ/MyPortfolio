import { React } from 'react';
import { connect } from 'react-redux';
import { setActiveNav } from '../../redux/action';
import './navbar.css';
import logo from '../../assets/logo.png';


const Navbar = ({ activeNav, setActiveNav }) => {
  const listNav = ['acceil', 'propos', 'compétance', 'projets', 'contact'];


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <span>NABIL_HRIZ</span>
      </div>
      <nav>
        {listNav.map((value, key) => (
          <span
            key={key}
            className={activeNav === value ? 'active' : ''}
            onClick={() => {
              setActiveNav(value);
              scrollToSection(value);
            }}
          >
            {value}
          </span>
        ))}
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeNav: state.activeNav
});

export default connect(mapStateToProps, { setActiveNav })(Navbar);
