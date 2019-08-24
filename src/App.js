import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Link } from "react-scroll";
<<<<<<< Updated upstream
import { Navbar, Nav } from 'react-bootstrap';
=======
import NavBar from './Components/Navbar';
import ExperienceSection from './Components/ExperienceSection';
import Button from './Components/Button';
import ContactSection from './Components/ContactSection';
>>>>>>> Stashed changes

class App extends React.Component {
  render() {
    return (
      <Style className="app-header flex">
        <section id="home" className="app-header flex">
<<<<<<< Updated upstream
          <div className="text">
            Hi, I'm<span className="highlighted-text"> Nick Kazan </span>and I smol brain chad.
=======
          <div className="title">
            Hi, I'm<span className="highlighted-text"> Nick Kazan </span>and I'm a Software Engineer.
>>>>>>> Stashed changes
          </div>
          <Link to="experience" spy={true} smooth={true}>
            <Button text="see my experience"/>
          </Link>
        </section>
        <NavBar/>
        <section id="experience" className="section-header flex">
<<<<<<< Updated upstream
          <Navbar className="navbar" color="light">
            <Nav className="row">
              <Link to="home" spy={true} smooth={true}>
                <Nav.Link className="navlink">Home</Nav.Link>
              </Link>
              <Link to="experience" spy={true} smooth={true}>
                <Nav.Link className="navlink">Experience</Nav.Link>
              </Link>
              <Link to="about-me" spy={true} smooth={true}>
                <Nav.Link className="navlink">About Me</Nav.Link>
              </Link>
              <Link to="contact" spy={true} smooth={true}>
                <Nav.Link className="navlink">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar>
          <ExperienceSection title="Experience"/>
        </section>
=======
          <ExperienceSection title="Experience"/>
        </section>
        <section id="contact" className="section-header flex centered">
          <ContactSection title="Let's Get In Touch"/>
        </section>
>>>>>>> Stashed changes
      </Style>
    );
  }
}

const Style = styled.div `
<<<<<<< Updated upstream
  .link {
    text-decoration: none;
    color: white;
  }
  
  .row {
    display: flex;
    flex-direction: row;
    float: left;
  }

  .navbar {
    width: 100%;
    border-bottom: 1pt solid #119DA4;
  }

  .navlink {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-family: 'Merriweather Sans';
    font-smooth: auto;
    display: block;
    padding: 15px 10px;
    margin: 0 15px;

    :hover {
      color: #119DA4;
      cursor: pointer;
      transition: all .3s;
    }
=======
  .centered {
    justify-contents: center;
    align-items: center;
>>>>>>> Stashed changes
  }
`

export default App;
