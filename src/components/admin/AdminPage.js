import PropTypes from "prop-types";
import Heading from "../layout/Heading";
import AdminMenu from "./AdminMenu";
import Container from "react-bootstrap/Container";
import { usePageTitle } from "../common/PageTitle";
import CreateBreadcrumb from "../layout/Breadcrumb";



export default function AdminPage({ children }) {
    const [page_title, setPageTitle] = usePageTitle("Admin side | Floww media");
    
    return (
        <Container>
            <main className="wrapper">
                <CreateBreadcrumb link="Admin side" />
                <Heading title="Admin side"/>
                <AdminMenu />
            </main>
        </Container>
    );
}


AdminPage.propTypes = {
	children: PropTypes.node,
};
