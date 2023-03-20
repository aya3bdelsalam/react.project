import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeimg from "../img/happy.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
  const Home = () => {
  const [Num, setNum] = useState(0);
  const [Delete, setDelete] = useState(false);
  const [text, setText] = useState('');
  const [random, setRandom] = useState(300 - Math.random() * 100);
  const changes = [ "Web Developer", "Front-End Developer", "React.js Developer" ];
  const period = 1500;
  useEffect(() => {
    let ticker = setInterval(() => {
      x();
    }, random);
    return () => { clearInterval(ticker) };
  }, [text])
  const x = () => {
    let i = Num % changes.length;
    let fullText = changes[i];
    let updatedText = Delete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (Delete) {
      setRandom(prevrandom => prevrandom / 2);
    }
    if (!Delete && updatedText === fullText) {
      setDelete(true);
      setRandom(period);
    } else if (Delete && updatedText === '') {
      setDelete(false);
      setNum(Num + 1);
      setRandom(500);
  }
  }
  return (
    <section className="home" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="subtitle">Welcome to my Portfolio</span>
                <h1>{`Hello,I'm Aya Abdelsalam`} <span className="retype">{text}</span></h1>
                  <p>i'm a front-end react developer i had learnt with road map start with Html,Css,JavaScript, and bootstrap now  i use react.js framework for designing this portfolio. </p>
                  <button>Let’s Connect <ArrowRightCircle size={30}/></button>
                  
          </Col>
          <Col xs={12} md={6} xl={5}>
                  <img src={homeimg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Home;
