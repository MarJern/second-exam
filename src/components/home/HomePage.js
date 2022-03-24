import Heading from "../layout/Heading";

export default function HomePage() {
	return (
		<>
			<Heading title="Floww media" className="hero__text" />
			<div className="container">Environment: {process.env.NODE_ENV}</div>
		</>
	);
}
