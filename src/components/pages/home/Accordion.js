import Accordion from "react-bootstrap/Accordion"

export default function HomeAccordion () {
    return (
        <Accordion flush defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Markedsanalyse og SEO-strategi</Accordion.Header>
                <Accordion.Body>
                For å bygge en god SEO-strategi må man kjenne til søkemarkedet for virksomheten. En søk- og atferdsanalyse er i praksis en markedsanalyse på søkemotoren. God kjennskap til målgruppen og konkurrende virksomheter er viktig for å bygge en sterk og effektiv SEO-strategi som utkonkurrerer sammenlignbare nettsider og sikrer høy plassering i søkeresultater.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Teknisk SEO</Accordion.Header>
                <Accordion.Body>
                God teknisk SEO er en viktig forutsetning for å bli synlig i søkeresultatet, og handler om sidens tekniske tilgjengelighet. Enkelt forklart er en godt kodet nettside viktig for å rangere godt hos søkemotorer som Google. Vi har god kjennskap til de tekniske kriteriene for å rangere godt i søk, og gjennom analyser legger vi en plan for hvordan vi skal teknisk optimalisere siden din for SEO.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Optimalisert innhold</Accordion.Header>
                <Accordion.Body>
                Også kalt «on page»-optimalisering, handler om å tilpasse innholdet i henhold til søkeord man ønsker å rangere på. Ordene du bruker i tittel, H1, H2, metabeskrivelse, internlenker og bilder har stor betydning. I tillegg til dette er det viktig at siden som helhet har en god kvalitet og brukeropplevelse, da dette gir god synlighet og konverteringsrate.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Autoritetsbygging</Accordion.Header>
                <Accordion.Body>
                Autoritet er viktig fpr å rangere godt i søk. Det er flere faktorer som påvirker autoritet. Det ene er  internt og ekstern lenkebygging, i tilleg til det har en senere oppdatering av googles  kjernealgoritmen satt økt fokus på kvaliteten på innholdet på nettstedet. Sider som etter kriteriene anses som «upålitelige» og av lavere kvalitet utelates fra søkeresulater, og rangeringen til nettsider med godt kvalitetsinnhold forbedres.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};