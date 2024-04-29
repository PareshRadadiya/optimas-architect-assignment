import React from 'react';
import './Checkbox.scss';

type CheckboxProps = {
	label: string;
	checked?: boolean;
	onChange: (checked: boolean) => void;
	id: string;
};

const Checkbox = ({ label, id, checked, onChange }: CheckboxProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked);
	};

	return (
		<div className="checkbox-container">
			<label htmlFor={id}>
				<div className="checkbox-wrapper">
					<input
						id={id}
						type="checkbox"
						checked={checked}
						onChange={handleChange}
					/>
					<span className="checkmark"></span>
				</div>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
