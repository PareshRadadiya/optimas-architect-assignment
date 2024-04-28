import React, { ReactElement } from 'react';
import './TableRowExpander.scss';

import { DetailsType } from 'constants/TableColumnConstant';

type TableRowExpander = {
	details: DetailsType;
	children: ReactElement | undefined;
};

const TableRowExpander = (props: TableRowExpander) => {
	const { children } = props;

	return (
		<div className="expander">
			<div className="expander__shadow"></div>
			<div className="expander__container">{children}</div>
		</div>
	);
};

export default TableRowExpander;
