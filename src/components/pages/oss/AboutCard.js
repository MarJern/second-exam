import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


export default function AboutCard () {
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                </div>
                <div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Daglig leder</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem border="none" >458 43 554</ListGroupItem>
                            <ListGroupItem border="none" >sm@flowwmedia.no</ListGroupItem>
                        </ListGroup>
                        <Card.Text>Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};