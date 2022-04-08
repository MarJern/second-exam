import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import desk from "../../../images/desk.jpg";

export default function Tjenester() {
	const [page_title, setPageTitle] = usePageTitle("Tjenester | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Tjenester" />
			<Heading title="Tjenester" />
			<main className="wrapper">
				<section>
					<div>
						<img className="image" src={desk} alt="BigCo Inc. logo"/>
					</div>
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
			</main>
		</Container>
	);
}
