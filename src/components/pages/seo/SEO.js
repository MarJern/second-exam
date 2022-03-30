import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";

export default function Seo() {
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
