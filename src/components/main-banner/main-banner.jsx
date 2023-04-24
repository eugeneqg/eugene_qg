import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-banner.css";
import video from "./img/main-banner.mp4"

const MainBanner = () => {

    return (
        <Container fluid="lg" id="#main" className="mt-5 mt-lg-0 mb-5">
            <Row className="d-flex justify-content-center align-items-center">
                <Col lg={5}>
                    <div>
                        <p className="caption">HELLO I AM A</p>
                        <h1 className="banner-header">UI / UX <span className="color">DESIGNER</span> <span>&</span> 
                        FRONTEND <span className="color">DEVELOPER</span></h1>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-center" lg={7}>
                    <VideoBanner/>
                </Col>
            </Row>
        </Container>
    )
}

const VideoBanner = () => {
    
    return (
        <video className="img-fluid" playsInline autoPlay muted loop>
            <source src={video} type="video/mp4"></source>
        </video>
    )
}

export default MainBanner;