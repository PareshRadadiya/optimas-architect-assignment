import React, { ReactElement } from 'react';

type TableBodyCellPropsType = {
	children: ReactElement;
};

const TableBodyCell = ({ children }: TableBodyCellPropsType) => {
	return <td>{children}</td>;
};

export default TableBodyCell;
