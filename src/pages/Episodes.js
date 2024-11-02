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
                            <a target="_blank" rel="noreferrer" href="https://podcasters.spotify.com/pod/show/dajlee85/episodes/Prayer---thanking--praising-and-asking-God-e2qf9ju">Listen to the episode on Spotify (opens in new window)</a>
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://www.biblegateway.com/passage/?search=Psalm%20117&version=NIV">Psalm 117 (view on Bible Gateway in new window)</a>
                            <br/><br/>
                            Prayer plays an important role in living a life with and for Jesus. We start this series on prayer by looking at an essential element of prayer which is often overlooked - thanking and praising God before we ask God for wisdom.
Psalm 117 encourages us to always praise God. It provides a short and easy to remember structure that we can use at the beginning of our prayers. 
In this episode, we will study Psalm 117 and at the end I will offer two tips how you can integrate Psalm 117 into your prayer life.
                            <br/><br/>
                            <a href="https://github.com/daveajlee/love-life-jesus/blob/master/src/assets/pdf/Series1Episode1.pdf"><img src={pdfLogo} alt="PDF logo" width={60}/></a>
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