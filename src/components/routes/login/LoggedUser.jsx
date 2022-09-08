import React from 'react';
import './style/login.css';

const LoggedUser = ({ token, setToken }) => {
	const handleClick = () => {
		setToken();
		localStorage.removeItem('token');
	};

	return (
		<article className="form-logout">
			<i className="form-logout__icon fa-solid fa-user"></i>
			<h2 className="form-logout__username">
				{`${token?.firstName} ${token?.lastName}`}
			</h2>
			<i className="form-logout__check fa-solid fa-square-check"></i>
			<button onClick={handleClick} className="form-logout__btn">
				Logout
			</button>
		</article>
	);
};

export default LoggedUser;
