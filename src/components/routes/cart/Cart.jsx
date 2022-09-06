import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getConfig from '../../../utils/getConfig';
import CartInfo from './CartInfo';

const Cart = () => {
	const [cartProducts, setCartProducts] = useState();

	useEffect(() => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/cart';
		axios
			.get(URL, getConfig)
			.then((res) => setCartProducts(res.data))
			.catch((err) => console.log(err));
	}, []);

	console.log(cartProducts);

	return (
		<section className="cart">
			<h2 className="cart__title">cart</h2>
			<CartInfo />
			<hr className="cart__hr" />
			<footer className="cart__footer">
				<span className="cart__total-global-label">Total:</span>
				<p className="cart__total-global-value">1350</p>
				<button className="cart__btn">Checkout</button>
			</footer>
		</section>
	);
};

export default Cart;
