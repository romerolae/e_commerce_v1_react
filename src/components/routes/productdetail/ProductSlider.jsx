import React, { useState } from 'react';

const classImg = ['', 'slider__container__second', 'slider__container__third'];

const ProductSlider = ({ productInfo }) => {
	const [indexClass, setIndexClass] = useState(0);

	const prevClick = () => {
		const prevClass = indexClass - 1;
		if (prevClass < 0) {
			setIndexClass(classImg.length - 1);
		} else {
			setIndexClass(prevClass);
		}
	};

	const nextClick = () => {
		const nextClass = indexClass + 1;
		if (nextClass >= classImg.length) {
			setIndexClass(0);
		} else {
			setIndexClass(nextClass);
		}
	};

	return (
		<div className="product-slider">
			<div className="slider">
				<div onClick={prevClick} className="slider__prev">
					&#60;
				</div>
				<div className={`slider__container ${classImg[indexClass]}`}>
					{productInfo?.productImgs.map((image) => (
						<img className="slider__imgs" key={image} src={image} alt="" />
					))}
				</div>
				<div onClick={nextClick} className="slider__next">
					&#62;
				</div>
			</div>
			<div className="slider__points-container">
				<div
					onClick={() => setIndexClass(0)}
					className={
						indexClass === 0
							? 'slider__points-item slider__points-item__active'
							: 'slider__points-item'
					}
				></div>
				<div
					onClick={() => setIndexClass(1)}
					className={
						indexClass === 1
							? 'slider__points-item slider__points-item__active'
							: 'slider__points-item'
					}
				></div>
				<div
					onClick={() => setIndexClass(2)}
					className={
						indexClass === 2
							? 'slider__points-item slider__points-item__active'
							: 'slider__points-item'
					}
				></div>
			</div>
		</div>
	);
};

export default ProductSlider;
