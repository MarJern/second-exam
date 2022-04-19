import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Profil from "../../../images/profile.jpg"
import Row  from "react-bootstrap/Row";

export default function AboutCard () {
    return (
        <Card style={{ width: '18rem' }} className="profile__card page__component">
            <div className="row no-gutters">
                <div>
                    <Card.Body className="p-0">
                        <Row className="profile__flex mt-4">
                            <div className="profile__image__wrapper">
                                <Card.Img variant="top" src={Profil} alt="Profile image" className="round__image"/>
                            </div>
                            <div className="profile__info">
                                <Card.Title>Simen Russ</Card.Title>
                                <Card.Text>Daglig leder</Card.Text>
                                <ListGroup className="list-group-flush profile__list">
                                    <ListGroupItem className="profile__list-item" border="none" >458 43 554</ListGroupItem>
                                    <ListGroupItem className="profile__list-item email" border="none" >sm@flowwmedia.no</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Row>
                        <Card.Text>Simen er utdannet siviløkonom ved BI, men har jobbet med markedsføringsstrategi og SEO de siste åtte årene. 
                        </Card.Text>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};