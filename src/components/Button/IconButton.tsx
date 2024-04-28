import React, { ReactNode } from 'react';

import './IconButton.scss';

type ButtonPropsType = {
	type?: 'submit' | 'reset' | 'button' | undefined;
	children: ReactNode;
	className?: string;
	isActive?: boolean;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'small' | 'medium' | 'large' | 'thin-simple';
	onClick?: () => void;
	prefix?: ReactNode;
};

const IconButton = (props: ButtonPropsType) => {
	const {
		type,
		variant,
		className,
		size,
		prefix,
		children,
		isActive,
		...res
	} = props;

	const buttonClass = `icon-button ${isActive ? 'icon-button__active' : ''} ${
		variant ? `icon-button__${variant}` : ''
	} icon-button__${size || ''} ${className || ''}`.trim();

	return (
		<button className={buttonClass} type={type} {...res}>
			{prefix}
			{children}
		</button>
	);
};

export default IconButton;
