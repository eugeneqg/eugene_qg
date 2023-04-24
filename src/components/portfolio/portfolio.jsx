import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "./item/item";
import ItemModal from "./item-modal/item-modal";
import React from "react";
import { useSelector } from "react-redux";
import "./portfolio.css";

const Portfolio = () => {

    const mobileData = useSelector(state => state.mobile.data),
          webData = useSelector(state => state.web.data);

    const [isMobile, setIsMobile] = React.useState(true),
          [isModalOpen, setIsModalOpen] = React.useState(false),
          [postData, setPostData] = React.useState();

    const getPost = (data) => {
        setIsModalOpen(true);
        setPostData(data);
    }

    const posts = isMobile ? 
        mobileData.map(item => {
            return (
                <Item itemData={item} getPost={getPost} key={item.id}/>
            )
        }) :
        webData.map(item => {
            return (
                <Item itemData={item} getPost={getPost} key={item.id}/>
            )
        });

    React.useEffect(() => {
        if (isModalOpen) {
            document.querySelector("body").style.overflow = "hidden"
        } else {
            document.querySelector("body").style.overflow = "auto"
        }

    }, [isModalOpen]);

    const changeType = (e) => {
        const buttons = document.querySelectorAll(".portfolio-button");
        buttons.forEach(button => {
            button.classList.remove("active");
        });

        if (e.target.textContent.toLowerCase() === "mobile") {
            e.target.classList.add("active");
            setIsMobile(true);
        } else {
            e.target.classList.add("active");
            setIsMobile(false);
        }
    }

    if (isModalOpen) {

        return (
            <div className="background">
                <ItemModal setIsModalOpen={setIsModalOpen} modalData={postData}/>
            </div>
        )
    } 

    return (

        <Container id="portfolio" fluid="lg" className="mb-5">
            <h1 className="main-title">PORTFOLIO</h1>
            <div className="d-flex justify-content-center mb-5">
                <button onClick={changeType} className="portfolio-button active">Mobile</button>
                <button onClick={changeType} className="portfolio-button">Web</button>
            </div>
            <Row>
                <Col lg={12} className="gap-4 d-flex justify-content-center flex-wrap">
                    {posts}
                </Col>
            </Row>
        </Container>

    )
}

export default Portfolio;
