import React from 'react';
import ProductPurchase from './ProductPurchase';

const PurchaseCard = ({ purchase }) => {
	return (
		<article className="card-purchase">
			<div className="card-purchase__subtitle">
				<h3>Item</h3>
				<h3>Qty</h3>
			</div>
			<h3 className="card-purchase__date">Date: {purchase.createdAt}</h3>
			<ul className="card-purchase__body">
				{purchase.cart.products.map((product) => (
					<ProductPurchase key={product.id} product={product} />
				))}
			</ul>
		</article>
	);
};

export default PurchaseCard;
