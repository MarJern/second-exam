import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import AboutCard from "./AboutCard";
import { usePageTitle } from "../../common/PageTitle";

export default function Oss() {
	const [page_title, setPageTitle] = usePageTitle("Om oss | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Om oss" />
			<Heading title="Om oss" />
			<main>
				<section>
					<p>Hvis ikke kundene våre lykkes, så lykkes ikke vi heller. Gjennom godt sammarbeid, faglig nysgjerrighet og et kritisk øye skaper vi kampanjer some er synlige på nett og et kvalitetsinnhold som gir kundene våre varige fortrinn.</p>
					<p>Vi er et lite og uavhengig firma med base i Oslo. Våre fagspesialister har lang erfaring og stor lidenskap for faget.</p>
				</section>
				<section>
					{/* <img src="" alt=""></img> */}
					<AboutCard />
				</section>
			</main>

		</Container>
	);
}
