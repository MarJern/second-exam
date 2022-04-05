import Heading from "../../layout/Heading";
import ContactForm from "../../forms/ContactForm";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";

export default function Kontakt() {
    const [page_title, setPageTitle] = usePageTitle("Kontakt oss | Floww media");
    return (
        <Container className="wrapper my-3 m-auto">
            <CreateBreadcrumb link="Kontakt Oss" />
            <Heading title="Kontakt oss" />
            <ContactForm />
        </Container>
    );
}