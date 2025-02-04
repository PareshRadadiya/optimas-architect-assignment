import React, { ReactNode } from 'react';

import './Button.scss';

type ButtonPropsType = {
	type?: 'submit' | 'reset' | 'button' | undefined;
	children: ReactNode;
	className?: string;
	isActive?: boolean;
	variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'simple';
	size?: 'small' | 'medium' | 'large' | 'square';
	onClick?: () => void;
};

const Button = (props: ButtonPropsType) => {
	const { type, variant, className, size, children, isActive, ...res } =
		props;

	const buttonClass = `button ${isActive ? 'button__active' : ''} ${
		variant ? `button__${variant}` : ''
	} ${size ? `button__${size || ''}` : ''} ${className || ''}`.trim();

	return (
		<button className={buttonClass} type={type} {...res}>
			{children}
		</button>
	);
};

export default Button;
