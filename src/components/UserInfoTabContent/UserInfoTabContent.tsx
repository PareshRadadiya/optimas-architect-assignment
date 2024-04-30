import React from 'react';
import './UserInfoTabContent.scss';

type UserInfoTabContentPropsType = {
	userInfo: {
		name: string;
		createdOn: string;
	};
};
const UserInfoTabContent = (props: UserInfoTabContentPropsType) => {
	const { name, createdOn } = props.userInfo;
	return (
		<div className="user-info">
			<span>Name</span>
			<h4>{name}</h4>
			<span>Created On</span>
			<h4>{createdOn}</h4>
		</div>
	);
};

export default UserInfoTabContent;
