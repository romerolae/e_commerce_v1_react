import axios from 'axios';
import React, { useEffect, useState } from 'react';

import getConfig from '../../../utils/getConfig';
import CartInfo from './CartInfo';
import './style/cart.css';

const Cart = () => {
	const [cartProducts, setCartProducts] = useState();
	const [totalPrice, setTotalPrice] = useState();

	const getAllProductsCart = () => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';
		axios
			.get(URL, getConfig())
			.then((res) => {
				const products = res.data.data.cart.products;
				setCartProducts(products);
				// Total of the products in the cart
				const total = products.reduce((acc, cv) => {
					return Number(cv.price) * cv.productsInCart.quantity + acc;
				}, 0);
				setTotalPrice(total);
			})
			.catch((err) => setCartProducts());
	};

	useEffect(() => {
		getAllProductsCart();
	}, []);

	const handleCheckout = () => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';
		const obj = {
			street: 'Green St. 1456',
			colony: 'Southwest',
			zipCode: 12345,
			city: 'USA',
			references: 'some references',
		};
		axios
			.post(URL, obj, getConfig())
			.then((res) => {
				console.log(res.data);
				getAllProductsCart();
			})
			.catch((err) => console.log(err));
	};

	return (
		<section className="cart">
			<h2 className="cart__title">cart</h2>
			{cartProducts?.map((product) => (
				<CartInfo
					key={product.id}
					product={product}
					getAllProductsCart={getAllProductsCart}
				/>
			))}
			<hr className="cart__hr" />
			<footer className="cart__footer">
				<span className="cart__total-global-label">Total:</span>
				<p className="cart__total-global-value">{totalPrice}</p>
				<button onClick={handleCheckout} className="cart__btn">
					Checkout
				</button>
			</footer>
		</section>
	);
};

export default Cart;
