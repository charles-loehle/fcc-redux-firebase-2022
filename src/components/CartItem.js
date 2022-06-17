import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = ({ id, name, price, total, quantity }) => {
	// hook to call functions in the redux store
	const dispatch = useDispatch();

	const incrementCartItems = () => {
		dispatch(
			cartActions.addToCart({
				name,
				id,
				price,
			})
		);
	};

	const decrementCartItems = () => {
		dispatch(cartActions.removeFromCart(id));
		// console.log(id);
	};

	return (
		<div className="cartItem">
			<h2>{name}</h2>
			<p>${price}</p>
			<p>x{quantity}</p>
			<article>Total ${total}</article>
			<button className="cart-actions" onClick={decrementCartItems}>
				-
			</button>
			<button className="cart-actions" onClick={incrementCartItems}>
				+
			</button>
		</div>
	);
};

export default CartItem;
