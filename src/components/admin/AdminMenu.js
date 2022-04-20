import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom";
import add from "../../images/add-icon.svg";
import edit from "../../images/edit-icon.svg";
import logoutIcon from "../../images/logout-icon.svg";


export default function AdminMenu() {
	const [auth, setAuth] = useContext(AuthContext);

	const navigate = useNavigate();

	function logout() {
		setAuth(null);
		navigate("/");
	}

	return (
		<nav className="dashboard">
			<div className="admin__list">
                <img src={add} alt=""/>
                <p className='admin__link'><Link to="/admin/content/add">Legg til tjeneste</Link></p>
            </div>
			<div className="admin__list" >
                <img src={edit} alt=""/>
                <p className='admin__link'><Link to="/admin/content/edit">Endre tjeneste</Link></p>
            </div>
			<div className="admin__list" >
				{auth ? (
                        <>
							<img src={logoutIcon} alt=""/>
                            <p className="admin__link" onClick={logout}>Logg ut</p>
                        </>
                    ) : (
                        <Link to="/login" className="nav-link hide"></Link>
                    )}
            </div>
		</nav>
	);
}
