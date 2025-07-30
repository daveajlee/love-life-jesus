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
                            <a href="https://github.com/daveajlee/love-life-jesus/blob/master/src/assets/pdf/Series1-Episode1.pdf"><img src={pdfLogo} alt="PDF logo" width={60}/></a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Prayer –  The Lord's Prayer</Accordion.Header>
                        <Accordion.Body>
                            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/episode/6bc45P37BFttO0CFsvLGZd?si=sfWj7XVVRNiLjAHSLfOE9w">Listen to the episode on Spotify (opens in new window)</a>
                            <br/><br/>
                            <a target="_blank" rel="noreferrer" href="https://www.biblegateway.com/passage/?search=Matthew%206&version=NLT">Matthew 6:9-13 (view on Bible Gateway in new window)</a>
                            <br/><br/>
                            Prayer plays an important role in living a life with and for Jesus. We continue our series on prayer by looking at one of the most famous prayers in the bible - the Lord's Prayer.
                            The Lord's Prayer offers a template for our prayers and can help us maintain a healthy balance between praise and requests in our prayer life.
                            In this episode, we will study the Lord's prayer and at the end I will offer three tips how you can integrate the Lord's prayer into your prayer life.
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