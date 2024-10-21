import { Button, Col, Container, Image, Row } from "react-bootstrap";
import podcastAppleLogo from './../assets/img/Apple_Podcasts_Icon_RGB_lg_060623.svg';
import podcastSpotifyLogo from './../assets/img/Spotify_Primary_Logo_RGB_Black.png';
import podcastYoutubeLogo from './../assets/img/yt_logo_rgb_light.png';

const Subscribe = () => (

    <Container>
        <Row>
            <Col className="text-center mt-5" style={{color: 'white'}}><h1>Subscribe</h1></Col>
        </Row>
        <Row>
            <Col className="text-left mt-3" style={{color: 'white'}}><p>“Love Life Jesus” is a podcast which is available on multiple
                platforms. You can subscribe to a podcast and then you will get a notification on your Smartphone or Tablet when a 
                new episode is available. This prevents you having to check manually if a new episode is available. New episodes are
                generally released every two to three weeks. Therefore I recommend subscribing to this podcast so that you do not miss
                an episode. On this page I will explain how you can subscribe to the podcast using the three platforms where "Love Life Jesus"
                can be heard.</p></Col>
        </Row>
        <Row>
            <Col className="text-center">
                <a href="https://podcasts.apple.com/us/podcast/love-life-jesus/id1769064498"><Image src={podcastAppleLogo} alt="Listen on Apple Podcasts" width="50" rounded/></a><h3 className="text-left mt-3" style={{color: 'white'}}>Listen and subscribe on Apple Podcasts</h3>
                <p className="text-left mt-3" style={{color: 'white'}}>Click on the Apple logo above or the button below to visit the "Love Life Jesus" Podcast page on Apple Podcasts.<br/> At the right hand side of the screen, there is a button to Follow which will activate notifications.</p>
                <Button variant="info" href="https://podcasts.apple.com/us/podcast/love-life-jesus/id1769064498">Listen to Love Life Jesus on Apple Podcasts</Button>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5">
                <a href="https://open.spotify.com/show/0rmI1Y4Cgk0c8YqhV5MjoM"><Image src={podcastSpotifyLogo} alt="Listen on Apple Podcasts" width="50" rounded/></a><h3 className="text-left mt-3" style={{color: 'white'}}>Listen and subscribe on Spotify</h3>
                <p className="text-left mt-3" style={{color: 'white'}}>Click on the Spotify logo above or the button below to visit the "Love Life Jesus" Podcast page on Spotify.<br/>In the middle of the screen, there is a button to Follow which will activate notifications.</p>
                <Button variant="info" href="https://open.spotify.com/show/0rmI1Y4Cgk0c8YqhV5MjoM">Listen to Love Life Jesus on Spotify</Button>
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5">
                <a href="https://www.youtube.com/playlist?list=PLHVV9liCOIDD7v_OAPceAh3OLUXKMP3l4"><Image src={podcastYoutubeLogo} alt="Listen on Youtube" width="150" rounded/></a><h3 className="text-left mt-3" style={{color: 'white'}}>Listen and subscribe on Youtube</h3>
                <p className="text-left mt-3" style={{color: 'white'}}>Click on the YouTube logo above or the button below to visit the "Love Life Jesus" Podcast page on YouTube.<br/>If you wish to subscribe to the Podcast,
                    you will need the RSS Feed URL for "Love Life Jesus" which is <pre>https://anchor.fm/s/fa6f7ca0/podcast/rss</pre></p>
                <Button variant="info" href="https://www.youtube.com/playlist?list=PLHVV9liCOIDD7v_OAPceAh3OLUXKMP3l4">Listen to Love Life Jesus on YouTube</Button>
            </Col>
        </Row>
        <Row>
            <Col className="mt-5">
            </Col>
        </Row>
    </Container>

);

export default Subscribe;