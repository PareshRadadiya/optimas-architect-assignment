import React from 'react';
import './TaskTabContent.scss';
import Table from 'components/Table/Table';
import { ColumnIds, TableColumnConstant } from 'constants/TableColumnConstant';

type TaskTabContentPropsType = {
	tasks: {
		id: string;
		name: string;
		description: string;
		dueDate: string;
	}[];
};

const TaskTabContent = ({ tasks }: TaskTabContentPropsType) => {
	const taskKey = Object.keys(tasks[0]).filter((task) => task !== 'id');
	const headers = taskKey.map((column) => {
		return {
			id: column,
			name: TableColumnConstant[column as ColumnIds]?.displayName,
		};
	});
	const row = tasks;

	return (
		<div className="task-content">
			<Table
				isSearchableHeader={true}
				row={row}
				headers={headers}
				isRowCollapsible={false}
				size="small"
			/>
		</div>
	);
};

export default TaskTabContent;
