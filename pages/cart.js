import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
	const { cart, deleteFromCart } = useContext(GlobalContext);

	const { API_URL } = process.env;

	const deleteItem = (id, e) => {
		e.preventDefault();
		deleteFromCart(id);
	};

	const total = () => {
		const totalArr = cart.map((item) => {
			return item.price;
		});
		const sum = totalArr.reduce((total, amount) => +total + +amount);
		return sum;
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
						<AnimatePresence>
							<motion.div
								key={item.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.2 }}
								exit={{ opacity: 0 }}
								className="cart-item"
							>
								<img src={item.image} alt="" />
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
							</motion.div>
						</AnimatePresence>
					);
				})
			)}
			<div className="total">
				<hr />
				<h3>Total: {cart.length <= 0 ? "0" : `${total()}`}</h3>
			</div>
		</div>
	);
};

export default Cart;
