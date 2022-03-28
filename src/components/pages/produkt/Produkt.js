import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL} from "../../../constants/api";
import Heading from "../../layout/Heading";

function UniDetail() {
	const [uni, setUni] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	let history = useNavigate();

	const { param } = useParams();

	if (!param) {
		history.push("/");
	}

	const url = API_URL + "/" + param;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);

					if (response.ok) {
						const json = await response.json();
						// console.log(json);
						setUni(json);
					} else {
						setError("An error occurred");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occurred: {error}</div>;
	}

	return (
        <>
            <Heading title="Detail Page" />
            <div>
                <h1>{uni.name}</h1>
                <p>Country: {uni.country}</p>
                <p>Homepage: {uni.web_pages}</p>
            </div>
        </>
	);
}

export default UniDetail;