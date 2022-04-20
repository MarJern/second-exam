import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import Heading from "../../layout/Heading";
import { usePageTitle } from "../../common/PageTitle";
import edit from "../../../images/edit-icon.svg";

export default function ContentList() {
	const [page_title, setPageTitle] = usePageTitle("Rediger tjenester | Floww media");

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/posts");
				console.log("response", response);
				setPosts(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) return <div>Laster innhold...</div>;

	if (error) return <div>{}</div>;

	return (
		<Container>
			<main className="wrapper">
				<CreateBreadcrumb link="Rediger tjenester" />
				<Heading title="Eksisterende tjenester"/>
				<p className="intro__text">Trykk på tjenesten du ønsker å redigere eller slette:</p>
				<nav className="admin__link">
					{posts.map((tjeneste) => {
						return (
							<div key={tjeneste.id} className="edit__list">
								<img src={edit} alt="" className="edit__icon"/>
								<Link to={`/admin/content/edit/${tjeneste.id}`} className="edit__link">{tjeneste.title.rendered}</Link>
							</div>
						);
					})}
				</nav>
			</main>
		</Container>
	);
}
