import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function CtaButton({text, cta}) {
    return (
        <article className="page__component">
					<h3 className='button__header'>{text}</h3>
					<Button className="button button__link btn-primary"><Link to="/kontakt">{cta}</Link></Button> 
		</article>
    );
}