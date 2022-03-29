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
	username: yup.string().required("Vennligst oppgi korrekt brukernavn"),
	password: yup.string().required("Vennligst oppgi korrekt passord"),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const navigate = useNavigate();

	const { register, handleSubmit, formState: { errors } }= useForm({
		resolver: yupResolver(schema),
	});

	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		// console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			navigate.push("/dashboard");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
	
		<Container onSubmit={handleSubmit(onSubmit)}>
			{loginError && <FormError>{loginError}</FormError>}
			<Form disabled={submitting}>
				<Form.Group>
					<Col sm={4} md={6} className="p-0">
						<Form.Input type="text" name="username" placeholder="Brukernavn" ref={register} className="my-2"/>
						{errors.username && <FormError>{errors.username.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0">
						<Form.Input name="password" placeholder="Passord" ref={register} type="password" />
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</Col>
					<Button>{submitting ? "Logger inn" : "Logg inn"}</Button>
				</Form.Group>
			</Form>
		</Container>
	
	);
}
