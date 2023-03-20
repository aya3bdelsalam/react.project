import { Col } from "react-bootstrap";
 const Cards = ({ title, text, img }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-img">
        <img src={img} />
        <div className="proj-text">
          <h2>{title}</h2>
          <span>{text}</span>
        </div>
      </div>
    </Col>
  )
}
export default Cards;