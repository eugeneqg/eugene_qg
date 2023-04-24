import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./frontend.css";

const FrontModal = ({setIsModalOpen}) => {

    const ref = React.useRef();

    React.useEffect(() => {
        const handler = (e) => {
            if (!ref.current.contains(e.target)) {
                setIsModalOpen(false);
            }
        }

        window.addEventListener("mousedown", handler);
        return () => window.removeEventListener("mousedown", handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container fluid="lg" className="h-100">
            <Row className="d-flex justify-content-center align-items-center height">
                <Col md={10}>
                    <div ref={ref} className="front-modal p-4 p-md-5 d-flex flex-wrap">
                        <Col md={4} lg={6} className="d-flex flex-wrap mb-2">
                            <div className="modal-title">
                                <h1>FRONTEND-DEVELOPER</h1>
                            </div>
                        </Col>
                        <Col md={8} lg={6} className="d-flex align-items-center">
                            <div className="skills-content">
                                <h2>MAIN SKILLS</h2>
                            <ul className="skills">
                                <li>
                                    <p>JavaScript</p>
                                    <div className="skill">
                                        <div className="js"/>
                                    </div>
                                </li>
                                <li>
                                    <p>React</p>
                                    <div className="skill">
                                        <div className="react"/>
                                    </div>
                                </li>
                                <li>
                                    <p>HTML</p>
                                    <div className="skill">
                                        <div className="html"/>
                                    </div>
                                </li>
                                <li>
                                    <p>CSS</p>
                                    <div className="skill">
                                        <div className="css"/>
                                    </div>
                                </li>
                            </ul>
                            <h2><span>&</span>OTHER SKILLS</h2>
                            <div className="other-skills">
                                <div className="other-skill">
                                    <p>Redux</p>
                                </div>
                                <div className="other-skill">
                                    <p>GIT</p>
                                </div>
                                <div className="other-skill">
                                    <p>TypeScript</p>
                                </div>
                                <div className="other-skill">
                                    <p>Bootstrap</p>
                                </div>
                                <div className="other-skill">
                                    <p>MongoDB</p>
                                </div>
                                <div className="other-skill">
                                    <p>Express</p>
                                </div>
                            </div>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FrontModal;