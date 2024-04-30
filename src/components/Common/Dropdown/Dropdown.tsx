import React, { useEffect, useRef, useState } from 'react';
import './Dropdown.scss';

type DropdownPropsTypes<T> = {
	options?: T[];
	onSelect?: (option: T) => void;
	renderButton: (
		toggleDropdown: () => void,
		isOpen: boolean,
		selectedOption: T | null,
		close: () => void,
	) => React.ReactNode;
	position?: 'top' | 'bottom' | 'left' | 'right';
	renderDropdown: (
		handleOptionClick: (option: T) => void,
		close: () => void,
	) => React.ReactNode;
};

const Dropdown = <T,>({
	onSelect,
	renderButton,
	renderDropdown,
	position,
}: DropdownPropsTypes<T>) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<T | null>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: T) => {
		console.log('option', option);
		setSelectedOption(option);
		onSelect?.(option);
		setIsOpen(false);
	};

	const close = () => {
		setIsOpen(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div
			ref={dropdownRef}
			className={`dropdown ${position ? `dropdown--${position}` : ''}`}
		>
			{renderButton(toggleDropdown, isOpen, selectedOption, close)}
			{isOpen && (
				<div className="dropdown__menu">
					{renderDropdown(handleOptionClick, close)}
				</div>
			)}
		</div>
	);
};
export default Dropdown;
