import {
	ColumnIds,
	RowDataType,
	TableColumnConstant,
} from 'constants/TableColumnConstant';

export const renderCell = (
	column: { id: string; name: string },
	item: RowDataType,
) => {
	const value = item[column.id as ColumnIds] ?? '';
	return TableColumnConstant[column.id as ColumnIds]?.render(value);
};

export const renderHeaderCell = (column: { id: string; name: string }) => {
	return TableColumnConstant[column.id as ColumnIds]?.renderHeader(column);
};
