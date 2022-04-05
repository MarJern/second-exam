import Container from "react-bootstrap/Container";
import Heading from "../../layout/Heading";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";

export default function Oss() {
	const [page_title, setPageTitle] = usePageTitle("Personvernerlæring | Floww Media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Rettningslinjer for personvern"/>
			<Heading title="Rettningslinjer for personvern" />
			<main>
				<p>skriv noe</p>
			</main>
		</Container>
	);
}
