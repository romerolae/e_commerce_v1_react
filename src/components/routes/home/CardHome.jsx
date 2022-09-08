import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import getConfig from '../../../utils/getConfig';

const CardHome = ({ product }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/product/${product.id}`);
	};

	// We add a product to the cart
	const handleAddCart = (e) => {
		e.stopPropagation();
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart';
		const obj = {
			id: product.id,
			quantity: 1,
		};
		axios
			.post(URL, obj, getConfig())
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<article onClick={handleClick} className="card-product">
			<header className="card-product__header">
				<img
					className="card-product__img-back"
					src={product.productImgs[1]}
					alt=""
				/>
				<img
					className="card-product__img"
					src={product.productImgs[0]}
					alt=""
				/>
			</header>
			<div className="card-product__body">
				<h3 className="card-product__title">{product.title}</h3>
				<section className="card-product__price-container">
					<h4 className="card-product__price-label">price</h4>
					<span className="card-product__price-number">{product.price}</span>
				</section>
				<button onClick={handleAddCart} className="card-product__btn">
					<i className="fa-solid fa-cart-plus"></i>
				</button>
			</div>
		</article>
	);
};

export default CardHome;
