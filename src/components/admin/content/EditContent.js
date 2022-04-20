import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
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
import CtaButton from "../../layout/CtaButton";

const schema = yup.object().shape({
	title: yup.string().required("Du må legge til en overskrift"),
	content: yup.string().required("Beskrivelse av tjenesten må bestå av minimum 30 tegn").min(30, "Beskrivelse av tjenesten må bestå av minimum 30 tegn.")
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
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div>Laster...</div>;

	if (fetchError) return <div>Problem med å laste siden</div>;

	return (
		// <AdminPage>
		<Container>
			<CreateBreadcrumb link="Rediger post" />
			<Heading title="Rediger tjeneste" />
			<Form onSubmit={handleSubmit(onSubmit)}>
				{updated && <div className="success">Tjenesten ble oppdatert</div>}
				{updateError && <FormError>{updateError}</FormError>}
				<Form.Group disabled={updatingPost}>
					<Col sm={4} md={6} className="p-0">
						<Form.Control name="title" type="text" placeholder="Overskrift" defaultValue={post.title.rendered} {...register("title")} className="my-2"/>
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</Col>
					<Col sm={4} md={6} className="p-0">
						<Form.Control name="content" as="textarea" type="text" defaultValue={post.content.rendered} className="my-2 message" {...register("content")}/>
						{errors.content && <FormError>{errors.content.message}</FormError>}
					</Col>
					<CtaButton text="" cta="Lagre endringer"/>
					<DeleteButton id={post.id} />
				</Form.Group>
			</Form>
		{/* // </AdminPage> */}
		</Container>
	);
}
