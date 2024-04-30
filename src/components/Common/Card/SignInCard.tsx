import React, { useState } from 'react';

import Logo from 'assets/logo.png';
import UserIcon from 'assets/icons/user.svg?react';
import Key from 'assets/icons/key.svg?react';

import './SignInCard.scss';
import Input from '@/components/Common/Form/Inputs/Input';
import Button from '@/components/Common/Button/Button';
import { LoginUser } from 'constants/user';

type ErrorStateType = {
	userName?: string;
	password?: string;
};

type FormData = {
	userName: string;
	password: string;
};

type SignInCardPropsType = {
	onLogin: (isLogin: boolean) => void;
};

const SignInCard = ({ onLogin }: SignInCardPropsType) => {
	const [data, setData] = useState<{
		formData: FormData;
		errors: ErrorStateType;
	}>({
		formData: { userName: '', password: '' },
		errors: { userName: undefined, password: undefined },
	});

	const validateCredentials = () => {
		const { userName, password } = data.formData;
		const errors: ErrorStateType = {};
		let isValid = true;

		if (userName === '') {
			errors.userName = 'Username is required';
			isValid = false;
		}

		if (userName && LoginUser.userName !== userName) {
			errors.userName = 'Username not available';
			isValid = false;
		}

		if (password === '') {
			errors.password = 'Password is required';
			isValid = false;
		}

		if (password && LoginUser.password !== password) {
			errors.password = 'Password is incorrect';
			isValid = false;
		}

		setData((prev) => ({ ...prev, errors }));
		return isValid;
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateCredentials()) {
			onLogin(true);
		}
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setData((prev) => ({
			...prev,
			formData: { ...prev.formData, [name]: value },
			errors: { ...prev.errors, [name]: undefined },
		}));
	};

	return (
		<div className="sign_in_card">
			<img className="sign_in_card__logo" src={Logo} alt="Optimas logo" />
			<div className="sign_in_card__form">
				<h1 className="sign_in_card__title">Login</h1>
				<form onSubmit={onSubmit}>
					<div className="sign_in_card__input-group">
						<Input
							value={data.formData.userName}
							name="userName"
							onChange={onChangeHandler}
							prefix={<UserIcon />}
							type="text"
							placeholder="User Name"
							error={{ message: data.errors.userName }}
						/>
						<Input
							value={data.formData.password}
							name="password"
							onChange={onChangeHandler}
							prefix={<Key />}
							type="password"
							placeholder="Password"
							error={{ message: data.errors.password }}
						/>
					</div>
					<div className="sign_in_card__footer">
						<a href="#">Forgot Password?</a>
						<Button variant="primary" type="submit">
							SIGN IN
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignInCard;
