import React from 'react';
import glob from 'assets/gif/glob.gif';
import './SignInPage.scss';

import SignInCard from '@/components/Common/Card/SignInCard';

type SignInPagePropsTypes = {
	onLogin: (isLogin: boolean) => void;
};

const SignInPage = (props: SignInPagePropsTypes) => {
	const { onLogin } = props;
	return (
		<>
			<div className="container">
				<div className="glob">
					<img className="glob__gif" src={glob} alt="glob" />
				</div>
				<div className="signin-box">
					<SignInCard onLogin={onLogin} />
				</div>
			</div>
			<p className="copy-right">Powered by Optimas.ai</p>
		</>
	);
};

export default SignInPage;
