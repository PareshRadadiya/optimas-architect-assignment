import React from 'react';
import { Tab, TabPanel, Tabs } from 'components/Tab';
import Button from '../Button/Button';
import UserInfoTabContent from 'components/common/UserInfoTabContent';
import TaskTabContent from 'components/common/TaskTabContent';
import { DetailsType } from '@/constants/TableColumnConstant';
type RowDetailsPropsType = {
	details: DetailsType;
};
const RowDetails = (props: RowDetailsPropsType) => {
	const { details } = props;
	return (
		<Tabs tabShow="user-info">
			<div className="dashboard__control">
				<Tab name="user-info">
					<Button type="button" size="small">
						User Information
					</Button>
				</Tab>
				<Tab name="task">
					<Button type="button" size="small">
						Assigned tasks
					</Button>
				</Tab>
			</div>

			<TabPanel name="user-info">
				<UserInfoTabContent userInfo={details.userInfo} />
			</TabPanel>

			<TabPanel name="task">
				<TaskTabContent tasks={details.task} />
			</TabPanel>
		</Tabs>
	);
};

export default RowDetails;
