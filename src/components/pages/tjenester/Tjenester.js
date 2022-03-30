import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";

export default function Tjenester() {
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Tjenester" />
			<Heading title="Tjenester" />
			<main>
				<p>skriv noe</p>
			</main>
		</Container>
	);
}
