import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import bg from "../assets/img/bg1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={bg} alt="Background" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yladacs/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="bit.ly/whatsappyl"><img src={navIcon2} alt="Whatsapp" /></a>
              <a href="https://github.com/lanroo"><img src={navIcon3} alt="Github" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved - Ylanna.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
