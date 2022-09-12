import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDescription from './ProductDescription';
import './style/productdetail.css';
import ProductSlider from './ProductSlider';
import SimilarProducts from './SimilarProducts';
import './style/productdetail.css';

const ProductDetail = () => {
	const [productInfo, setProductInfo] = useState();

	const { id } = useParams();

	useEffect(() => {
		const URL = ` https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`;
		axios
			.get(URL)
			.then((res) => setProductInfo(res.data.data.product))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="product-details__container">
			<ProductSlider productInfo={productInfo} />
			<ProductDescription productInfo={productInfo} />
			<SimilarProducts productInfo={productInfo} />
		</div>
	);
};

export default ProductDetail;
