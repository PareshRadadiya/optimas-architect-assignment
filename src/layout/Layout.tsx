import React from 'react';
import './Layout.scss';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Watermark from 'assets/watermark.png';

type LayoutPropsType = {
	children: React.ReactNode;
};
const Layout = (props: LayoutPropsType) => {
	const { children } = props;
	return (
		<div className="layout__container">
			<img className="watermark" src={Watermark} alt="watermark" />
			<Header />
			<div className="dashboard-container">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
