import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/footer.css';

const Footer = () => {
	return (
		<footer class="footer">
			<div className="prior-footer"></div>
			<div class="footer-container">
				<div class="contenedro__footer-item">
					<h3>Store</h3>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>

						<li>
							<NavLink to="/purchases">Purchases</NavLink>
						</li>
						<li>
							<NavLink to="/cart">Cart</NavLink>
						</li>
					</ul>
				</div>
				<div class="contenedro__footer-item">
					<h3>Support</h3>
					<ul>
						<li>
							<a href="#">FAQ</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
					</ul>
				</div>
				<div class="contenedro__footer-item social">
					<h3>Social</h3>
					<ul>
						<li>
							<a href="#">
								<i class="fa-brands fa-instagram"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa-brands fa-youtube"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i class="fa-brands fa-twitch"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer-allrights">
				<p>©2022 TechmaniaShop. All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
