import { Button, Card, Col, Container, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";
import logo from "./../assets/img/logo-large.png"
import logoSmall from "./../assets/img/logo-large-mobile.png"
import { Link } from "react-router-dom";
import episodesImage from './../assets/img/bible-coffee-unsplash.png';
import subscribeImage from './../assets/img/subscribe-unsplash.png';
import fellowshipImage from './../assets/img/fellowship-unsplash.png';
import contactImage from './../assets/img/contact-unsplash.png';

const Home = () => (
    <Container fluid>
        <Row>
            <MediaQuery query="(max-device-width: 900px)">
                <Col className="text-center"><img src={logoSmall} alt="Love Life Jesus logo"
                                                  className="img-responsive"/></Col>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 901px)">
                <Col className="text-center"><img src={logo} alt="Love Life Jesus logo"
                                                  className="img-responsive"/></Col>
            </MediaQuery>
        </Row>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h1>Love Life Jesus Podcast</h1></Col>
        </Row>
        <Row>
            <Col className="text-left mt-3" style={{color: 'white'}}><p>Welcome to the “Love Life Jesus” Podcast. 
                My name is Dave Lee and I want you to join me on a journey where we will 
                learn to love Jesus (more) and how we can live our lives for him and with him. 
                <br/><br/>In each episode we will look at a short portion of the Bible and 
                find out how it helps us to love Jesus and live for him. I will bring many 
                practical examples of how, through His love for me, I have loved and lived 
                for Jesus during the last 30 years and how I continue to try to do so today 
                and tomorrow. I trust they will be an encouragement and maybe a challenge 
                for your walk with Him.
                <br/><br/>Do you not yet know who Jesus is? You are invited to subscribe to this 
                podcast and find out. I promise each episode will help you to get know Jesus more.</p></Col>
        </Row>
        <Row>
            <Col className="text-left mt-3" style={{color: 'white'}}>
            Icons and links to where you can get podcast</Col>
        </Row>

        <hr/>

        <Row className="mt-3">
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card className="text-center nav-card">
                    <Card.Img variant="top" src={episodesImage} alt={"Bible and coffee"}/>
                    <Card.Body>
                        <Card.Title>Episodes</Card.Title>
                        <Card.Text>
                            Background Information for episodes already released.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/episodes">Episodes</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card className="text-center nav-card">
                    <Card.Img variant="top" src={subscribeImage} alt={"Photo of phone, headphones and coffee"}/>
                    <Card.Body>
                        <Card.Title>Subscribe</Card.Title>
                        <Card.Text>
                            Get a notification every time a new episode is released.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/subscribe">Subscribe</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card className="text-center nav-card">
                    <Card.Img variant="top" src={fellowshipImage} alt={"Photo of multiple people sharing fellowship"}/>
                    <Card.Body>
                        <Card.Title>Fellowship</Card.Title>
                        <Card.Text>
                            An opportunity to go deeper in some topics.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/fellowship">Fellowship</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card className="text-center nav-card">
                    <Card.Img variant="top" src={contactImage} alt={"Scrabble board with contact as word"}/>
                    <Card.Body>
                        <Card.Title>Contact</Card.Title>
                        <Card.Text>
                            How you can contact me if you have any questions or feedback.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/contact">Contact</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br/>
        <br/>
    </Container>
);

export default Home;