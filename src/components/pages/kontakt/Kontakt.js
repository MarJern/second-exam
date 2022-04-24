import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import H2Title from "../../layout/H2Title";
import img from "../../../images/growth.jpg"

export default function Kontakt() {
    const [page_title, setPageTitle] = usePageTitle("Kontakt oss | Floww media");
    return (
        <Container className="wrapper my-3 m-auto">
            <CreateBreadcrumb link="Kontakt Oss" />
            <Heading title="Kontakt oss" />
            <img className="image" src={img} alt="Plant growing"/>
            <article className="page__component">
                <H2Title title="Vi ønsker å bistå ditt firma i sin vekst"/>
                <p className="intro__text">Vi er alltid interessert i nye utfordringer og hyggelige samarbeid. Kontakt oss gjerne for en uforpliktende prat på telefon eller e-post, så finner vi veien fremover sammen.</p>
            </article>
            <section className="page__component">
                <h2 className="email component__title">kontakt@flowwmedia.no</h2>
                <p>Eller ring oss på telefonnummer <span className="kontakt">458 43 554</span></p>
            </section>
            <article className="page__component">
					<Button className="button button__link btn-primary"><Link to="/tjenester">Se hva vi kan hjelpe deg med</Link></Button> 
			</article>
        </Container>
    );
}