import React, { isValidElement, cloneElement, ReactElement } from 'react';
import './GifButton.scss';

import ShadeGif from 'assets/gif/shade.gif';

type GifButtonPropsTypes = {
	label: string;
	icon: React.ReactNode;
	active: boolean;
	id?: string;
	onClick?: () => void;
};

const GifButton = (props: GifButtonPropsTypes) => {
	const { label, icon, active, onClick, ...res } = props;
	const combineClass = `gif-button ${active ? 'gif-button__active' : ''}`;

	const iconWithClass = isValidElement(icon)
		? cloneElement(icon as ReactElement, {
				className: `${
					icon.props.className ? `${icon.props.className} ` : ''
				}gif-button__icon`,
		  })
		: icon;

	return (
		<button onClick={onClick} {...res} className={combineClass}>
			<img className="gif-button__gif" src={ShadeGif} alt="gif" />
			<span className="gif-button__label">{label}</span>
			{iconWithClass}
		</button>
	);
};

export default GifButton;
