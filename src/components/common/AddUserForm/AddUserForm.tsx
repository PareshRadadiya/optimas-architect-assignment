import React from 'react';
import './AddUserForm.scss';

import CrossIcon from 'assets/icons/x.svg?react';
import Input from 'components/Form/Inputs/Input';
import Button from 'components/Button/Button';

type AddUserFormPropsType = {
	close: () => void;
};

const options = [
	{ value: 'SE', label: 'Software Eng' },
	{ value: 'QE', label: 'Quality Eng' },
];

const AddUserForm = (props: AddUserFormPropsType) => {
	const { close } = props;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		close();
	};

	return (
		<div className="add_user_form">
			<div className="add_user_form__box">
				<h3 className="add_user_form__title">Enter Below Details</h3>
				<CrossIcon onClick={close} />
			</div>
			<form onSubmit={handleSubmit} className="theme-white">
				<div className="input-wrapper">
					<Input
						placeholder="User Name"
						type="text"
						onChange={() => {}}
					/>
					<Input
						placeholder="User ID"
						type="text"
						onChange={() => {}}
					/>
					<Input
						placeholder="Email Id"
						type="text"
						onChange={() => {}}
					/>
					<Input
						placeholder="Phone no."
						type="number"
						onChange={() => {}}
					/>
					<Input
						options={options}
						type="select"
						placeholder="Designation"
						onChange={() => {}}
					/>
					<div className="add_user_form__footer">
						<Button onClick={close} type="button" variant="simple">
							Cancel
						</Button>
						<Button size="square" type="submit" variant="dark">
							Save & Continue
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddUserForm;
