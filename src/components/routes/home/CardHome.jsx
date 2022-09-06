import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardHome = ({ product }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/product/${product.id}`);
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
				<button className="card-product__btn">
					<i className="fa-solid fa-cart-plus"></i>
				</button>
			</div>
		</article>
	);
};

export default CardHome;
