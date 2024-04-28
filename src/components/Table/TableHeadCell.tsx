import React from 'react';

type TableHeadCellPropsType = {
	cell: { id: string; name: string };
};
const TableHeadCell = (props: TableHeadCellPropsType) => {
	const { name } = props.cell;
	return (
		<th>
			{name}
			<div className="filter-box"></div>
		</th>
	);
};

export default TableHeadCell;
