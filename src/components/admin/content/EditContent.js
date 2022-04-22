import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import DeleteButton from "./DeleteButton";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import CtaButton from "../../common/CtaButton";

const schema = yup.object().shape({
	title: yup.string().required("Du må legge til en overskrift"),
	content: yup.string().required("Beskrivelse må bestå av minimum 30 tegn").min(30, "Beskrivelse må bestå av minimum 30 tegn.")
});

export default function EditContent() {
	const [page_title, setPageTitle] = usePageTitle("Rediger tjeneste | Floww Media");

	const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);

	const { register, handleSubmit, formState: { errors }} = useForm({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();
	const http = useAxios();

	let { id } = useParams();

	const url = `wp/v2/posts/${id}`;

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPost(response.data);
				} catch (error) {
					console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	async function onSubmit(data) {
		setUpdatingPost(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			// navigate("/tjenester")
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div>Laster...</div>;

	if (fetchError) return <div>Problemer med å laste innhold</div>;

	return (
		// <AdminPage>
		<Container>
			<CreateBreadcrumb link="Rediger tjeneste" />
			<Heading title="Rediger tjeneste" />
			<p className="page__component intro__text">Her kan du legge til en ny tjeneste. Vennligst påse at tjenestebeskrivelsen består av mer enn 30 tegn.</p>
			{updated && <div className="success">Tjenesten ble oppdatert</div>}
			{updateError && <FormError>{updateError}</FormError>}
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group disabled={updatingPost}>
					<Col sm={4} md={6} className="p-0 form__component">
						<Form.Label for="title">Tittel</Form.Label>
						<Form.Control name="title" type="search" placeholder="Overskrift" defaultValue={post.title.rendered} {...register("title")} id="title"/>
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0 form__component">
						<Form.Label for="content">Beskrivelse</Form.Label>
						<Form.Control name="content" as="textarea" type="search" defaultValue={post.content.rendered} className="message textarea" {...register("content")} id="content"/>
						{errors.content && <FormError>{errors.content.message}</FormError>}
					</Col>
					<button className="button button__link btn-primary btn">Lagre endringer</button>
					<DeleteButton id={post.id} />
				</Form.Group>
			</Form>
		{/* // </AdminPage> */}
		</Container>
	);
}
