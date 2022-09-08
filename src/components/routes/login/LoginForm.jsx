import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [isInvalidLogin, setIsInvalidLogin] = useState(false);

	const { handleSubmit, reset, register } = useForm();

	const navigate = useNavigate();

	const submit = (data) => {
		const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login';
		axios
			.post(URL, data)
			.then((res) => {
				localStorage.setItem('token', res.data.data.token);
				navigate('/');
			})
			.catch((err) => {
				localStorage.setItem('token', '');
				setIsInvalidLogin(true);
				setTimeout(() => {
					setIsInvalidLogin(false);
				}, 5000);
			});
		reset({
			email: '',
			password: '',
		});
	};
	return (
		<div>
			{
				<form onSubmit={handleSubmit(submit)} className="login__form">
					<ul className="login__test">
						<li className="flex-login">
							<b>Email:</b>mason@gmail.com
						</li>
						<li className="flex-login">
							<b>Password:</b>mason1234
						</li>
					</ul>
					<h2 className="login__title">Enter your email and password</h2>
					<ul className="login__list">
						<li className="login__item">
							<label htmlFor="login-email" className="login__label">
								Email
							</label>
							<input
								type="email"
								className="login__input"
								id="login-email"
								{...register('email')}
							/>
						</li>
						<li className="login__item">
							<label htmlFor="login-pass" className="login__label">
								Password
							</label>
							<input
								type="password"
								className="login__input"
								id="login-pass"
								{...register('password')}
							/>
						</li>
					</ul>
					<div className="login__err__msg">
						{isInvalidLogin && 'invalid credentials, try again...'}
					</div>
					<button>Sign-in</button>
				</form>
			}
		</div>
	);
};

export default LoginForm;
