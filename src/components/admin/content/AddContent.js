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
	title: yup.string().required("Vennligst angi tittel på bloggost"),
	message: yup.string().required("Meldingen må være på minimum 10 tegn").min(10, "Meldingen må være på minimum 10 tegn."),
});

export default function AddContent() {
	const [page_title, setPageTitle] = usePageTitle("Opprett bloggpost | Floww media");

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
			navigate("/admin/content");
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
			<CreateBreadcrumb link="Legg til post" />
			{/* <Heading title="Om oss" /> */}
			{serverError && <FormError>{serverError}</FormError>}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group disabled={submitting}>
					<Col sm={4} md={6} className="p-0">
						<Form.Control name="title" type="text" placeholder="Tittel" {...register("title")} className="my-2" />
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0">
						<Form.Control name="content" as="textarea" type="text" placeholder="Skriv tekst her" {...register("message")} className="my-2 message"/>
					</Col>
					<Col sm={4} md={6} className="p-0">
						<MediaDropdown />
					</Col>
					<Button type="submit" className="button">{submitting ? "Submitting..." : "Submit"}</Button>
				</Form.Group>
			</Form>
			</Container>
		// </AdminPage>
	);
}
