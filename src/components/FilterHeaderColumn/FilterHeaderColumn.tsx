import React, { useState } from 'react';
import './FilterHeaderColumn.scss';

import ArrowDown from 'assets/icons/arrow-down.svg?react';
import DirArrowDown from 'assets/icons/dir-arrow-down.svg?react';
import FilterIcon from 'assets/icons/filter.svg?react';

import Dropdown from '@/components/Common/Dropdown/Dropdown';
import Checkbox from '@/components/Common/Form/Checkbox/Checkbox';

type FilterHeaderColumnPropsTypes = {
	column: { id: string; name: string };
};

const dropdownOptions = [
	{
		id: 'filter-1',
		name: 'Filter-1',
	},
	{
		id: 'filter-2',
		name: 'Filter-2',
	},
	{
		id: 'filter-3',
		name: 'Filter-3',
	},
];

const FilterHeaderColumn = (props: FilterHeaderColumnPropsTypes) => {
	const [isSort, setIsSort] = useState<boolean>(false);
	const { column } = props;

	const renderButton = (toggleDropdown: () => void, isOpen: boolean) => {
		return (
			<div
				onClick={toggleDropdown}
				className={`filter-column__filter__button ${
					isOpen ? 'active' : ''
				}`}
			>
				<FilterIcon className="filter" />
				<DirArrowDown className="arrow" />
			</div>
		);
	};

	const renderDropdown = () => {
		return (
			<ul className="filter-dropdown-list">
				{dropdownOptions.map((option) => (
					<li key={option.id}>
						<Checkbox
							onChange={() => {}}
							label={option.name}
							id={option.id}
						/>
					</li>
				))}
			</ul>
		);
	};

	return (
		<div className="filter-column">
			<div
				onClick={() => setIsSort(!isSort)}
				className="filter-column__name"
			>
				<span>{column.name}</span>
				<ArrowDown style={{ scale: isSort ? '-1' : '' }} />
			</div>
			<div className="filter-column__filter">
				<Dropdown
					position="bottom"
					renderDropdown={renderDropdown}
					renderButton={renderButton}
				/>
			</div>
		</div>
	);
};

export default FilterHeaderColumn;
