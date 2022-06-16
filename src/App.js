import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const cartItems = useSelector(state => state.cart.itemsList);
	console.log(cartItems);

	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	console.log(isLoggedIn);

	return (
		<div className="App">
			{!isLoggedIn && <Auth />}
			{isLoggedIn && <Layout />}
		</div>
	);
}

export default App;

