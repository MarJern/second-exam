import Heading from "../../layout/Heading";
import Container from "react-bootstrap/Container";
import CreateBreadcrumb from "../../layout/Breadcrumb";
import { usePageTitle } from "../../common/PageTitle";
import img from "../../../images/people.jpg";
import H2Title from "../../layout/H2Title";
import H3Title from '../../layout/H3Title';
import CtaButton from "../../layout/CtaButton";
import TjenesterCard from "./TjenesterCard";
import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";

export default function ContentList() {
	const [page_title, setPageTitle] = usePageTitle("Våre tjenester | SEO, innholdsproduksjon Floww media");

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
		<Container className="wrapper my-3 m-auto">
			<CreateBreadcrumb link="Tjenester" />
			<Heading title="Tjenester" />
			<main className="wrapper">
				<section>
					<img className="image" src={img} alt="Workdesk with SEO-analysis shown on I-phone"/>
				</section>
				<article className="page__component">
					{posts.map((tjeneste) => {
							return (
								<div key={tjeneste.id} className="edit__list">
									<TjenesterCard title={tjeneste.title.rendered} body={tjeneste.content} />
								</div>
							);
						})}
				</article>
				<CtaButton text="La oss hjelpe deg med å bygge synlighet på nett" cta="Kontakt oss"/>
			</main>
		</Container>
	);
};