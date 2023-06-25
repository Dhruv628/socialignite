import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>

           <h1 style={{color:"white",fontWeight:"bold"}}>Socialignite</h1>
        
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
        
            
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/shreyash-sharma-30b351280" target="_blank"><img src={navIcon1} alt="" /></a>
              </div>
              <div className="social-icon">
                <a href="https://www.instagram.com/socialignite5/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
      

        </Row>
      </Container>
    </footer>
  )
}
