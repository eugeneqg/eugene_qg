import Container from "react-bootstrap/esm/Container";
import "./footer.css";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <Container className="d-flex align-items-center justify-content-between">
                <p>Eugene QG / Eugene Sypchenko</p>
                <p>{year}</p>
            </Container>
        </footer>
    )
}

export default Footer;