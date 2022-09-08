import React from 'react';
import { useForm } from 'react-hook-form';

const InputSearch = () => {
	const { handleSubmit, register, reset } = useForm();

	const submit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(submit)} className="form-home">
				<input
					type="text"
					placeholder=" Find your product"
					{...register('searchText')}
				/>
				<button>Search</button>
			</form>
		</div>
	);
};

export default InputSearch;
