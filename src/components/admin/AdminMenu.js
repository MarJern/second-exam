import { Link } from "react-router-dom";

export default function AdminMenu() {
	return (
		<nav className="dashboard">
			Sections: <Link to="/admin">Posts</Link>
		</nav>
	);
}
