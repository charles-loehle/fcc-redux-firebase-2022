import Header from './Header';
import Products from './Products';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';

const Layout = () => {
	let total = 0;
	// a hook to access the redux store's state
	const itemsList = useSelector(state => state.cart.itemsList);
	const showCart = useSelector(state => state.cart.showCart);

	// add each item totalPrice to the total variable
	itemsList.forEach(item => (total += item.totalPrice));

	return (
		<>
			<div className="layout">
				<Header />
				<Products />
				{showCart && <CartItems />}
				<div className="total-price">
					<h3>Total: ${total}</h3>
					<button className="orderBtn">Place Order</button>
				</div>
			</div>
		</>
	);
};

export default Layout;
