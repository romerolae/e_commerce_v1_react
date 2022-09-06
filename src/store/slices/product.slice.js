import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoadingGlobal } from './isLoading.slice';

const productsSlice = createSlice({
	name: 'products',
	initialState: [],
	reducers: {
		setProducts: (state, action) => action.payload,
	},
});

export const { setProducts } = productsSlice.actions; //redux thung

export default productsSlice.reducer;

export const getAllProducts = () => (dispatch) => {
	dispatch(setIsLoadingGlobal(true));
	const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products';
	return axios
		.get(URL)
		.then((res) => dispatch(setProducts(res.data.data.products)))
		.catch((err) => console.log(err))
		.finally(() => dispatch(setIsLoadingGlobal(false)));
};
