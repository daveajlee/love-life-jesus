import { Col, Container, Image, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";
import contactPicture from "./../assets/img/contact-picture.png";

const Contact = () => (
    <Container fluid>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h1>Contact</h1></Col>
        </Row>
        <Row>
            <Col className="text-center mt-3" style={{color: 'white'}}><h3>You are very welcome to contact me with any feedback, suggestions
                or if you are looking for fellowship opportunities. Please send me an email to the following e-mail address:</h3></Col>

            <MediaQuery query="(max-device-width: 900px)">
                <Image src={contactPicture} alt="Send an email to podcasts AT davelee DOT de"/>
            </MediaQuery>
        </Row>
        <MediaQuery query="(min-device-width: 901px)">
            <Row>
                <Col className="text-center mt-3">
                    <Image src={contactPicture} style={{width: '500px'}} alt="Send an email to podcasts AT davelee DOT de"/>
                </Col>
            </Row>
        </MediaQuery>
    </Container>
);

export default Contact;