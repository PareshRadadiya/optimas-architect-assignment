import React from 'react';
import './Indicator.scss';

type IndicatorPropsType = {
	show: boolean;
	status: 'pending' | 'danger' | 'success';
	shape: 'circle';
	children: React.ReactNode;
	className?: string;
	size: 'small' | 'medium' | 'large';
};
const Indicator = (props: IndicatorPropsType) => {
	const { show, children, status, shape, size, className } = props;
	const combineClass =
		`indicator__${status} indicator__${size} indicator__${shape} ${
			className || ''
		}`.trim();

	return (
		<div className="indicator">
			{children}
			{show && <span className={combineClass}></span>}
		</div>
	);
};

export default Indicator;
