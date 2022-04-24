import Container from "react-bootstrap/Container";
import background from "../../../images/fl-heroImage.svg";
import { usePageTitle } from "../../common/PageTitle";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import H2Title from "../../layout/H2Title";
import CtaButton from "../../common/CtaButton";
import img from "../../../images/graph.jpg"
import HomeAccordion from "./Accordion";

export default function HomePage() {
	const [page_title, setPageTitle] = usePageTitle("Floww media | SEO rådgivning og innholdsproduksjon");
	return (
		<Container>
			<main className="wrapper">
				<section className="hero__section" style={{ backgroundImage: `url(${background})`, backgroundSize: `100%`}}>
					{/* <Heading title="Vi gir deg synlighet på nett"/> */}
					<h1 className="hero__text">Vi gir deg synlighet på nett</h1>
				</section>
				<section className="page__component">
					<div className="component__content">
						<p className="intro__text"><span className="highlighted__text">SEO står for søkemotoroptimalisering.</span> God SEO øker din synlighet på nett. 90% av all aktivitet på internett starter med et Google søk. 70 % av all søketrafikk forholder seg kun til første resultatside og 60 % forholder seg kun til de fem øverste resultatene av det organiske søket.</p>
						<p className="intro__text">En god SEO strategi gir  bedriften din mer tyngde til å rangere høyere på viktige søkeord i Google, noe som sikrer mer relevant og lønnsom trafikk til nettsiden.</p>
					</div>
				</section>
				<section>
					<img className="image" src={img} alt="SEO strategi møte"/>
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
				<CtaButton text="Ønsker du økt trafikk til nettsiden din?" cta="Få SEO rådgivning" />
				<article className="page__component" >
					<H2Title title="4 grep for bedre rangering"/>
					<HomeAccordion />
				</article>
				<article className="page__component">
					<h3 className='button__header'></h3>
					<Button className="button button__link btn-primary"><Link to="/tjenester">Les om våre tjenester</Link></Button> 
				</article>
			</main>
		</Container>
	);
}
