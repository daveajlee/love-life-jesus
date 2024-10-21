import { Button, Col, Container, Row } from "react-bootstrap";

const Fellowship = () => (

    <Container>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h1>Fellowship</h1></Col>
        </Row>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h3>Connect in Berlin / Brandenburg North?</h3></Col>
        </Row>
        <Row>
            <Col className="text-left mt-3" style={{color: 'white'}}><p>“Love Life Jesus” is a podcast which aims to connect you with the bible wherever you listen to podcasts.
                If you are interested in learning more about Jesus and the bible, I would always recommend visiting a local church. Regular Sunday gatherings with other
                belivers are an important part of the Christian way of life. If you would be interested in an international church or home group in the north of Berlin, Germany and/or the surrounding area then you
                are very welcome to contact me.
            </p>
                <p className="text-center"><Button variant="info" href="/#/contact">Get in Contact</Button></p></Col>
        </Row>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h3>Connect via Video Conferencing?</h3></Col>
        </Row>
        <Row>
            <Col className="text-left mt-3" style={{color: 'white'}}><p>“Love Life Jesus” is a podcast which aims to connect you with the bible wherever you listen to podcasts.
                If you are interested in learning more about Jesus and the bible, I would always recommend visiting a local church. Regular Sunday gatherings with other
                belivers are an important part of the Christian way of life. Sometimes however this is sadly not possible as the nearest church is too far away.
                If you would be interested in an online home group via video conferencing as you live too far away for any other option, then you are
                welcome to contact me. There needs to be sufficient interest though before an online home group can start.</p>
                <p className="text-center"><Button variant="info" href="/#/contact">Get in Contact</Button></p></Col>
        </Row>

    </Container>
);

export default Fellowship;