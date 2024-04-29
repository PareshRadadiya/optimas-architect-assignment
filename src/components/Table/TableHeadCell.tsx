import React from 'react';
import { renderHeaderCell } from '@/utils/renderCell';

type TableHeadCellPropsType = {
	cell: { id: string; name: string };
};
const TableHeadCell = (props: TableHeadCellPropsType) => {
	return (
		<th>
			<div className="table__head__heading-row__heading-cell">
				{renderHeaderCell(props.cell)}
			</div>
		</th>
	);
};

export default TableHeadCell;
