export default function Tjenester() {
	const [page_title, setPageTitle] = usePageTitle("Tjenester | Floww media");
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Tjenester" />
			<Heading title="Tjenester" />
			<main className="wrapper">
				<section>
					<img className="image" src={img} alt="Workdesk with SEO-analysis shown on I-phone"/>
				</section>
				<article className="page__component">
					<TjenesterCard title="SEO" body="Som SEO-spesialist har løftet en rekke bedrifter, innenfor et bredt spekter av bransjer med varierende utgangspunkter, til å bli markedsdominerende på Google. Jeg forstår kundereisen, markedsføring og salg, dette kombinerer jeg for å skape de beste resultatene!" />
					<TjenesterCard title="Innholdsproduksjon" body="Vi produserer innhold for nettbutikker som fokuserer på synlighet på Google og gode konverteringer. Innholdet blir alltid skrevet for å få til handlingene jeg vil at leserne skal utføre." />
					<TjenesterCard title="Google-ads" body="Jeg gjør Google-annonsering med målbarhet som betyr at jeg gjør annonsering med full oversikt over kostnader og inntekter, dette betyr at vi fort finner ut hva som fungerer og hva som bør avsluttes. På denne måten tilnærmer vi oss kontinuerlig mer lønnsom annonsering." />
				</article>
				<CtaButton text="La oss hjelpe deg med å bygge synlighet på nett" cta="Kontakt oss"/>
			</main>
		</Container>
	);
}