import React, { useState } from 'react';
import './style/productdetail.css';
const ProductDescription = ({ productInfo }) => {
	const [counter, setCounter] = useState(1);

	const handlePlus = () => setCounter(counter + 1);
	const handleMinus = () => {
		if (counter - 1 >= 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<div className="prduct">
			<section className="product-info">
				<h2 className="product-info__title">{productInfo?.title}</h2>
				<p className="product-info__description">{productInfo?.description}</p>
				<div className="card-product__price-container">
					<h3 className="card-product__price label ">Price</h3>
					<p className="card-product__price-number">{productInfo?.price}</p>
					<h3 className="card__product__info-quantity">Quantity</h3>
					<div className="product-info__quantity__container">
						<div onClick={handleMinus} className="product-info__minus">
							-
						</div>
						<div>{counter}</div>
						<div onClick={handlePlus} className="product-info__plus">
							+
						</div>
					</div>
				</div>
				<buttom className="product-card__btn">
					Add to Cart
					<i className="fa-solid fa-cart-plus"></i>
				</buttom>
			</section>
		</div>
	);
};

export default ProductDescription;
