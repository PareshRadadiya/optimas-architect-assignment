import React from 'react';
import './Layout.scss';
import Header from 'layout/Header';
import Footer from 'layout/Footer';

type LayoutPropsType = {
	children: React.ReactNode;
};
const Layout = (props: LayoutPropsType) => {
	const { children } = props;
	return (
		<div>
			<Header />
			<div className="dashboard-container">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
