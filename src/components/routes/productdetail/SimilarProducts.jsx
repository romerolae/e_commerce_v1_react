import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardHome from '../home/CardHome';

const SimilarProducts = ({ productInfo }) => {
	const products = useSelector((state) => state.products);

	const [filterProducts, setFilterProducts] = useState();

	useEffect(() => {
		if (productInfo) {
			const filter = products.filter(
				(e) => e.category.name === productInfo.category
			);
			setFilterProducts(filter);
		}
	}, [productInfo]);

	console.log(filterProducts);

	return (
		<div className="container-similar-products">
			{filterProducts?.map((product) => {
				if (product.title !== productInfo.title) {
					return <CardHome key={product.id} product={product} />;
				}
			})}
		</div>
	);
};

export default SimilarProducts;
