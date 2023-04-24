import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import logo from "./logo.svg";
import "./navbar.css";

const Header = () => {

    return (
        <Navbar bg="white" className="navbar" expand="md" sticky="top">
            <Container fluid="lg">
                <Navbar.Brand href="#">
                    <img src={logo} alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse justify-content-end align-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#about" className="menu-link">About me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#portfolio" className="menu-link">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contacts" className="menu-link">Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;