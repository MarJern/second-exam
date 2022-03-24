import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <footer className="container fluid">
            <Row>
                <Col className="logo" >Floww media</Col>
                <Col className="footer__contact" >
                    <i className="fa-solid fa-envelope"></i>
                </Col>
                <Col className="footer__contact" >
                    <i className="fa-solid fa-phone"></i>
                </Col>
            </Row>
            <Row>
                <Col>1 of 1</Col>
            </Row>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </footer>
    );
}