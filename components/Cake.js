import Link from "next/link";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const Cake = ({ cake }) => {
	const { addToCart } = useContext(GlobalContext);
	const { API_URL } = process.env;

	const addItem = () => {
		const item = {
			id: uuidv4(),
			title: cake.title,
			description: cake.description,
			price: cake.price,
			image: cake.image.url,
		};

		addToCart(item);
	};
	return (
		<div className="img-wrap">
			<img src={cake.image.url} alt={cake.title} />
			<div className="description">
				<h1>{cake.title}</h1>

				<hr />
				<p>{cake.description}</p>

				<Link href="/cakes/[id]" as={`/cakes/${cake.id}`}>
					<button>View Item</button>
				</Link>

				<button onClick={addItem}>Add to order</button>
			</div>
		</div>
	);
};

export default Cake;
