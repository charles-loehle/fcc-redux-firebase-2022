import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import Notification from './components/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';
import { sendCartData } from './store/cart-actions';
import { fetchData } from './store/cart-actions';

let isFirstRender = true;

function App() {
	// hook to call functions in the redux store
	const dispatch = useDispatch();
	// hook to access the redux store's state
	const notification = useSelector(state => state.ui.notification);
	const cart = useSelector(state => state.cart);
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	//console.log(isLoggedIn);

	// GET all cart items
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	// PUT save cart data to database
	useEffect(() => {
		// check if first render of the app to disable flash message
		if (isFirstRender) {
			isFirstRender = false;
			return;
		}

		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	return (
		<div className="App">
			{notification && (
				<Notification type={notification.type} message={notification.message} />
			)}
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;

