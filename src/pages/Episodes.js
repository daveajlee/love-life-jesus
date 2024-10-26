import { Accordion, Col, Container, Row } from "react-bootstrap";
import pdfLogo from './../assets/img/pdf_icon.png'; 

const Episodes = () => (

    <Container fluid>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h1>Episodes</h1></Col>
        </Row>
        <Row>
            <Col className="text-center mt-3" style={{color: 'white'}}><h1>Learning to Pray Series</h1></Col>
        </Row>
        <Row>
            <Col className="mt-3">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Prayer – thanking, praising and asking God</Accordion.Header>
                        <Accordion.Body>
                            <a target="_blank" rel="noreferrer" href="https://www.biblegateway.com/passage/?search=Psalm%20117&version=NIV">Psalm 117 (view in Bible Gateway)</a>
                            <br/><br/>
                            Brief description is here
                            <br/><br/>
                            <button><img src={pdfLogo} alt="PDF logo" width={60}/></button>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-3" style={{color: 'white'}}></Col>
        </Row>

    </Container>

);

export default Episodes;