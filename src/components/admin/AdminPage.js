import PropTypes from "prop-types";
import Heading from "../layout/Heading";
import DashboardMenu from "./AdminMenu";
import Container from "react-bootstrap/Container";
import { usePageTitle } from "../common/PageTitle";
import CreateBreadcrumb from "../layout/Breadcrumb";



export default function AdminPage({ children }) {
    const [page_title, setPageTitle] = usePageTitle("Admin side | Floww media");
    return (
        <Container className="wrapper">
            <CreateBreadcrumb link="Admin side" />
            <Heading title="Admin side"/>
            <DashboardMenu />
			{children ? children : <p>Select a section</p>}
        </Container>
    );
}


AdminPage.propTypes = {
	children: PropTypes.node,
};
