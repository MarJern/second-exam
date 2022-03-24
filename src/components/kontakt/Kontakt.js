import Heading from "../layout/Heading";
import ContactForm from "../forms/ContactForm";
import Container from "react-bootstrap/Container";

export default function Kontakt() {
    return (
        <Container className="wrapper">
            <Heading title="Kontakt oss" />
            <ContactForm />
        </Container>
    );
}