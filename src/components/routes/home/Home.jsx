import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../store/slices/product.slice';
import CardHome from './CardHome';
import InputSearch from './InputSearch';
import './style/home.css';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

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
