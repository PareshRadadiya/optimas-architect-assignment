import React from 'react';

type CardPropsType = {
	children: React.ReactElement;
};

const Card = (props: CardPropsType) => {
	return <div className="card">{props.children}</div>;
};

export default Card;
