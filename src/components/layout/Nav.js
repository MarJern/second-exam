import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthContext from "../../context/AuthContext";

function CreateNav() {
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	function logout() {
		setAuth(null);
		navigate("/");
	}

	return (
		<Navbar expand="lg" variant="dark" className="nav__bar">
            <Navbar.Brand href="/" className="logo"><span className="bold">Floww</span> <span className="light">media</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-inline d-lg-none" />
            <Navbar.Collapse id="basic-navbar-nav" className="px-3">
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">Hjem</NavLink>
					<NavLink to="/tjenester" className="nav-link">Tjenester</NavLink>
					<NavLink to="/seo" className="nav-link">Om SEO</NavLink>
					<NavLink to="/oss" className="nav-link">Om oss</NavLink>
					<NavLink to="/kontakt" className="nav-link">Kontakt oss</NavLink>
                    {auth ? (
                        <>
                            <NavLink to="/admin" className="nav-link">Admin</NavLink><button className="button logout__btn" onClick={logout}>Logg ut</button>
                        </>
                    ) : (
                        <NavLink to="/login" className="nav-link hide">Logg inn</NavLink>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	);
}

export default CreateNav;
