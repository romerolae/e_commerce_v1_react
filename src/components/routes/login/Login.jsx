import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import LoggedUser from './LoggedUser';
import LoginForm from './LoginForm';
import './style/login.css';

const Login = () => {
	const [token, setToken] = useState('');

	const changedToken = localStorage.getItem('token');

	useEffect(() => {
		setToken(changedToken);
	}, [changedToken]);

	return (
		<div className="login">
			{token ? <LoggedUser setToken={setToken} token={token} /> : <LoginForm />}
		</div>
	);
};

export default Login;
