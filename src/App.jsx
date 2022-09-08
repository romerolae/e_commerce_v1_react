import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/Home';
import ProductDetail from './components/routes/productdetail/ProductDetail';
import Purchases from './components/routes/purchases/Purchases';
import Login from './components/routes/login/Login';
import Header from './components/shared/Header';
import ProtectedRoutes from './components/routes/ProtectedRoutes';

import Cart from './components/routes/cart/Cart';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './store/slices/product.slice';
import Footer from './components/shared/Footer';
import Loading from './components/shared/Loading';

function App() {
	const isLoading = useSelector((state) => state.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, []);

	return (
		<div className="App">
			<Header />
			{isLoading && <Loading />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/purchases" element={<Purchases />} />
					<Route path="/cart" element={<Cart />} />
				</Route>
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
// useEffect(() => {
// 	const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users';
// 	const obj = {
// 		firstName: 'Luis',
// 		lastName: 'Romero',
// 		email: 'go.romerolae@gmail.com',
// 		password: '651205070',
// 		phone: '3193822294',
// 		role: 'admin',
// 	};
// 	axios
// 		.post(URL, obj)
// 		.then((res) => console.log(res.data))
// 		.catch((err) => console.log(err));
// }, []);
