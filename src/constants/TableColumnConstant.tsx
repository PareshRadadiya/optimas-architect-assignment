import React from 'react';
import ActionColumn from 'components/common/ActionColumn/ActionColumn';
import FilterHeaderColumn from '@/components/common/FilterHeaderColumn/FilterHeaderColumn';

export enum ColumnIds {
	userId = 'userId',
	userName = 'userName',
	emailId = 'emailId',
	phone = 'phone',
	noOfProjects = 'noOfProjects',
	designation = 'designation',
	action = 'action',
	name = 'name',
	description = 'description',
	dueDate = 'dueDate',
}

export type DetailsType = {
	userInfo: {
		name: string;
		createdOn: string;
	};
	task: {
		id: string;
		name: string;
		description: string;
		dueDate: string;
	}[];
};

export type RowDataType = {
	[key in ColumnIds]?: string;
} & { detail?: DetailsType };

type ColumnConfig = {
	[key in ColumnIds]: {
		id: key;
		displayName: string;
		render: (value: string) => JSX.Element;
		renderHeader: (column: { id: string; name: string }) => JSX.Element;
	};
};

export const TableColumnConstant: ColumnConfig = {
	[ColumnIds.userId]: {
		id: ColumnIds.userId,
		displayName: 'User ID',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <FilterHeaderColumn column={column} />,
	},
	[ColumnIds.userName]: {
		id: ColumnIds.userName,
		displayName: 'User Name',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <FilterHeaderColumn column={column} />,
	},
	[ColumnIds.emailId]: {
		id: ColumnIds.emailId,
		displayName: 'Email ID',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <FilterHeaderColumn column={column} />,
	},
	[ColumnIds.phone]: {
		id: ColumnIds.phone,
		displayName: 'Phone',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <FilterHeaderColumn column={column} />,
	},
	[ColumnIds.noOfProjects]: {
		id: ColumnIds.noOfProjects,
		displayName: 'No of Projects',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <>{column.name}</>,
	},
	[ColumnIds.designation]: {
		id: ColumnIds.designation,
		displayName: 'Designation',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <FilterHeaderColumn column={column} />,
	},
	[ColumnIds.name]: {
		id: ColumnIds.name,
		displayName: 'Name',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <>{column.name}</>,
	},

	// User Info data Table

	[ColumnIds.description]: {
		id: ColumnIds.description,
		displayName: 'Description',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <>{column.name}</>,
	},
	[ColumnIds.dueDate]: {
		id: ColumnIds.dueDate,
		displayName: 'Due date',
		render: (value) => <>{value}</>,
		renderHeader: (column) => <>{column.name}</>,
	},
	[ColumnIds.action]: {
		id: ColumnIds.action,
		displayName: 'Action',
		render: () => <ActionColumn />,
		renderHeader: (column) => <>{column.name}</>,
	},
};
