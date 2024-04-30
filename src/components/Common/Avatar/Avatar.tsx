import React from 'react';
import './Avatar.scss';

type AvatarPropsType = {
	src: string;
	name?: string;
};
const Avatar = (props: AvatarPropsType) => {
	const { src } = props;

	return (
		<div className="Avatar">
			<img src={src} alt="avatar name" />
		</div>
	);
};

export default Avatar;
