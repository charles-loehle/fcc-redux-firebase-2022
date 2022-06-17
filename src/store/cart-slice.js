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
		replaceData: (state, action) => {
			state.totalQuantity = action.payload.totalQuantity;
			state.itemsList = action.payload.itemsList;
		},
		addToCart: (state, action) => {
			state.changed = true;
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
		removeFromCart: (state, action) => {
			state.changed = true;
			const id = action.payload;
			// console.log(id);
			const existingItem = state.itemsList.find(item => item.id === id);
			// check if quantity is 1
			if (existingItem.quantity === 1) {
				// filter out the item with matching id because totalQuantity is by default 1
				state.itemsList = state.itemsList.filter(item => item.id !== id);
				// decrement totalQuantity
				state.totalQuantity--;
			} else {
				// decrement quantity
				existingItem.quantity--;
				// subtract price from totalPrice
				existingItem.totalPrice -= existingItem.price;
			}
		},
		setShowCart: state => {
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
