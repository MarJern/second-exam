import { Link } from 'react-router-dom';
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';
import FooterNav from "./FooterNav";

export default function Footer() {

    return (
        <footer className="fluid">
            <Col>
                <div className="footer__logo footer__company"><span className="bold">Floww</span> <span className="light">media</span>
                </div>
                <div className="footer__contact footer__company" >
                    <img src={email} alt=""/>
                    <p className='footer__link'>kontakt@flowwmedia.no</p>
                </div>
                <Col className="footer__contact footer__company" >
                    <img src={phone} alt=""/>
                    <p className='footer__link'>458 43 554</p>
                </Col>
            </Col>
            <Row className="flex-column">
                <FooterNav />
            </Row>
            <Row >
                <nav className='personvern__wrapper'>
                    <Link to="/personvern" className="nav-link footer__link personvern">Rettningslinjer for personvern</Link>
                </nav>
            </Row>
        </footer>
    );
}