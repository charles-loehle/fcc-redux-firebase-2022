import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		itemsList: [],
		totalQuantity: 0,
		showCart: false,
		changed: false,
	},
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			// cheick if item is available
			const existingItem = state.itemsList.find(item => item.id === newItem.id);

			if (existingItem) {
				// increment
				existingItem.quantity++;
				// add prices
				existingItem.totalPrice += newItem.price;
			} else {
				state.itemsList.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
				});
				// increment totalQuantity of the cart
				state.totalQuantity++;
			}
		},
		removeFromCart: (state, action) => {},
		setShowCart: state => {
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
