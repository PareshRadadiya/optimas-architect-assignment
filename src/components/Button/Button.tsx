import React, { ReactNode } from 'react';

import './Button.scss';

type ButtonPropsType = {
	type: 'submit' | 'reset' | 'button' | undefined;
	children: ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'small' | 'medium' | 'large';
};

const Button = (props: ButtonPropsType) => {
	const { type, variant, className, size, children, ...res } = props;

	const buttonClass = `button button__${variant || ''} button__${
		size || ''
	} ${className || ''}`.trim();

	return (
		<button className={buttonClass} type={type} {...res}>
			{children}
		</button>
	);
};

export default Button;
