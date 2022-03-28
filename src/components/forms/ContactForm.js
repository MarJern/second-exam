import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { DEFAULT_VALUES} from "../../constants/reg"
import FormError from "./FormError"

let userSchema = yup.object().shape({
	name: yup.string().required("Ditt navn").min(3, "Navnet ditt må bestå av minst tre bokstaver."),
	email: yup.string().required("Din e-postadresse").email("Vennlist oppgi en gyldig e-postadresse."),
	message: yup.string().required("Skriv din melding her").min(10, "Meldingen må være på minimum 10 tegn.") ,
});

function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(userSchema),
	});

	function onSubmit(data) {
		console.log(data);
		setSubmitted(true);
		reset(DEFAULT_VALUES);
	}

	console.log(errors);

	return (
		<Container className="p-0">
			{submitted && <Alert variant="success">Success</Alert>}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Col sm={4} md={6} className="p-0">
						<Form.Control type="text" placeholder="Navn" {...register("name")} className="my-2" />
						{errors.name && <FormError>{errors.name.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0">
						<Form.Control type="text" placeholder="E-post" {...register("email")} className="my-2" />
						{errors.email && <FormError>{errors.email.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0">
						<Form.Control as ="textarea" type="text" placeholder="Skriv meldingen din" {...register("message")} className="my-2 message" />
						{errors.message && <FormError>{errors.message.message}</FormError>}
					</Col>
					<Button variant="primary" type="submit">
						Send
					</Button>
				</Form.Group>
			</Form>
		</Container>
	);
}

export default ContactForm;