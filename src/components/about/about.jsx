import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DesignModal from "./design/design";
import FrontModal from "./frontend/frontend";
import "./about.css";

const About = () => {

    const [isModalOpen, setIsModalOpen] = React.useState(false),
          [modal, setModal] = React.useState("");

    const handler = (e) => {
        e.target.classList.contains("banner-front") ? setModal("banner-front") : setModal("banner-design");
        setIsModalOpen(true);
    }


    React.useEffect(() => {
        if (isModalOpen) {
            document.querySelector("body").style.overflow = "hidden"
        } else {
            document.querySelector("body").style.overflow = "auto"
        }
    }, [isModalOpen, modal]);

    if (isModalOpen) {

        return (
            <div className="background">
                {modal === "banner-front" ? <FrontModal setIsModalOpen={setIsModalOpen}/> : <DesignModal setIsModalOpen={setIsModalOpen}/>}
            </div>
        )
    } else {

    return (
        <Container id="about" fluid="lg" className="my-5">
            <h1 className="main-title">ABOUT ME</h1>
            <Row>
                <Col>
                   <div className="about-block d-flex justify-content-center align-items-center">
                        <p className="about-text text-center">My name is Eugene Sypchenko. I’m 26 years old. I’m a frontend-developer and a UI/UX designer.</p>
                   </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-space-between g-4">
                <Col lg={6}>
                    <div onClick={handler} className="banner banner-front d-flex align-items-center justify-content-center">
                        <p id="block-front" className="block-text">Frontend-developer</p>
                    </div>
                </Col>
                <Col lg={6}>
                    <div onClick={handler} className="banner banner-design d-flex align-items-center justify-content-center">
                        <p id="block-ui" className="block-text">UI/UX designer</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default About;