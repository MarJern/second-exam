import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import H2Title from "../../layout/H2Title";
import H3Title from "../../layout/H3Title";
import CtaButton from "../../common/CtaButton";
import desk from "../../../images/desk.jpg";

export default function Seo() {
	const [page_title, setPageTitle] = usePageTitle("Om SEO | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Om SEO" />
			<Heading title="Om SEO" />
			<main>
				<section>
						<img className="image" src={desk} alt="Workdesk with SEO-analysis shown on I-phone"/>
				</section>
				<section className="page__component">
					<H2Title title="SEO-optimalisering" />
					<div className="component__content intro__text">
						<p>Innledning til hva SEO ER. FYll UT SELV: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
				</section>
				<section className="page__component">
					<H3Title title="Skreddersydd SEO Strategi"/>
					<p>Alt etter hva din bedrifts forutsetninger og mål er, vil vår SEO-rådgiver skreddersy en SEO-strategi sammen med dere. Vi tilbyr SEO i Trondheim og Oslo. Skal dere redesigne og utvikle en ny nettside, bør søkemotoroptimalisering ha fokus fra starten av for å sikre en godt optimalisert struktur og teknisk løsning. For å SEO-optimalisere dagens nettside, kan dere gjennom en SEO-analyse få en tiltaksliste og forslag til SEO strategi som vil øke deres synlighet i søkemotorer som Google. Vår SEO-rådgiver kan også følge opp arbeidet med månedlig sjekk av din nettside.</p>
				</section>
				<section className="page__component">
					<H3Title title="SEO + UX design"/>
					<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				</section>
				<section className="page__component">
					<H3Title title="Optimalisert Innhold"/>
					<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
				</section>
				<CtaButton text="La oss hjelpe deg med å bygge synlighet på nett" cta="Kontakt oss"/>
			</main>
		</Container>
	);
}
