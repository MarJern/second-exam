import Container from "react-bootstrap/Container";
import Heading from "../../layout/Heading";
import CreateBreadcrumb from "../../layout/Breadcrumb";

export default function Oss() {
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
