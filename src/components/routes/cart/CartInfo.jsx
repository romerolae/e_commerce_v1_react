import React from 'react';

const CartInfo = () => {
	return (
		<div className="car__item">
			<header className="cart__item-header">
				<h4 className="cart__catergory">Samsung</h4>
				<h3 className="cart__name">Galaxy S22 Unlocked</h3>
			</header>
			<i className="cart__trash fa-regular fa-trash-can"></i>
			<span className="cart__quantity">1</span>
			<footer className="cart__item__footer">
				<span className="cart__total-label">Total:</span>
				<p className="cart__total-number">850</p>
			</footer>
		</div>
	);
};

export default CartInfo;
