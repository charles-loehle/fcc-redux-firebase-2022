import { useSelector } from 'react-redux';

const Cart = () => {
	// a hook to access the redux store's state
	const totalItemsInCart = useSelector(state => state.cart.totalQuantity);

	return (
		<div className="cartIcon">
			<h3>Cart: {totalItemsInCart} Items</h3>
		</div>
	);
};

export default Cart;
