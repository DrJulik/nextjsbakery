export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, payload],
			};
		case "DELETE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter((item) => {
					return item.id !== payload;
				}),
			};
		default:
			return state;
	}
};
