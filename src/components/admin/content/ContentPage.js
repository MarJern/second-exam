import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import Container from "react-bootstrap/Container"
import ContentList from "./ContentList";
import { usePageTitle } from "../../common/PageTitle";
import CreateBreadcrumb from "../../layout/Breadcrumb";

export default function ContentPage() {
	const [page_title, setPageTitle] = usePageTitle("Rediger tjenester | Floww media");
	return (
		<Container>
			<main className="wrapper">
				<CreateBreadcrumb link="Rediger tjenester" />
				<Heading title=" Rediger tjenester" />
				{/* <p>
					<Link to="/admin/content/add">Legg til tjeneste</Link>
				</p> */}
				<ContentList />
			</main>
		</Container>
	);
}
