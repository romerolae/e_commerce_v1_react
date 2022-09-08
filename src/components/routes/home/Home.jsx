import React from 'react';
import { useSelector } from 'react-redux';
import CardHome from './CardHome';
import InputSearch from './InputSearch';
import './style/home.css';

const Home = () => {
	const products = useSelector((state) => state.products);

	return (
		<div className="home">
			<InputSearch />
			<div className="home__container-card">
				{products?.map((product) => (
					<CardHome key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Home;
