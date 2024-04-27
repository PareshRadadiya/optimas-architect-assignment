import React from 'react';
import glob from '../assets/glob.gif';
import './SignInPage.scss';
import Card from '../components/Card';

const SignInPage = () => {
	return (
		<div className="container">
			<div className="glob">
				<img className="glob__gif" src={glob} alt="glob" />
			</div>
			<div className="signin-box">
				<Card>
					<div>sadsad</div>
				</Card>
			</div>
		</div>
	);
};

export default SignInPage;
