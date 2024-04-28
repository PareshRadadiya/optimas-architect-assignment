import React, { ReactElement } from 'react';
import './Input.scss';
type InputPropsType = {
	prefix?: ReactElement;
	type: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	placeholder?: string;
	id?: string;
	name?: string;
	size?: 'small';
	error?: {
		message: string | undefined;
	};
	autoComplete?: 'on' | 'off';
};

const Input = (props: InputPropsType) => {
	const { prefix, error, size, autoComplete, onChange, ...res } = props;
	return (
		<div className="form-control">
			<div
				className={`input-box ${
					error && error.message && 'error-border'
				} ${size ? `input-box__${size}` : ''}`}
			>
				{prefix}
				<input
					autoComplete={autoComplete ?? 'off'}
					onChange={onChange}
					{...res}
				/>
			</div>
			{error && error.message && <p className="error">{error.message}</p>}
		</div>
	);
};

export default Input;
