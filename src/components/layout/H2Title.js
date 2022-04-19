import PropTypes from "prop-types";

function H2Title({ title }) {
    return <h2 className="component__title">{title}</h2>;
}

H2Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default H2Title;