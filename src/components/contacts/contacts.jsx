import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./contacts.css";

import mail from "./icons/mail.svg";
import insta from "./icons/insta.svg";
import telegram from "./icons/telegram.svg";
import behance from "./icons/behance.svg";


const Contacts = () => {

    return (
        <Container id="contacts" fluid="lg" className="mb-5">
            <h1 className="main-title">CONTACTS</h1>
            <Row className="contacts d-flex flex-wrap justify-content-center justify-content-md-between">
                    <Col>                        
                        <a href="mailto:evgeniisypchenko@gmail.com" className="contact">
                            <img className="icon" src={mail} alt="mail"/>
                            <p className="icon-text">Mail</p>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://t.me/eugene_qg" className="contact">
                            <img className="icon" src={telegram} alt="telegram"/>
                            <p className="icon-text">Telegram</p>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://github.com/eugeneqg" className="contact">
                            <img className="icon" src={behance} alt="behance"/>
                            <p className="icon-text">GitHub</p>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://instagram.com/qg__designs" className="contact">
                            <img className="icon" src={insta} alt="instagram"/>
                            <p className="icon-text">Instagram</p>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.behance.net/eugene_qg" className="contact">
                            <img className="icon" src={behance} alt="behance"/>
                            <p className="icon-text">Behance</p>
                        </a>
                    </Col>
                    {/* </div> */}

            </Row>
        </Container>
    )
}

export default Contacts;