import "./design.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DesignModal = ({setIsModalOpen}) => {

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
                    <div ref={ref} className="ui-modal p-4 p-md-5 d-flex flex-wrap">
                        <Col md={4} lg={6} className="d-flex flex-wrap mb-2">
                            <div className="modal-title">
                                <h1>UI / UX DESIGNER</h1>
                            </div>
                        </Col>
                        <Col md={8} lg={6} className="d-flex align-items-center">
                            <div className="skills-content">
                                <h2>MAIN SKILLS</h2>
                            <ul className="skills">
                                <li>
                                    <p>Figma</p>
                                    <div className="skill">
                                        <div className="figma"/>
                                    </div>
                                </li>
                                <li>
                                    <p>Photoshop</p>
                                    <div className="skill">
                                        <div className="photoshop"/>
                                    </div>
                                </li>
                                <li>
                                    <p>Illustrator</p>
                                    <div className="skill">
                                        <div className="illustrator"/>
                                    </div>
                                </li>
                            </ul>
                            <h2><span>&</span>OTHER SKILLS</h2>
                            <div className="other-skills">
                                <div className="other-skill">
                                    <p>User Flow</p>
                                </div>
                                <div className="other-skill">
                                    <p>Wireframing</p>
                                </div>
                                <div className="other-skill">
                                    <p>Prototyping</p>
                                </div>
                                <div className="other-skill">
                                    <p>Sketch</p>
                                </div>
                                <div className="other-skill">
                                    <p>CJM</p>
                                </div>
                                <div className="other-skill">
                                <p>Principle</p>
                                </div>
                                <div className="other-skill">
                                    <p>Personas</p>
                                </div>
                                <div className="other-skill">
                                    <p>Miro</p>
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

export default DesignModal;