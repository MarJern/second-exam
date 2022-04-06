import PropTypes from "prop-types";
import Heading from "../layout/Heading";
import DashboardMenu from "../admin/AdminMenu";

export default function DashboardPage({ children }) {
	return (
		<>
			<Heading content="Dashboard" />
			<DashboardMenu />
			{children ? children : <p>Select a section</p>}
		</>
	);
}

DashboardPage.propTypes = {
	children: PropTypes.node,
};
