import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Cart = () => {
	const { cart, deleteFromCart } = useContext(GlobalContext);

	const { API_URL } = process.env;

	const deleteItem = (id, e) => {
		e.preventDefault();
		deleteFromCart(id);
	};
	return (
		<div className="cart-container">
			<h2 className="heading">Your Cart</h2>
			{cart.length <= 0 ? (
				<h3 style={{ textAlign: "center" }}>
					You cart is empty! You may wanna check out our shop!
				</h3>
			) : (
				cart.map((item) => {
					return (
						<div key={item.id} className="cart-item">
							<img src={API_URL + item.image} alt="" />
							<div className="cart-item-description">
								<h2 className="title">{item.title}</h2>
								<p className="description">{item.description}</p>
								<span className="price">{item.price}</span>
							</div>
							<button
								onClick={deleteItem.bind(this, item.id)}
								className="delete"
							>
								X
							</button>
						</div>
					);
				})
			)}
		</div>
	);
};

export default Cart;
