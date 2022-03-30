import { BrowserRouter as Router, Link } from 'react-router-dom';
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';
import FooterNav from "./FooterNav";

export default function Footer() {

    return (
        <footer className="fluid">
            <Router>
            <Row>
                <Col className="footer__logo"><span className="bold">Floww</span> <span className="light">media</span>
                </Col>
                <Col className="footer__contact" >
                    <img src={email} alt=""/>
                    <p className='footer__link'>kontakt@flowwmedia.no</p>
                </Col>
                <Col className="footer__contact" >
                    <img src={phone} alt=""/>
                    <p className='footer__link'>458 43 554</p>
                </Col>
            </Row>
            <Row className="flex-column">
                {/* <Router> */}
                    <FooterNav />
                {/* </Router> */}
            </Row>
            <Row>
                {/* <Router> */}
                    <Link to="/personvern" className="nav-link footer__link">Rettningslinjer for personvern</Link>
                {/* </Router> */}
            </Row>
            </Router>
        </footer>
    );
}