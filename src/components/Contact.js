import { Container, Row, Col } from "react-bootstrap";
import contact from "../img/main-asset.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row >
          <Col  md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact} />
              }
            </TrackVisibility>
          </Col>
          <Col  md={6}>
                <div>
                <h2>Get In Touch</h2>
                <form >
                  <Row>
                    <Col  sm={6} >
                      <input type="text"  placeholder="First Name"/>
                    </Col>
                    <Col  sm={6} >
                      <input type="text"  placeholder="Last Name"/>
                    </Col>
                    <Col  sm={6} >
                      <input type="email" placeholder="Email Address"/>
                    </Col>
                    <Col  sm={6} >
                      <input type="tel"  placeholder="Phone No."/>
                    </Col>
                    <Col  >
                      <textarea rows="6"  placeholder="Kindly leave your comment here"></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact;