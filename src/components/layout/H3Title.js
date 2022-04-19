import PropTypes from "prop-types";

function H3Title({ title }) {
    return <h3 className="component__title">{title}</h3>;
}

H3Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default H3Title;