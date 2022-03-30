import Heading from "../../layout/Heading";
import LoginForm from "../../forms/LoginForm";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";

export default function LoginPage() {
	return (
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Logg inn" />
			<Heading title="Logg inn" />
			<LoginForm />
		</Container>
	);
}
