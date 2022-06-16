import Header from './Header';
import Products from './Products';
import CartItems from './CartItems';

const Layout = () => {
	return (
		<>
			<div className="layout">
				<Header />
				<Products />
				<CartItems />
				<div className="total-price">
					<h3>Total: ${}</h3>
					<button className="orderBtn">Place Order</button>
				</div>
			</div>
		</>
	);
};

export default Layout;
