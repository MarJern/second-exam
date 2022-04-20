import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import Card from "react-bootstrap/Card"

export default function TjenesteList() {

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

	if (loading) {
		return <div>Laster innhold...</div>;
	}

	if (error) {
		return <div>En feil oppstod {error}</div>;
	}

	return (
		<Card className="page__component tjeneste__card">
            <Card.Body className="p-0">
					{posts.map((tjeneste) => {
						// const {title, content } = tjeneste;
							return (
                                <>
                                    <h2 className="component__title">{tjeneste.title.rendered}</h2>
                                    <Card.Text>{tjeneste.content}</Card.Text>
                                </>
							);
						})}
				</Card.Body>
        </Card>
	);
};