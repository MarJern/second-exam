import PropTypes from "prop-types";

function Heading({ title }) {
    return <h1 className="heading">{title}</h1>;
}

Heading.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Heading;