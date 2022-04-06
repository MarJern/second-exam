import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import Container from "react-bootstrap/Container"
import ContentList from "./ContentList";
import { usePageTitle } from "../../common/PageTitle";
import CreateBreadcrumb from "../../layout/Breadcrumb";

export default function ContentPage() {
	const [page_title, setPageTitle] = usePageTitle("Bloggartikler | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
		{/* <AdminPage> */}
			<CreateBreadcrumb link="Admin side" />
			<Heading size="3" title="Bloggartikler" />
			<p>
				<Link to="/admin/content/add">Legg til Bloggartikkel</Link>
			</p>
			<ContentList />
		{/* </AdminPage> */}
		</Container>
	);
}
