import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import AboutCard from "./AboutCard";

export default function Oss() {
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Om oss" />
			<Heading title="Om oss" />
			<main>
				<img src="" alt=""></img>
				<p>skriv noe</p>
				<AboutCard />
			</main>

		</Container>
	);
}
