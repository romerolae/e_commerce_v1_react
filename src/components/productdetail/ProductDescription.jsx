import React, { useState } from 'react';

const ProductDescription = ({ productInfo }) => {
	const [counter, setCounter] = useState(1);

	const handlePlus = () => setCounter(counter + 1);
	const handleMinus = () => {
		if (counter - 1 >= 0) {
			setCounter(counter - 1);
		}
	};

	return (
		<section className="product-info">
			<h2 className="product-info__name">{productInfo?.title}</h2>
			<p className="product-info__description">{productInfo?.description}</p>
			<div className="product-info_body">
				<article className="product-info__price">
					<h3 className="product-info__price-label">Price</h3>
					<span className="product-info__price-value">
						{productInfo?.price}
					</span>
				</article>
				<article className="product-info__quantity">
					<h3 className="product-info__quantity__label">Quantity</h3>
					<div className="product-info__quantity__product">
						<button onClick={handleMinus}>-</button>
						<div>{counter}</div>
						<button onClick={handlePlus}>+</button>
					</div>
				</article>
			</div>
		</section>
	);
};

export default ProductDescription;
