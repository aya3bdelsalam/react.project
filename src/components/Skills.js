import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../img/meter1.svg";
import meter2 from "../img/meter2.svg";
import meter3 from "../img/meter3.svg";

const Skills = () => {
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    md: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skills" >
        <Container>
            <Row>
                <Col>
                    <div className="box" id="skills">
                        <h2>Skills</h2>
                        <p>i'm a front-end react developer i had learnt with road map start with Html,Css,JavaScript,<br></br> and bootstrap now  i use react.js framework for designing this portfolio.</p>
                        <Carousel responsive={responsive} infinite={true} className="slider-sec">
                            <div className="item">
                                <img src={meter1}  />
                                <h4>Web Developer</h4>
                            </div>
                            <div className="item">
                                <img src={meter2}  />
                                <h4>Front-End Developer</h4>
                            </div>
                            <div className="item">
                                <img src={meter3}  />
                                <h4>React-Js Developer</h4>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default Skills;