import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import img from "../../../images/people.jpg";
import CtaButton from "../../layout/CtaButton";
import TjenesteList from "./TjenesteList";

export default function Tjenester() {
	const [page_title, setPageTitle] = usePageTitle("Våre tjenester | SEO, innholdsproduksjon Floww media");

	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Tjenester" />
			<Heading title="Tjenester" />
			<main className="wrapper">
				<section>
					<img className="image" src={img} alt="Workdesk with SEO-analysis shown on I-phone"/>
				</section>
				<article className="page__component">
					<TjenesteList />
				</article>
				<CtaButton text="La oss hjelpe deg med å bygge synlighet på nett" cta="Kontakt oss"/>
			</main>
		</Container>
	);
}