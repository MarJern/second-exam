import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import AboutCard from "./AboutCard";
import { usePageTitle } from "../../common/PageTitle";
import hand  from "../../../images/hand-white.svg";
import H2Title from "../../layout/H2Title";

export default function Oss() {
	const [page_title, setPageTitle] = usePageTitle("Om oss | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Om oss" />
			<Heading title="Om oss" />
			<main>
				<section className="page__component">
					<p>Hvis ikke kundene våre lykkes, så lykkes ikke vi heller. Gjennom godt sammarbeid, faglig nysgjerrighet og et kritisk øye skaper vi kampanjer some er synlige på nett og et kvalitetsinnhold som gir kundene våre varige fortrinn.</p>
					<p>Vi er et lite og uavhengig firma med base i Oslo. Våre fagspesialister har lang erfaring og stor lidenskap for faget.</p>
				</section>
				<section>
					<AboutCard />
				</section>
				<section className="page__component">
					<H2Title title="Ta gjerne kontakt med oss" />
					<div className="row nowrap">
						<img src={hand} alt="" className="wave"/>
						<p className="m-0 wave__text p-0">kontakt@flowwmedia.no</p>
					</div>
				</section>
			</main>

		</Container>
	);
}
