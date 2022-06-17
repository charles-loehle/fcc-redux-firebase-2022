import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

// GET all cart items
export const fetchData = () => {
	return async dispatch => {
		const fetchHandler = async () => {
			const res = await fetch(
				'https://fcc-redux-firebase-2022-default-rtdb.firebaseio.com/cartItems.json'
			);
			const data = await res.json();
			// return cart items
			return data;
		};

		try {
			const cartData = await fetchHandler();
			dispatch(cartActions.replaceData(cartData));
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					message: 'Sending http Request Failed...',
					type: 'error',
					open: true,
				})
			);
		}
	};
};

// PUT save cart data to database
export const sendCartData = cart => {
	return async dispatch => {
		dispatch(
			uiActions.showNotification({
				message: 'Sending http Request',
				type: 'warning',
				open: true,
			})
		);

		const sendRequest = async () => {
			// send state as request
			const res = await fetch(
				'https://fcc-redux-firebase-2022-default-rtdb.firebaseio.com/cartItems.json',
				{ method: 'PUT', body: JSON.stringify(cart) }
			);
			// dont need to return data after it's saved to database
			const data = await res.json();
			// send state as success
			dispatch(
				uiActions.showNotification({
					message: 'Sent database request successfully',
					type: 'success',
					open: true,
				})
			);
		};
		try {
			await sendRequest();
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					message: 'Sending http Request Failed...',
					type: 'error',
					open: true,
				})
			);
		}
	};
};
