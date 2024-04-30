import React from 'react';
import './TableHeader.scss';
import TableHeadCell from './TableHeadCell';
import TableHeaderSearchCell from './TableHeaderSearchCell';
import TableHeaderRow from './TableHeaderRow';
import PlaceholderBox from './PlaceholderBox';

type TableHeaderPropsType = {
	collapsible: boolean;
	headers: { id: string; name: string }[];
	isSearchableHeader: boolean;
};
const TableHeader = ({
	collapsible,
	headers,
	isSearchableHeader,
}: TableHeaderPropsType) => {
	return (
		<thead className="table__head">
			<TableHeaderRow collapsible={collapsible}>
				{headers.map((item) => (
					<TableHeadCell key={item.id} cell={item} />
				))}
			</TableHeaderRow>
			{isSearchableHeader && (
				<tr className="table__head__search-row">
					{collapsible && <PlaceholderBox />}
					{headers.map((item) => (
						<TableHeaderSearchCell key={item.id} id={item.id} />
					))}
				</tr>
			)}
		</thead>
	);
};

export default TableHeader;
