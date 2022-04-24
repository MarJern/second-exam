import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import img from "../../../images/people.jpg";
import CtaButton from "../../common/CtaButton";
import TjenesteList from "./TjenesteList";

export default function Tjenester() {
	const [page_title, setPageTitle] = usePageTitle("Våre tjenester | SEO, innholdsproduksjon Floww media");

	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Tjenester" />
			<Heading title="Tjenester" />
			<main className="wrapper">
				<section>
					<img className="image" src={img} alt="SEO strategi møte"/>
				</section>
				<article className="page__component">
					<TjenesteList />
				</article>
				<CtaButton text="Vi skreddersyr en strategi for å øke din rangering i søkemotorer" cta="Kontakt oss"/>
			</main>
		</Container>
	);
}