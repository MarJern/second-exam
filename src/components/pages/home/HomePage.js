import Container from "react-bootstrap/Container";
import Heading from "../../layout/Heading";
import background from "../../../images/fl-heroImage.svg";
import { usePageTitle } from "../../common/PageTitle";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import H2Title from "../../layout/H2Title";
import CtaButton from "../../layout/CtaButton";

export default function HomePage() {
	const [page_title, setPageTitle] = usePageTitle("Floww media");
	return (
		<Container>
			<main className="wrapper">
				<section className="hero__section" style={{ backgroundImage: `url(${background})`, backgroundSize: `100%`}}>
					{/* <Heading title="Vi gir deg synlighet på nett"/> */}
					<h1 className="hero__text">Vi gir deg synlighet på nett</h1>
				</section>
				<section className="page__component">
					<H2Title title="SEO-optimalisering"/>
					<div className="component__content">
						<p className="intro__text">90% av all aktivitet på internett starter med et søk i Google. 70% av disse forholder seg kun til første resultatside og 60% forholder seg kun til de fem øverste resultatene av det organiske søket.</p>
						<p className="intro__text">Jobber du strategisk med SEO (søkemotoroptimalisering), vil bedriften din få mer tyngde til å rangere høyere på viktige søkeord i Google, og dermed sikre mer relevant og lønnsom trafikk til nettsiden.</p>
					</div>
				</section>
				<section className="page__component">
					<H2Title title="Hva kan vi bistå deg med" />
					<ul>
						<li>SEO-strategi</li>
						<li>SEO-analyser</li>
						<li>Søkeordsanalyse</li>
						<li>Struktur og UX</li>
						<li>Teknisk SEO</li>
						<li>SEO-tekster og innhold</li>
					</ul>
				</section>
				<CtaButton text="Ønsker du økt trafikk til nettsiden din?" cta="Få SEO rådgivning"/>
			</main>
		</Container>
	);
}
