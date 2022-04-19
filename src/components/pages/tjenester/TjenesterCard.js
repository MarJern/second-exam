import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import H2Title from "../../layout/H2Title";

export default function TjenesterCard ({title, body}) {
    return (
        <Card className="page__component tjeneste__card">
            <Card.Body className="p-0">
                <h2 className="component__title">{title}</h2>
                <Card.Text>{body}</Card.Text>
                <Button className="button button__link"><Link to="/kontakt">NOE</Link></Button>
            </Card.Body>
        </Card>
    );
};