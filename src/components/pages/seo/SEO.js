import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";

export default function Seo() {
	const [page_title, setPageTitle] = usePageTitle("Om SEO | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Om SEO" />
			<Heading title="Om SEO" />
			<main>
				<p>skriv noe</p>
			</main>
		</Container>
	);
}
