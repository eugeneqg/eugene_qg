import "./item-modal.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemModal = ({modalData, setIsModalOpen}) => {

    const ref = React.useRef();

    const getLink = () => {
        if(modalData.link.length !== 0) {
            return (
                <a href={modalData.link} target="_blank"><button>Go to project</button></a>
            )
        }
    }

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
                    <div ref={ref} className="item-modal p-4 p-md-5 d-flex flex-wrap align-items-center justify-content-between">
                        <Col lg={6} className="d-flex flex-wrap mb-2">
                            <img src={modalData.pic} className="port-modal-pic" alt={modalData.alt}></img>
                        </Col>
                        <Col lg={5} className="d-flex flex-wrap align-items-center text">
                            <h1>{modalData.title.toUpperCase()}</h1>
                            <p>{modalData.desc}</p>
                            {getLink()}
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemModal;