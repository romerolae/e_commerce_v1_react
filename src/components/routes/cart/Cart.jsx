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
		<div className="cart-container">
			<h2 className="cart__title">Items in your cart</h2>
			<section className="cart">
				{cartProducts?.map((product) => (
					<CartInfo
						key={product.id}
						product={product}
						getAllProductsCart={getAllProductsCart}
					/>
				))}
			</section>
			<hr className="cart__hr" />
			<footer className="cart__footer">
				<span className="cart__total-sub">Subtotal: ${totalPrice}</span>
				<span className="cart__shipping">Shipping UPS expedited: $56.50</span>
				<span className="cart__total-global-label">
					Order Total: ${totalPrice + 56.5}
				</span>
			</footer>
			<div className="cart__btn">
				<button onClick={handleCheckout}>Proceed to Checkout</button>
			</div>
		</div>
	);
};

export default Cart;
