import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import MediaDropdown from "../../admin/media/MediaDropdown";
import AdminPage from "../AdminPage";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";

const schema = yup.object().shape({
	title: yup.string().required("Vennligst legg til en overskrift"),
	content: yup.string().required("Beskrivelse må bestå av minimum 30 tegn.").min(30, "Beskrivelse må bestå av minimum 30 tegn."),
});

export default function AddContent() {
	const [page_title, setPageTitle] = usePageTitle("Legg til tjeneste | Floww media");

	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const navigate = useNavigate();
	const http = useAxios();

	const { 
		register, 
		handleSubmit, 
		formState: { errors },
	 } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		console.log(data);

		try {
			const response = await http.post("/wp/v2/posts", data);
			console.log("response", response.data);
			navigate("/tjenester");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		// <AdminPage>
		<Container>
			<CreateBreadcrumb link="Legg til tjeneste" />
			<Heading title="Legg til tjeneste" />
			<p className="page__component intro__text">Her kan du legge til en ny tjeneste. Vennligst påse at tjenestebeskrivelsen består av mer enn 30 tegn.</p>
			{serverError && <FormError>{serverError}</FormError>}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group disabled={submitting}>
					<Form.Label for="title">Tittel</Form.Label>
					<Col sm={4} md={6} className="p-0 form__component">
						<Form.Control name="title" type="search" placeholder="Tittel" {...register("title")} id="title"/>
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0 form__component">
						<Form.Label for="content">Beskrivelse</Form.Label>
						<Form.Control name="content" as="textarea" type="text" placeholder="Skriv her" {...register("content")} className="message textarea" id="content"/>
						{errors.content && <FormError>{errors.content.message}</FormError>}
					</Col>
					<Button type="submit" className="button btn">{submitting ? "Lagres..." : "Legg til"}</Button>
				</Form.Group>
			</Form>
			</Container>
		// </AdminPage>
	);
}
