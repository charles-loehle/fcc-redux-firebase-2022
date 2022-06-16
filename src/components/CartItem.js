import { useSelector } from 'react-redux';

const CartItem = ({ id, name, price, total, quantity }) => {
	const removeHandler = () => {};
	const addHandler = () => {};

	return (
		<div className="cartItem">
			<h2>{name}</h2>
			<p>${price}</p>
			<p>x{quantity}</p>
			<article>Total ${total}</article>
			<button className="cart-actions" onClick={removeHandler}>
				-
			</button>
			<button className="cart-actions" onClick={addHandler}>
				+
			</button>
		</div>
	);
};

export default CartItem;
