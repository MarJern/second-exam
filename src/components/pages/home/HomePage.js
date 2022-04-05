import Container from "react-bootstrap/Container";
import Heading from "../../layout/Heading";
import background from "../../../images/fl-heroImage.svg";
import { usePageTitle } from "../../common/PageTitle";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

export default function HomePage() {
	const [page_title, setPageTitle] = usePageTitle("Floww media");
	return (
		<Container>
			<main className="wrapper">
				<section className="hero__section" style={{ backgroundImage: `url(${background})`}}>
					<Heading title="Vi gir deg synlighet på nett"/>
				</section>
				<article>
					<h2>SEO-optimalisering</h2>
					<p>90% av all aktivitet på internett starter med et søk i Google. 70% av disse forholder seg kun til første resultatside og 60% forholder seg kun til de fem øverste resultatene av det organiske søket.</p>
					<p>Jobber du strategisk med SEO (søkemotoroptimalisering), vil bedriften din få mer tyngde til å rangere høyere på viktige søkeord i Google, og dermed sikre mer relevant og lønnsom trafikk til nettsiden.</p>
					<h3>Hva kan vi bistå deg med</h3>
					<ul>
						<li>SEO-strategi</li>
						<li>SEO-analyser</li>
						<li>Søkeordsanalyse</li>
						<li>Struktur og UX</li>
						<li>Teknisk SEO</li>
						<li>SEO-tekster og innhold</li>
					</ul>
				</article>
				<aside>
					<h4>Ønsker du at nettsiden din skal bli synlig på nett?</h4>
					<Button className="button button__link"><Link to="/kontakt">Ta kontakt</Link></Button> 
				</aside>
			</main>
		</Container>
	);
}
