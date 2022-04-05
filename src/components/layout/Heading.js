import PropTypes from "prop-types";

function Heading({ title }) {
    return <h1 className="hero__text">{title}</h1>;
}

Heading.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Heading;