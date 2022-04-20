import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

export default function DeleteButton({ id }) {
	const [error, setError] = useState(null);

	const http = useAxios();
	const navigate = useNavigate();

	const url = `/wp/v2/posts/${id}`;

	async function handleDelete() {
		const confirmDelete = window.confirm("Vil du virkelig slette denne posten?");

		if (confirmDelete) {
			try {
				await http.delete(url);
				navigate("/admin/content");
			} catch (error) {
				setError(error);
			}
		}
	}

	return (
		<button type="button" className="delete__btn button button__link btn-primary" onClick={handleDelete}>
			{error ? "Error" : "Delete"}
		</button>
	);
}

DeleteButton.propTypes = {
	id: PropTypes.number.isRequired,
};
