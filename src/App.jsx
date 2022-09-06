import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home/Home';
import ProductDetail from './components/routes/ProductDetail';
import Purchases from './components/routes/Purchases';
import Login from './components/routes/login/Login';
import Header from './components/shared/Header';
import ProtectedRoutes from './components/routes/ProtectedRoutes';
import Cart from './components/routes/Cart';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/cart" element={<Cart />} />
					<Route path="/purchases" element={<Purchases />} />
				</Route>

				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</div>
	);
}

export default App;
