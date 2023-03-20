import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/logo.svg";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon2.svg";
import icon3 from "../img/icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col lg={12}>
          <div className="submit-box ">
          <Row>
            <Col xl={5}>
              <h3>Follow Me in my portfolio<br></br> & Never miss latest updates</h3>
            </Col>
            <Col  xl={7}>
              <form >
                <div className="input-box">
                  <input  type="email" placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
        </Col>
          <Col  sm={6}>
            <img src={logo} />
          </Col>
          <Col  sm={6} className="text-center text-sm-end">
            <div className="web-icon">
              <a href="https://www.linkedin.com/in/aya-abd-el-salam-490b281b9" target="_blank"><img src={icon1}/></a>
              <a href="https://www.facebook.com/yokagabr66?mibextid=ZbWKwL" target="_blank"><img src={icon2}/></a>
              <a href="https://instagram.com/aya_3bdelsalam?igshid=YmMyMTA2M2Y=" target="_blank"><img src={icon3}/></a>
            </div>
            <p>Copyright 2023. All Rights Reserved By Aya Abdelsalam</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;