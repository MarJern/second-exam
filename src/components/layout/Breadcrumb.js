import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from 'react-router-dom';

export default function CreateBreadcrumb({link}) {
    return (
        <Breadcrumb aria-label="breadcrumb" className="breadcrumb_wrapper">
                <Breadcrumb.Item href="#" className="breadcrumb_link">
                    <Link to="/" className="breadcrumb_link">Home</Link>
                </Breadcrumb.Item>
            <Breadcrumb.Item active className="breadcrumb_link">{link}</Breadcrumb.Item>
        </Breadcrumb>
    );
}