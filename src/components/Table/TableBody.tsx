import React, { ReactElement, useState } from 'react';
import './TableBody.scss';
import TableBodyCell from './TableBodyCell';
import TableBodyRow from './TableBodyRow';
import { DetailsType, RowDataType } from 'constants/TableColumnConstant';
import { renderCell } from '@/utils/renderCell';

type TableBodyType = {
	row: RowDataType[];
	headers: { id: string; name: string }[];
	renderDetails?: (detail: DetailsType) => ReactElement;
	collapsible: boolean;
};

const TableBody = ({
	row,
	headers,
	collapsible,
	renderDetails,
}: TableBodyType) => {
	const [clickedRow, setClickedRow] = useState<{
		index: number | null;
		isCollapsed: boolean;
	}>({
		index: null,
		isCollapsed: false,
	});

	const handleClickedRow = (index: number, isCollapsed: boolean) => {
		setClickedRow({
			index,
			isCollapsed,
		});
	};

	return (
		<tbody className="table__body">
			{row.map((item, index) => {
				const isRowHidden =
					collapsible &&
					clickedRow.index !== null &&
					!clickedRow.isCollapsed &&
					index > clickedRow.index;

				const key = isRowHidden ? `hidden_${index}` : index;
				return (
					<React.Fragment key={key}>
						{!isRowHidden && (
							<TableBodyRow
								detail={item?.detail}
								key={index}
								index={index}
								collapsible={collapsible}
								detailPanelColspan={headers.length}
								renderDetails={renderDetails}
								currentOpenRow={handleClickedRow}
							>
								{headers.map((column) => (
									<TableBodyCell key={column.id}>
										{renderCell(column, item)}
									</TableBodyCell>
								))}
							</TableBodyRow>
						)}
					</React.Fragment>
				);
			})}
		</tbody>
	);
};

export default TableBody;
