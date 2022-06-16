import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItems = () => {
	// get itemsList state from cart-slice.js
	const cartItems = useSelector(state => state.cart.itemsList);

	return (
		<div className="cart-container">
			<h2>Your Cart</h2>
			<ul>
				{cartItems.map(item => (
					<li key={item.id}>
						<CartItem
							quantitity={item.quantitity}
							id={item.id}
							name={item.name}
							price={item.price}
							total={item.totalPrice}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CartItems;
