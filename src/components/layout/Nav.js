import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthContext from "../../context/AuthContext";

function CreateNav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useNavigate();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Floww media</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">
                        Hjem
                    </NavLink>
					<NavLink to="/tjenester" className="nav-link">
                        Tjenester
                    </NavLink>
					<NavLink to="/seo" className="nav-link">
                        Om SEO
                    </NavLink>
					<NavLink to="/oss" className="nav-link">
                        Om oss
                    </NavLink>
					<NavLink to="/kontakt" className="nav-link">
                        Kontakt oss
                    </NavLink>
                    {/* <NavLink to="/detail/:param" className="nav-link">
                        Detail
                    </NavLink> */}
                    {auth ? (
                        <>
                            | <NavLink to="/admin" className="nav-link">Admin</NavLink> | <button onClick={logout}>Logg ut</button>
                        </>
                    ) : (
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
	);
}

export default CreateNav;
