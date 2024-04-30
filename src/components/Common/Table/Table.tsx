import React, { ReactElement } from 'react';
import './Table.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { DetailsType, RowDataType } from 'constants/TableColumnConstant';

type TablePropsType = {
	isRowCollapsible: boolean;
	headers: { id: string; name: string }[];
	row: RowDataType[];
	isSearchableHeader: boolean;
	size?: 'small';
	renderDetails?: (detail: DetailsType) => ReactElement;
};

const Table = ({
	isRowCollapsible,
	headers,
	row,
	isSearchableHeader,
	size,
	renderDetails,
}: TablePropsType) => {
	const createClass = ` ${size ? `table__${size}` : ' '}`;

	if (!row.length || !headers.length) {
		return (
			<div className="table-container">
				<h3>There is no data </h3>
			</div>
		);
	}

	return (
		<div className="table-container">
			<table className={`table ${createClass}`}>
				<TableHeader
					isSearchableHeader={isSearchableHeader}
					headers={headers}
					collapsible={isRowCollapsible}
				/>
				<TableBody
					renderDetails={renderDetails}
					row={row}
					headers={headers}
					collapsible={isRowCollapsible}
				/>
			</table>
		</div>
	);
};

export default Table;
