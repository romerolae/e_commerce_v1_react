import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getConfig from '../../../utils/getConfig';
import PurchaseCard from './PurchaseCard';
import './style/purchase.css';
const Purchases = () => {
	const [purchases, setPurchases] = useState();

	useEffect(() => {
		URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';
		axios
			.get(URL, getConfig())
			.then((res) => setPurchases(res.data.data.purchases))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h2 className="purchase-container__title">Purchases</h2>
			<div className="purchase-container">
				{purchases?.map((purchase) => (
					<PurchaseCard key={purchase.id} purchase={purchase} />
				))}
			</div>
		</div>
	);
};

export default Purchases;
