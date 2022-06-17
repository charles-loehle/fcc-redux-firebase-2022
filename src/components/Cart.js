import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Cart = () => {
	// a hook to access the redux store's state
	const totalItemsInCart = useSelector(state => state.cart.totalQuantity);
	// hook to call functions in the redux store
	const dispatch = useDispatch();

	const showCart = () => {
		dispatch(cartActions.setShowCart());
	};

	return (
		<div className="cartIcon">
			<h3 onClick={showCart}>Cart: {totalItemsInCart} Items</h3>
		</div>
	);
};

export default Cart;
