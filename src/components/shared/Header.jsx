import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
	const navBar = useRef();

	const clickMenuHam = () => {
		navBar.current.classList.toggle('header__nav-open');
	};

	return (
		<header className="header">
			<NavLink to="/">
				<h1 className="header__logo"> E-commerce</h1>
			</NavLink>
			<div onClick={clickMenuHam} className="header__menuham">
				<i className="fa-sharp fa-solid fa-bars"></i>
			</div>

			<nav ref={navBar} className="header__nav">
				<ul className="header__list">
					<li className="header__item">
						<NavLink
							to="/login"
							className={({ isActive }) =>
								isActive ? 'header__link-active header__link' : 'header__link'
							}
						>
							<i className="fa-solid fa-user"></i>
							<p className="navbar__label">Login</p>
						</NavLink>
					</li>
					<li className="header__item">
						<NavLink
							className={({ isActive }) =>
								isActive ? 'header__link-active header__link' : 'header__link'
							}
							to="/purchases"
						>
							<i className="fa-solid fa-store"></i>
							<p className="navbar__label">Purchases </p>
						</NavLink>
					</li>
					<li className="header__item">
						<NavLink
							className={({ isActive }) =>
								isActive ? 'header__link-active header__link' : 'header__link'
							}
							to="/cart"
						>
							<i className="fa-solid fa-cart-shopping"></i>
							<p className="navbar__label">Cart</p>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
