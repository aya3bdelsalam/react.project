import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Cards  from "./Cards";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
const Projects = () => {
  const examples = [
    {
      title: "Project One",
      text: "using Html and Css",
      img: img1,
    },
    {
      title: "Project Two",
      text: "using Html5 and Css",
      img: img2,
    },
    {
      title: "Project Three",
      text: "using Bootstrap and Css",
      img: img3,
    },
    {
      title: "Project Two",
      text: "using Html5 and Css",
      img: img2,
    },
    {
      title: "Project Three",
      text: "using Bootstrap and Css",
      img: img3,
    },
   {
      title: "Project One",
      text: "using Html and Css",
      img: img1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p>i'm a front-end react developer i had learnt with road map start with Html,Css,JavaScript, and bootstrap now  i use react.js framework for designing this portfolio.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" >
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Connect</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Objective</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          examples.map((examples, index) => {
                            return (
                              <Cards key={index} {...examples} />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>i'm a front-end react developer i had learnt with road map start with Html,Css,JavaScript, and bootstrap now  i use react.js framework for designing this portfolio.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Projects;