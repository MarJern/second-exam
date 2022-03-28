import { Link } from "react-router-dom";


function FooterNav() {

	return (
        <nav>
            <Link to="/" className="nav-link footer__link">Hjem</Link>
			<Link to="/tjenester" className="nav-link footer__link">Tjenester</Link>
			<Link to="/seo" className="nav-link footer__link">Om SEO</Link>
			<Link to="/oss" className="nav-link footer__link">Om oss</Link>
			<Link to="/kontakt" className="nav-link footer__link">Kontakt oss</Link>
            <Link to="/login" className="nav-link footer__link">Logg inn</Link>
        </nav>
	);
}

export default FooterNav;