import React from 'react';

const ProductPurchase = ({ product }) => {
	console.log(product);
	return (
		<div>
			<li className="card-purchase__item">
				<h4 className="card-purchase__name">{product.title}</h4>
				<div className="card-purchase__detail">
					<span className="card-purchase__price"> ${product.price}</span>
					<span className="card-purchase__quantity">
						{product.productsInCart.quantity}
					</span>
				</div>
			</li>
		</div>
	);
};

export default ProductPurchase;
