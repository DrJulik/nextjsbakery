import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
	cart: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function addToCart(item) {
		dispatch({
			type: "ADD_TO_CART",
			payload: item,
		});
	}
	function deleteFromCart(id) {
		dispatch({
			type: "DELETE_FROM_CART",
			payload: id,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				cart: state.cart,
				addToCart,
				deleteFromCart,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
