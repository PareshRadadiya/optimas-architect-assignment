import React, { ReactNode } from 'react';

type TableHeaderRowPropsType = {
	children: ReactNode;
	collapsible: boolean;
};
const TableHeaderRow = ({ children, collapsible }: TableHeaderRowPropsType) => {
	return (
		<tr className="table__head__heading-row">
			{collapsible && <th></th>}
			{children}
		</tr>
	);
};

export default TableHeaderRow;
