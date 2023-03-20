import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import icon1 from '../img/icon1.svg';
import icon2 from '../img/icon2.svg';
import icon3 from '../img/icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
 const Header = () => {
  const [active, setActive] = useState('home');
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.addEventListener("scroll", onScroll);
  return (
    <Router>
      <Navbar expand="lg" className={scroll ? "scroll" : ""}>
        <Container>
          <Navbar.Brand href="#">
            My Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto header-links">
              <Nav.Link href="#home"   className={active === 'home' ? 'active navbar-link' : 'navbar-link'} >Home</Nav.Link>
              <Nav.Link href="#skills" className={active === 'skills' ? 'active navbar-link' : 'navbar-link'} >Skills</Nav.Link>
              <Nav.Link href="#project" className={active === 'projects' ? 'active navbar-link' : 'navbar-link'} >Projects</Nav.Link>
            </Nav>
            <div className="web-icon">
                <a href="https://www.linkedin.com/in/aya-abd-el-salam-490b281b9" target="_blank"><img src={icon1}/></a>
                <a href="https://www.facebook.com/yokagabr66?mibextid=ZbWKwL" target="_blank"><img src={icon2} /></a>
                <a href="https://instagram.com/aya_3bdelsalam?igshid=YmMyMTA2M2Y=" target="_blank"><img src={icon3}/></a>
            </div>
              <HashLink to='#contact'>
                <button className="header-btn"><span>Let’s Connect</span></button>
              </HashLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
export default Header;