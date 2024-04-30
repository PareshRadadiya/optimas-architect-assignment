import React, { isValidElement, cloneElement, ReactElement } from 'react';
import './RoleButton.scss';

import ActiveGif from 'assets/gif/active.gif';

import Layer from 'assets/icons/layer.svg';

type RoleButtonPropsTypes = {
	role: string;
	icon: React.ReactNode;
	active: boolean;
	id?: string;
	onClick?: () => void;
};

const RoleButton = (props: RoleButtonPropsTypes) => {
	const { role, icon, active, onClick, ...res } = props;
	const combineClass = `role-button ${active ? 'role-button__active' : ''}`;

	const iconWithClass = isValidElement(icon)
		? cloneElement(icon as ReactElement, {
				className: `${
					icon.props.className ? `${icon.props.className} ` : ''
				}role-button__icon`,
		})
		: icon;

	return (
		<button onClick={onClick} {...res} className={combineClass}>
			<img className="role-button__gif" src={ActiveGif} alt="gif" />
			<Layer className="role-button__layer" />
			<span className="role-button__role">{role}</span>
			{iconWithClass}
		</button>
	);
};

export default RoleButton;
