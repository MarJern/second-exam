import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "./FormError";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Vennligst oppgi korrekt brukernavn.").min(3, "Brukernavn må bestå av minimum 3 bokstaver"),
	password: yup.string().required("Vennligst oppgi korrekt passord.").min(6, "Passord må bestå av minst seks tegn."),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm({
		resolver: yupResolver(schema),
	  });

	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			navigate("/admin");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
	
		<Container >
			{loginError && <div className="error">{loginError}</div>}
			<Form disabled={submitting} onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Col sm={4} md={6} className="p-0 form__component">
						<Form.Label for="title">Brukernavn</Form.Label>
						<Form.Control for="username" type="search" name="username" placeholder="Brukernavn" {...register('username')} id="title"/>
						{errors.username && <FormError>{errors.username.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0 form__component">
						<Form.Label for="password">Passord</Form.Label>
						<Form.Control for="password" type="password" name="password" placeholder="Passord" {...register('password')} className="message" id="password"/>
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</Col>
					<Button type="submit" className="button btn btn-primary">{submitting ? "Logger inn..." : "Logg inn"}</Button>
				</Form.Group>
			</Form>
		</Container>
	
	);
}
