import React from 'react';
import Input from '../Form/Inputs/Input';

import SearchIcon from 'assets/icons/search.svg?react';

const TableHeaderSearchCell = ({ id }: { id: string }) => {
	return (
		<th>
			<Input
				id={id}
				size="small"
				prefix={<SearchIcon />}
				type="text"
				onChange={() => {}}
			/>
		</th>
	);
};

export default TableHeaderSearchCell;
