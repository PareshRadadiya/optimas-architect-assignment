import React from 'react';

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
	};
};

export const TableColumnConstant: ColumnConfig = {
	[ColumnIds.userId]: {
		id: ColumnIds.userId,
		displayName: 'User ID',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.userName]: {
		id: ColumnIds.userName,
		displayName: 'User Name',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.emailId]: {
		id: ColumnIds.emailId,
		displayName: 'Email ID',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.phone]: {
		id: ColumnIds.phone,
		displayName: 'Phone',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.noOfProjects]: {
		id: ColumnIds.noOfProjects,
		displayName: 'No of Projects',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.designation]: {
		id: ColumnIds.designation,
		displayName: 'Designation',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.name]: {
		id: ColumnIds.name,
		displayName: 'Name',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.description]: {
		id: ColumnIds.description,
		displayName: 'Description',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.dueDate]: {
		id: ColumnIds.dueDate,
		displayName: 'Due date',
		render: (value: string) => <>{value}</>,
	},
	[ColumnIds.action]: {
		id: ColumnIds.action,
		displayName: 'Action',
		render: () => <>View</>,
	},
};
