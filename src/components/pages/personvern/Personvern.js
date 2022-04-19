import Container from "react-bootstrap/Container";
import Heading from "../../layout/Heading";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import H2Title from "../../layout/H2Title";

export default function Oss() {
	const [page_title, setPageTitle] = usePageTitle("Personvernerlæring | Floww Media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Rettningslinjer for personvern"/>
			<Heading title="Rettningslinjer for personvern" />
			<main>
				<article>
					<section className="page__component">
						<H2Title title="Innledning" />
						<div className="component__content intro__text">
							<p>Floww AS, herunder omtalt som "Vi", er opptatt av at du skal ha tillit til oss og hvordan vi behandler dine personopplysninger. I denne personvernerklæringen forklarer vi derfor hvorfor vi samler inn informasjon om deg, hvordan vi bruker denne informasjonen og hvordan vi tar hensyn til ditt personvern.</p>
							<p>Personopplysninger er opplysninger og vurderinger som kan knyttes til en identifiserbar enkeltperson. Dette kan for eksempel være navn og kontaktinformasjon, kjøpshistorikk eller informasjon om interesser.</p>
							<p>Bruk av personopplysninger må følge personopplysningsloven. Vi, som behandlingsansvarlig, vil sørge for at vi bruker personopplysninger om deg i samsvar med lovens regler.</p>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Hvilke personopplysninger har vi om deg" />
						<div className="component__content intro__text">
							<p>Avhengig av hvilken informasjon du gir oss, hvordan du bruker våre tjenester, og hvilke tillatelser du gir oss, har vi disse opplysningene om deg:</p>
							<ul>
								<li>Kommunikasjon: Informasjon du gir oss når du har kontakt med vårt kundesenter. Herunder, men ikke begrenset til, e-poster, telefon og kontaktskjemaet.
								</li>
								<li>Opplysninger om bruk på nettsidene: Informasjon vi får når du bruker vår nettside, som hva slags enhet du har (f.eks. mobil eller PC), IP-adresse, hvilke sider du besøker og hvilke funksjoner du bruker der.
								</li>
							</ul>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Hva bruker vi personopplysningene til" />
						<div className="component__content intro__text">
							<p>Vi bruker personopplysningene dine til følgende formål:</p>
							<ol>
								<li>Tilby nettside: Vi bruker opplysninger for å tilpasse vår nettside til det tekniske utstyret du bruker.
								</li>
								<li>Kundeservice: Vi lagrer opplysninger som du gir og mottar dersom du har kontakt med oss for å yte service.
								</li>
								<li>Statistikk: Vi utarbeider statistikk og kartlegger markedstrender for å forbedre og videreutvikle våre produkter og tjenester. Her blir kun anonymisert data benyttet, uten noen form for tilknytning til deg.
								</li>
							</ol>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Hvem deler vi personopplysninger med" />
						<div className="component__content intro__text">
							<p>Vi deler aldri personopplysninger med tredjeparter, med mindre du er spesifikt informert om dette og det er en nødvendighet for å levere en tjeneste. Dette vil kun bli gjort etter samtykke fra deg.</p>
							<p>I enkelttilfeller kan vi utlevere personopplysninger dersom det kreves, eksempelvis til offentlige myndigheter, ved mistanke om lovbrudd.</p>
							<p>Vi kan for øvrig dele anonymiserte opplysninger med samarbeidspartnere for bl.a. markedsanalyser, annonsering og tjenesteutvikling.</p>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Hvor lenge lagrer vi personopplysninger" />
						<div className="component__content intro__text">
							<p>Vi lagrer opplysninger om deg, kun så lenge det er nødvendig for å oppnå formålet de ble innhentet for, eller dersom vi er pålagt å lagre opplysningene. Opplysningene vil slettes eller anonymiseres når de ikke lengre er nødvendige for å oppnå formålet.</p>
							<p>Dersom du avslutter kundeforholdet ditt hos oss vil all persontilknyttet data slettes innen minst 6 måneder. Dersom du ønsker dine opplysninger og data utlevert, ber vi deg ta kontakt med oss på kontakt@flowwmedia.no.</p>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Dine rettigheter" />
						<div className="component__content intro__text">
							<p>Avhengig av hvilken informasjon du gir oss, hvordan du bruker våre tjenester, og hvilke tillatelser du gir oss, har vi disse opplysningene om deg:</p>
							<ul>
								<li>Gi deg ytterligere informasjon om hvordan vi behandler dine personopplysninger.</li>
								<li>Gi deg en kopi av personopplysninger om deg.</li>
								<li>Oppdatere dine personopplysninger.</li>
								<li>Slette opplysninger som vi ikke lengre har grunnlag til å oppbevare.</li>
								<li>Begrense eller stoppe behandlingen av dine opplysninger.</li>
								<li>Motsette deg automatiske individuelle avgjørelser, inkludert profilering.</li>
								<li>Gi deg opplysninger du har gitt til oss i en strukturert, alminnelig anvendt og maskinlesbart format eller, der det er teknisk mulig, be oss om å overføre disse til en annen virksomhet.</li>
								<li>Trekke tilbake eventuelle samtykker du har gitt oss.</li>
							</ul>
							<p>Vær klar over at det finnes begrensninger i disse rettighetene. Ta gjerne kontakt med oss hvis du vil ha mer informasjon om dette.</p>
							<p>Hvis du mener at vi behandler personopplysninger i strid med personopplysningsloven, har du rett til å klage til Datatilsynet. Før du eventuelt gjør dette, vil vi gjerne at du kontakter oss slik at vi kan besvare dine spørsmål eller oppklare eventuelle misforståelser.</p>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Cookies" />
						<div className="component__content intro__text">
							<p>Vi bruker cookies på våre nettsider for å sikre funksjonalitet på nettsiden, analysere nettrafikk og se hvilke områder på vårt nettsted du har besøkt. All data som lagres til dette formålet vil bli anonymisert.</p>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Endringer i personvernerklæringen" />
						<div className="component__content intro__text">
							<p>Vi vil kunne oppdatere personvernerklæringen fra tid til annen. Du vil få beskjed om endringer av betydning. Du vil alltid finne siste versjon av vår personvernerklæring på nettsiden.</p>
						</div>
					</section>
					<section className="page__component">
						<H2Title title="Kontaktinformasjon" />
						<div className="component__content intro__text">
							<p>Hvis du ønsker å komme i kontakt med oss, kan du benytte følgende kontaktinformasjon:</p>
							<ul>
								<li>458 43 554</li>
								<li className="email">kontakt@flowwmedia.no</li>
							</ul>
						</div>
					</section>
				</article>
			</main>
		</Container>
	);
}
