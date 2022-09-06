import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getConfig from '../../../utils/getConfig';

const Purchases = () => {
	const [purchases, setPurchases] = useState();

	useEffect(() => {
		URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases';
		axios
			.get(URL, getConfig())
			.then((res) => setPurchases(res.data.data.purchases))
			.catch((err) => console.log(err));
	}, []);

	return <div>purchases</div>;
};

export default Purchases;
