import React, { ReactElement } from 'react';
import './Input.scss';

type InputPropsType = {
	prefix?: ReactElement;
	type: 'text' | 'password' | 'email' | 'number' | 'select';
	onChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
	value?: string;
	placeholder?: string;
	id?: string;
	name?: string;
	size?: 'small';
	error?: {
		message: string | undefined;
	};
	autoComplete?: 'on' | 'off';
	options?: { value: string; label: string }[]; // Add options prop for select type
};

const Input = (props: InputPropsType) => {
	const {
		prefix,
		error,
		size,
		autoComplete,
		onChange,
		type,
		options,
		...res
	} = props;

	const renderInput = () => {
		switch (type) {
			case 'select':
				return (
					<select onChange={onChange} {...res}>
						{props.placeholder && (
							<option disabled hidden value="">
								{props.placeholder}
							</option>
						)}
						{options?.map((option, index) => (
							<option key={index} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				);
			default:
				return (
					<input
						autoComplete={autoComplete ?? 'off'}
						onChange={onChange}
						{...res}
					/>
				);
		}
	};

	return (
		<div className="form-control">
			<div
				className={`input-box ${!prefix ? 'ph-0' : ''} ${
					error && error.message ? 'error-border' : ''
				} ${size ? `input-box__${size}` : ''}`}
			>
				{prefix}
				{renderInput()}
			</div>
			{error && error.message && <p className="error">{error.message}</p>}
		</div>
	);
};

export default Input;
