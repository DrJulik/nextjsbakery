import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { NextSeo } from "next-seo";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

const Cake = ({ cake }) => {
	const { addToCart } = useContext(GlobalContext);
	const { API_URL } = process.env;

	const SEO = {
		title: `Cakes | ${cake.title}`,
		description: cake.description,
	};

	const addItem = () => {
		const item = {
			id: uuidv4(),
			title: cake.title,
			description: cake.description,
			price: cake.price,
		};

		addToCart(item);
	};

	return (
		<>
			<NextSeo {...SEO} />
			<div className="cake-page">
				<img src={API_URL + cake.image.url} alt={cake.title} />
				<div className="product-description">
					<h2>{cake.title}</h2>
					<p>{cake.description}</p>
					<button onClick={addItem}>Add to order</button>
				</div>
			</div>
		</>
	);
};

const { publicRuntimeConfig } = getConfig();
export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/cakes/`);
	const cakes = await res.json();

	const paths = cakes.map((cake) => ({
		params: { id: cake.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const { id } = params;
	const res = await fetch(`${publicRuntimeConfig.API_URL}/cakes/${id}`);
	const data = await res.json();
	return {
		props: {
			cake: data,
		},
	};
}

export default Cake;
