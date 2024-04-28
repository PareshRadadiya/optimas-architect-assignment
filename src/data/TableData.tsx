import { ColumnIds } from '@/constants/TableColumnConstant';

export const TABLE_DATA = {
	header: [
		ColumnIds.userId,
		ColumnIds.userName,
		ColumnIds.emailId,
		ColumnIds.phone,
		ColumnIds.noOfProjects,
		ColumnIds.designation,
		ColumnIds.action,
	],
	row: [
		{
			userId: 'Emp-01',
			userName: 'Ashlynn Kenter',
			emailId: 'oyoung@icloud.com',
			phone: 'Phone',
			noOfProjects: '4',
			designation: 'Asst. Manager',
			detail: {
				userInfo: {
					name: 'Ashlynn Kenter',
					createdOn: '22-12-2023 10:00 AM',
				},

				task: [
					{
						id: 'task1',
						name: 'Task-1',
						description: 'Task Description ',
						dueDate: '25-04-24',
					},
					{
						id: 'task2',
						name: 'Task-2',
						description: 'Task Description ',
						dueDate: '25-04-24',
					},
				],
			},
		},
		{
			userId: 'Emp-02',
			userName: 'Ashlynn Kenter',
			emailId: 'oyoung@icloud.com',
			phone: 'Phone',
			noOfProjects: '4',
			designation: 'Asst. Manager',
			detail: {
				userInfo: {
					name: 'Ashlynn Kenter',
					createdOn: '22-12-2023 10:00 AM',
				},

				task: [
					{
						id: 'task1',
						name: 'Task-1',
						description: 'Task Description ',
						dueDate: '25-04-24',
					},
					{
						id: 'task2',
						name: 'Task-2',
						description: 'Task Description ',
						dueDate: '25-04-24',
					},
				],
			},
		},
		{
			userId: 'Emp-03',
			userName: 'Ashlynn Kenter',
			emailId: 'oyoung@icloud.com',
			phone: 'Phone',
			noOfProjects: '4',
			designation: 'Asst. Manager',
			detail: {
				userInfo: {
					name: 'Ashlynn Kenter',
					createdOn: '22-12-2023 10:00 AM',
				},

				task: [
					{
						id: 'task1',
						name: 'Task-1',
						description: 'Task Description ',
						dueDate: '25-04-24',
					},
					{
						id: 'task2',
						name: 'Task-2',
						description: 'Task Description ',
						dueDate: '25-04-24',
					},
				],
			},
		},
	],
};
